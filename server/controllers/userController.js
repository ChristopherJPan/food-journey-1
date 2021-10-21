const db = require('../models/foodModel');

const userController = {};

/*
REQ
  {
    account: '',  // <- this is the username
    password: '',
  }

RES
  {
    accountId: 0,
    account: '',
    accountFirstName: '',
    accountLastName: '',
    accountEmail: '',
    recipeList: [],
    currentRecipeId: 0
  }

*/

userController.verifyUser = (req, res, next) => {
  
  const queryText = "SELECT * FROM users WHERE user_name = '" + String(req.body.username) + "';"
  db.query(queryText, (err, result) => {
    if (err) {
      console.log(err.stack);
      // does it go here if returns empty? no user by that user_name?
      // handle error
    }
    else {

      const user = result.rows[0];

      if (!user) {
        return next('no user by that username');
      }
      // if password is correct, save info
      if (req.body.password === user.password) {
        res.locals.accountId = user._id;
        res.locals.account = user.user_name;
        res.locals.accountFirstName = user.first_name;
        res.locals.accountLastName = user.last_name;
        res.locals.accountEmail = user.email;
        // do recipeList in a recipeController function
        res.locals.currentRecipeId = null; // talk about this as a group
      }

      // console.log('result of userController.verifyUser', result.rows);
      // otherwise incorrect password
      return  next();
    }
  })

}

module.exports = userController;

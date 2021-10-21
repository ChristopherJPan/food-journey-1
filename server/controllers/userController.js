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

userController.createUser = (req, res, next) => {

  const createUserQuery = 'INSERT INTO public.users (first_name, last_name, user_name, password, email)\
  VALUES ( $1, $2, $3, $4, $5)'
  const params = [
    req.body.firstName,
    req.body.lastName,
    req.body.username,
    req.body.password,
    req.body.email
  ];
  db.query(createUserQuery, params)
    .then(data=>{
      res.locals = data
      res.locals.message = 'Account Successfully Created, Please Log in'
    })
    .then(data=>next())
    .catch(err=>next(err));
}

// INSERT INTO public.users VALUES (1, 'Crys', 'Lim', 'clim', 'password123', 'myemail@gmail.com');
// const addQuery = 'INSERT INTO people (name,mass,hair_color,skin_color,eye_color,birth_year,gender,species_id,homeworld_id,height) \
//   VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)';
//   const rqb = req.body;
//   const params = [
//     rqb.name,
//     rqb.mass,
//     rqb.hair_color,
//     rqb.skin_color,
//     rqb.eye_color,
//     rqb.birth_year,
//     rqb.gender,
//     rqb.species_id,
//     rqb.homeworld_id,
//     rqb.height
//   ];
//   console.log(req.body);
//   // const 
//   db
//     .query(addQuery, params)
module.exports = userController;

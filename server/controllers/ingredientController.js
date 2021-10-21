const db = require("../models/foodModel");

const ingredientController = {};

// creates new ingredients
// adds to res locals all the ingredient info new and old
// [{id: name: quantity: units: }, {}, {},...]

// REQ body, list
/*
  {
    account: '',
    recipeName: '',
    ingredients: [{},{},{}],
    instructions: ''
  }

  where ingredients is
  {
    name: '',
    quantity: 0,
    unitOfMeasurement: ''
  }
*/

// get ingredients that already exist
ingredientController.getIngredients = (req, res, next) => {
  let queryText = "SELECT * FROM ingredients WHERE ";

  res.locals.ingredients = [];
  const ingredientsObj = {};

  // get ingredients list from request body
  const ingredients = req.body.ingredients;
  console.log("req.body", req.body);
  // for every ingredient
  for (let i = 0; i < ingredients.length; i++) {
    const ingredient = ingredients[i];

    // create query condition
    if (i === 0) {
      queryText += "name = '" + ingredient.name + "'";
    } else {
      queryText += " OR name = '" + ingredient.name + "'";
    }

    // add name key with values for quantity and units to ingredientsObject
    ingredientsObj[ingredient.name] = {};
    ingredientsObj[ingredient.name].quantity = ingredient.quantity;
    ingredientsObj[ingredient.name].units = ingredient.unitOfMeasurement;
  }
  queryText += ";";

  // get ids for those ingredient names
  db.query(queryText, (err, result) => {
    if (err) return next(err);

    for (let entry of result.rows) {
      ingredientsObj[entry.name].id = entry._id;
      const ingredient = {
        ...ingredientsObj[entry.name],
        name: entry.name,
      };

      res.locals.ingredients.push(ingredient);
    }
    res.locals.ingredientsObj = ingredientsObj;
    return next();
  });
};

// insert ones that do not exist yet
ingredientController.createIngredients = (req, res, next) => {
  let queryText = "";

  // insert new ingredients
  for (ingredient of req.body.ingredients) {
    // if id does not exists on res.locals.ingredientsObj
    if (!res.locals.ingredientsObj[ingredient.name].id) {
      // insert into db
      queryText += `INSERT INTO ingredients (name) VALUES ('${ingredient.name}');`;
    }
  }

  db.query(queryText, (err, result) => {
    if (err) return next(err);
    return next();
  });
};

// TODO:
// search by ingredient id
// return all the recipes that include that ingredient
//
module.exports = ingredientController;

const db = require('../models/foodModel');

const recipeController = {};

// gets an array of objects
/*
[{
  recipe_name: ,
  recipe_ingredients: [{}],
  recipe_instructions:,
  user_username:
}, ...]


*/

// helper function for get Recipes



recipeController.getRecipes = (req, res, next) => {
  console.log('in getRecipes');
  // make query text
  const queryText = 'SELECT r._id AS recipe_id, r.name AS recipe_name, r.directions AS recipe_instructions, user_name, i.name as ingredient_name, quantity, units ' +
    'FROM recipes r ' +
    'LEFT JOIN makings m ' +
    'ON m.recipe_id = r._id ' +
    'LEFT JOIN ingredients i ' +
    'ON m.ingredient_id = i._id ' +
    'LEFT JOIN users u ' +
    'ON u._id = r.user_id;';

  // db.query
  // result.rows is array of objects
  // [{column name: value}]

  db.query(queryText, (err, result) => {
    if (err){
      console.log(err.stack);
    } else {
      //console.log(result);

      const recipesObj = {}; // key: id, val: recipe object
      // for every entry (using recipe_id)
      for (const entry of result.rows) {
        console.log(entry.ingredient_name);

        // ingredient object
        const ingredient = {
          name: entry.ingredient_name,
          quantity: entry.quantity,
          unitOfMeasurement: entry.units
        }

        // if recipe does not already exist
        if (!recipesObj.hasOwnProperty(String(entry.recipe_id))) {
          // create object at recip id
          recipesObj[String(entry.recipe_id)] = {
            recipeId: entry.recipe_id,
            recipeName: entry.recipe_name,
            ingredients: [ingredient],
            instructions: entry.recipe_instructions,
            account: entry.user_name
          };
        }
        // otherwise push the new ingredient
        else {
          console.log('more than 1 ingredient');
          recipesObj[String(entry.recipe_id)].ingredients.push(ingredient);
        }

      }

      console.log(recipesObj);

      res.locals.recipeList = Object.values(recipesObj);
      return next();
    }
  })

}

// get recipes for specific user
// added WHERE, then copied most of get userRecipes
// to modularize, can move to a separate helper function
recipeController.getUserRecipes = (req, res, next) => {
  const queryText = 'SELECT r._id AS recipe_id, r.name AS recipe_name, r.directions AS recipe_instructions, user_name, i.name as ingredient_name, quantity, units ' +
    'FROM recipes r ' +
    'LEFT JOIN makings m ' +
    'ON m.recipe_id = r._id ' +
    'LEFT JOIN ingredients i ' +
    'ON m.ingredient_id = i._id ' +
    'LEFT JOIN users u ' +
    'ON u._id = r.user_id ' +
    'WHERE u._id = ' + String(res.locals.accountId) + ';';

  db.query(queryText, (err, result) => {
    if (err) {
      console.log(err.stack);
    } else {
      //console.log(result);

      const recipesObj = {}; // key: id, val: recipe object
      // for every entry (using recipe_id)
      for (const entry of result.rows) {
        console.log(entry.ingredient_name);

        // ingredient object
        const ingredient = {
          name: entry.ingredient_name,
          quantity: entry.quantity,
          unitOfMeasurement: entry.units
        }

        // if recipe does not already exist
        if (!recipesObj.hasOwnProperty(String(entry.recipe_id))) {
          // create object at recip id
          recipesObj[String(entry.recipe_id)] = {
            recipeId: entry.recipe_id,
            recipeName: entry.recipe_name,
            ingredients: [ingredient],
            instructions: entry.recipe_instructions,
            account: entry.user_name
          };
        }
        // otherwise push the new ingredient
        else {
          console.log('more than 1 ingredient');
          recipesObj[String(entry.recipe_id)].ingredients.push(ingredient);
        }

      }

      console.log(recipesObj);

      res.locals.recipeList = Object.values(recipesObj);
      return next();
    }
  })

}


recipeController.createRecipe = (req, res, next) => {
  //Only one user
  console.log('THE BODY OF REQUEST = ', req.body);
  res.locals.userId = 1;
  let createQuery = `INSERT INTO recipes (name, user_id, directions) VALUES ('${req.body.recipeName}', ${res.locals.userId}, '${req.body.instructions}');`;



  const ingredients = res.locals.ingredients;
  // [{id: name: quantity: units: }]
  for(item of ingredients){
    createQuery+=` INSERT INTO ingredients (name) VALUES ('${item.name}');`;
    createQuery+=` INSERT INTO makings (recipe_id, ingredient_id, quantity, units) VALUES (currval('recipes__id_seq'), currval('ingredients__id_seq'), ${item.quantity}, '${item.unitOfMeasurement}');`;
  }

  db.query(createQuery, (err, data) => {
    if(err) return next(err);
    console.log(data);
    return next();
  });


};

module.exports = recipeController;

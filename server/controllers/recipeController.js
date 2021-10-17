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
          unit: entry.units
        }

        // if recipe does not already exist
        if (!recipesObj.hasOwnProperty(String(entry.recipe_id))) {
          // create object at recip id
          recipesObj[String(entry.recipe_id)] = {
            recipe_name: entry.recipe_name,
            recipe_ingredients: [ingredient],
            recipe_instructions: entry.recipe_instructions,
            user_username: entry.user_name
          };
        }
        // otherwise push the new ingredient
        else {
          console.log('more than 1 ingredient');
          recipesObj[String(entry.recipe_id)].recipe_ingredients.push(ingredient);
        }

      }

      console.log(recipesObj);

      res.locals.recipes = Object.values(recipesObj);
      return next();
    }
  })

}




recipeController.createRecipe = (req, res, next) => {
  //Only one user
  res.locals.userId = 1;
  let createQuery = `INSERT INTO recipes (name, user_id, directions) VALUES ('${req.body.name}', ${res.locals.userId}, '${req.body.directions}'});`;

  const ingredients = req.body.ingredients;
  createQuery+=`SET @recipe_id = LAST_INSERT_ID();`;

  for(item of ingredients){
    createQuery+=`INSERT IGNORE INTO ingredients (name) VALUES ('${item.name}'');`;
    createQuery+=`SET @ingredient_id = LAST_INSERT_ID();`;
    createQuery+=`INSERT INTO makings (recipe_id, ingredient_id, quantity, units) VALUES (@recipe_id, @ingredient_id, ${item.quantity}, '${item.units}');`;
  }

  db.query(createQuery, (err, data) => {
    if(err) return next(err);
    console.log(data);
    return next();
  });


};

module.exports = recipeController;

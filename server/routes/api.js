const express = require('express');
const recipeController = require('../controllers/recipeController');
const ingredientController = require('../controllers/ingredientController');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/recipes',
  (req, res, next) => {
    console.log('here');
    return next();
  },
  recipeController.getRecipes,
  (req, res) => {
    return res.status(200).json(res.locals.recipes);
  }
);

router.post('/recipes',
  recipeController.createRecipe,
  (req, res) => {
    return res.sendStatus(200);
  }
);


router.get('/login',
  userController.verifyUser,
  (req, res) => {
    return res.status(200).json({...res.locals});
  }
);




module.exports = router;

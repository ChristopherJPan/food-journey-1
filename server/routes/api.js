const express = require('express');
const ReactSixteenAdapter = require('enzyme-adapter-react-16');
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
  (req, res) => res.status(200).json(res.locals.recipeList));

router.post('/recipes',
  ingredientController.getIngredients,
  ingredientController.createIngredients,
  ingredientController.getIngredients,
  recipeController.createRecipe,
  (req, res) => res.sendStatus(200));

router.post('/recipeByIngredient',
  recipeController.getRecipesByIngredient,
  (req, res) => res.status(200).json(res.locals.recipeList));

router.post('/login',
  userController.verifyUser,
  recipeController.getUserRecipes,
  (req, res) => res.status(200).json({ ...res.locals }));

router.delete('/recipe/:id',
  recipeController.deleteMakings,
  recipeController.deleteRecipe, (req, res) => res.redirect('/#/main'));

module.exports = router;

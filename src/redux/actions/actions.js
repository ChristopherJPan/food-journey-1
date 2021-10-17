import * as types from './actionTypes';

export const recipeCreator = recipeInfo => ({
  type: type.CREATERECIPE,
  payload: recipeInfo,
});

export const loggingIn = accountInfo => ({
  type: type.LOGIN,
  payload: accountInfo,
});

export const searchingForRecipe = recipeName => ({
  type: type.SEARCHING,
  payload: recipeName,
});
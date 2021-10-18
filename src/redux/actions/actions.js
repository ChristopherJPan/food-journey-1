import * as types from './actionTypes';

export const recipeCreator = recipeInfo => ({
  type: types.CREATERECIPE,
  payload: recipeInfo,
});

export const loggingIn = accountInfo => ({
  type: types.LOGIN,
  payload: accountInfo,
});

export const searchingForRecipe = recipeName => ({
  type: types.SEARCHING,
  payload: recipeName,
});

export const getInitialState = theState => ({
  type: types.GET_INITIAL_STATE,
  payload: theState,
})

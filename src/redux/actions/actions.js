import * as types from './actionTypes';

// perform POST here to '/api/recipes'
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

// perform GET here to '/api/recipes'
export const getInitialState = () => dispatch => {
  fetch('/api/recipes')
    .then(({ data }) => {
      dispatch({
        type: types.GET_INITIAL_STATE,
        payload: data,
      });
    })
    .catch(console.error);
  // type: types.GET_INITIAL_STATE,
  // payload: theState,
};

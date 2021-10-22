import * as types from './actionTypes';

// perform POST here to '/api/recipes'
export const recipeCreator = recipeInfo => ({
  type: types.CREATERECIPE,
  payload: recipeInfo,
});

export const searchingForRecipe = recipeName => ({
  type: types.SEARCHING,
  payload: recipeName,
});

// perform GET here to '/api/recipes'
export const getInitialState = data => ({
  // fetch('/api/recipes')
  //   .then(({ data }) => {
  //     dispatch({
  //       type: types.GET_INITIAL_STATE,
  //       payload: data,
  //     });
  //   })
  //   .catch(console.error);
  type: types.GET_INITIAL_STATE,
  payload: data,
});


// LOGIN
export const loggingIn = accountInfo => ({
  type: types.LOGIN,
  payload: accountInfo,
});

export const loginSuccess = userInfo => ({
  type: types.LOGIN_SUCCESS,
  payload: userInfo
})

export const loginFailure = errorMessage => ({
  type: types.LOGIN_FAILURE,
  payload: errorMessage
})

export const productsReceived = userInfo => ({
  type: types.PRODUCTS_RECEIVED,
  payload: userInfo
})

// SIGNUP
export const signUp = accountInfo => ({
  type: types.SIGNUP,
  payload: accountInfo,
});

export const signUpSuccess = () => ({
  type: types.SIGNUP_SUCCESS,
});

export const signUpFailure = message => ({
  type: types.SIGNUP_FAILURE,
  payload: message,
});

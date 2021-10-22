import * as types from '../actions/actionTypes';

const initalState = {
  accountId: 0,
  account: '',
  accountFirstName: '',
  accountLastName: '',
  accountEmail: '',
  recipeList: [],
  currentRecipeId: 0,
};

const recipeReducer = (state = initalState, action) => {
  switch (action.type){

    case types.CREATERECIPE: {
      let recipeList;
      const currentRecipeId = ++state.currentRecipeId;

      const newRecipe = {
        account: state.account,
        recipeId: currentRecipeId,
        recipeName: action.payload.recipeName,
        ingredients: action.payload.ingredients,
        instructions: action.payload.instructions,
      }

      recipeList = state.recipeList.slice();
      recipeList.push(newRecipe);

      return {
        ...state,
        recipeList,
        currentRecipeId
      };
    }

    case types.GET_INITIAL_STATE: {
      return {...state, recipeList: action.payload};
    }
    
    // successful login and setting state to user's main page
    case types.PRODUCTS_RECEIVED: {
      return { ...action.payload };
    }
   
    
    default:{
      console.log('Reducer in default for recipe')
      return state;
    }
  }
}

export default recipeReducer;
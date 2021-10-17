import * as types from '../actions/actionTypes';

const initalState = {
  accountId: 0,
  account: '',
  accountFirstName: '',
  accountLastName: '',
  accountEmail: '',
  recipeList: [],
  currentRecipeId: 0
};

const recipeReducer = (state = initalState, action) => {
  switch (action.type){

    case types.CREATERECIPE: {
      let recipeList;
      const currentRecipeId = ++state.currentRecipeId;

      const newRecipe = {
        accountId: state.accountId,
        account: state.account,
        recipeId: currentRecipeId,
        recipeName: action.payload.recipeName,
        ingredients: action.payload.ingredients, //need to make the array of objects in our payload
        instructions: action.payload.instructions,
      }

      recipeList = state.recipeList.slice();
      recipeList.push(newRecipe);

      // fetch(/)

      return {
        ...state,
        recipeList,
        currentRecipeId
      };
    }


    // create a recipe

    // logining in

    // searching for recipe


    default:{
      console.log('Reducer in default')
      return state;
    }
  }


}

export default recipeReducer;
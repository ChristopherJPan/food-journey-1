import * as types from '../actions/actionTypes';

const initalState = {
  accountId: 0,
  account: '',
  accountFirstName: '',
  accountLastName: '',
  accountEmail: '',
  recipeList: [],
  currentRecipeId: 0,
  isLoggedIn: false,
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

    // case types.
    // create a recipe

    // The products received from the successful login
    case types.PRODUCTS_RECEIVED: {
      // return state with new information
      // return isLoggedIn = true
      console.log('PRODUCTS_RECEIVED\'s action.payload: ',action.payload)
      console.log('im in products received, reducer');
      return {...action.payload, isLoggedIn: true};
    }
    // unsuccessful login  
    case types.LOGIN_UNSUCCESSFUL: {
      console.log('Unsuccessful Login');
      return state;
    }  
      
    // searching for recipe


    default:{
      console.log('Reducer in default')
      return state;
    }
  }
}

export default recipeReducer;
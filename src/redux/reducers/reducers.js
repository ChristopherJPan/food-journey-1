import * as types from '../actions/actionTypes';

const initalState = {
  accountID: 0,
  account: '',
  accountFirstName: '',
  accountLastName: '',
  recipieList: [],
};

const recipeReducer = (state = initalState, action) => {
  switch (action.type){
    case types.CREATERECIPE: {
      // fetch(/)
      return {...state};
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
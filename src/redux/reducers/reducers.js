import * as types from '../actions/actionTypes';

const initalState = {

};

const recipeReducer = (state = initalState, action) => {
  switch (action.type){
    case types.SOMETHING: {
      return {...state};
    }
    default:{
      console.log('Reducer in default')
      return state;
    }
  }


}

export default recipeReducer;
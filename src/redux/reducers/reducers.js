import * as types from '../actions/actionTypes';

const initalState = {

  accountId: 0,
  account: '',
  accountFirstName: '',
  accountLastName: '',
  accountEmail: '',
  recipeList: [],
  currentRecipeId: 0

  // accountId: 1,
  // account: 'test1',
  // accountFirstName: 'test2',
  // accountLastName: 'test3',
  // accountEmail: 'test4',
  // recipeList: [{
  //   // accountId: 69,
  //   account: 'BootySlayer911',
  //   recipeId: 96,
  //   recipeName: 'WifuCreator',
  //   ingredients: [{
  //     name:'1',
  //     quantity:'2',
  //     unitOfMeasurement:'3'
  //   }], //need to make the array of objects in our payload
  //   instructions: 'this is a string',
  // },{
  //   // accountId: 69,
  //   account: 'BootySlayer911',
  //   recipeId: 96,
  //   recipeName: 'WifuCreator',
  //   ingredients: [{
  //     name:'1',
  //     quantity:'2',
  //     unitOfMeasurement:'3'
  //   },{
  //     name:'1',
  //     quantity:'2',
  //     unitOfMeasurement:'3'
  //   },{
  //     name:'1',
  //     quantity:'2',
  //     unitOfMeasurement:'3'
  //   },{
  //     name:'1',
  //     quantity:'2',
  //     unitOfMeasurement:'3'
  //   }], //need to make the array of objects in our payload
  //   instructions: 'this is a string',
  // },{
  //   // accountId: 69,
  //   account: 'BootySlayer911',
  //   recipeId: 96,
  //   recipeName: 'WifuCreator',
  //   ingredients: [{
  //     name:'1',
  //     quantity:'2',
  //     unitOfMeasurement:'3'
  //   }], //need to make the array of objects in our payload
  //   instructions: 'this is a string',
  // },{
  //   // accountId: 69,
  //   account: 'BootySlayer911',
  //   recipeId: 96,
  //   recipeName: 'WifuCreator',
  //   ingredients: [{
  //     name:'1',
  //     quantity:'2',
  //     unitOfMeasurement:'3'
  //   }], //need to make the array of objects in our payload
  //   instructions: 'this is a string',
  // }],
  // currentRecipeId: 2
};

const recipeReducer = (state = initalState, action) => {
  switch (action.type){

    case types.CREATERECIPE: {
      let recipeList;
      const currentRecipeId = ++state.currentRecipeId;

      const newRecipe = {
        // accountId: state.accountId,
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

    case types.GET_INITIAL_STATE: {
      console.log('HELLO MY WIFUS!', action.payload);

      return {...state, recipeList: action.payload};
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
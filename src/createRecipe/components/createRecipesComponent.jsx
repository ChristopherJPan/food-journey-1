import React from 'react';



const createRecipesComponent = props => {
  const handleClick = (e) => {
    const textValue = document.getElementById('textBoxValue').value;
    const sendingTheStuff = {


    };
    store.dispatch(addWifuCreator(textValue));
  }
  // K = # of ingredients
  // let K = 1;

  // ingreArray = [];
  // for(let i = 0; i < K; i++){
  //   ingreArray.push(<input type="text" name="ingre1"></input>);
  // }

  // [{},{}]

  // render(){
  //   return (<button onClick={this.addIngre} value='Add Ingredient'></button>{ingreArray});
  // }

  // accountId: state.accountId,
  // account: state.account,
  // recipeId: currentRecipeId,
  // recipeName: action.payload.recipeName,
  // ingredients: action.payload.ingredients, //need to make the array of objects in our payload
  // instructions: action.payload.instructions,

  return (
    <div>
      <p>recipeName</p>
      <input type="text" id="recipeName"/>
      <p>ingredients</p>
      <input type="text" id="name1"/>
      <input type="text" id="quantity1"/>
      <input type="text" id="unitOfMeasurement1"/>
      <p>instructions</p>
      <input type="text" id="instructions"/>
      <button onClick={(e) => handleClick(e)}>Add Wifu</button>
    </div>

  );
};


  export default createRecipesComponent;
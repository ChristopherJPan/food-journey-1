import React from 'react';

const CreateRecipe = props => {
  // const handleClick = (e) => {
  //   const textValue = document.getElementById('textBoxValue').value;
  //   const sendingTheStuff = {


  //   };
  //   store.dispatch(addWifuCreator(textValue));
  // }
  
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
    <form>
      <fieldset>
        <legend>
          <ul>
            <li>
              <label for="recipeName">Recipe Name:</label>
              <input type="text" id="recipeName" />
            </li>
            <li>
              <label for="ingredientName">Ingredient Name:</label>
              <input type="text" id="ingredientName" />
              <label for="ingredientQuantity">Ingredient Quantity:</label>
              <input type="text" id="ingredientQuantity" />
              <label for="ingredientUnit">Ingredient Unit of Measurement:</label>
              <input type="text" id="ingredientUnit" />
            </li>
            <li>
              <label for="instructions">Instructions:</label>
              <input type="text" id="instructions" />
            </li>
          </ul>
          <button onClick='x'></button>
        </legend>
      </fieldset>
    </form>
  );
};


  export default CreateRecipe;
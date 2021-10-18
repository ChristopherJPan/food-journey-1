import React from 'react';
import { Link } from "react-router-dom";

const CreateRecipe = props => {
  const handleClick = (e) => {
    console.log("MAY THE WORLD BE RULED BY WIFUS")

    // const textValue = document.getElementById('textBoxValue').value;
    const sendingTheStuff = {
      recipeName: document.getElementById('recipeName').value,
      ingredients: [{
        name: document.getElementById('ingredientName').value,
        quantity: document.getElementById('ingredientQuantity').value,
        unitOfMeasurement: document.getElementById('ingredientUnit').value
      }],
      instructions: document.getElementById('instructions').value
    };
    console.log(sendingTheStuff);


  
    fetch(`/api/recipes`)
      .then(res => res.json())
        // .then(data => store.dispatch(getInitialState(data)))
        // .then(data => console.log(data))
      .then(data => this.props.createRecipe(data))

    props.createRecipe(sendingTheStuff)
    // store.dispatch(addWifuCreator(textValue));
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
    <section id="createRecipe">
      <fieldset id="newRecipe">
        <legend>New Recipe</legend>
        <form>
          <ul>
            <li>
              <label for="recipeName">Recipe Name</label>
              <input type="text" id="recipeName" />
            </li>
            <fieldset id="ingredients">
              <legend>Ingredient</legend>
              <ul>
                <li>
                  <label for="ingredientName">Name</label>
                  <input type="text" id="ingredientName" />
                </li>
                <li>
                  <label for="ingredientQuantity">Quantity</label>
                  <input type="text" id="ingredientQuantity" />
                </li>
                <li>
                  <label for="ingredientUnit">Unit of Measurement</label>
                  <input type="text" id="ingredientUnit" />
                </li>
                <button onClick='x'>Remove Ingredient</button>
                <button onClick='x'>Another Ingredient</button>
              </ul>
            </fieldset>
            <li>
              <label for="instructions">Instructions</label>
              <input type="text" id="instructions" />
            </li>
          </ul>
          {/* <Link to="/main"><button onClick={(e) => handleClick(e)} id="CREATERECI">CREATE RECIPE BUT</button></Link> */}
          <Link to="/main"><button onClick={(e) => handleClick(e)}>Submit</button></Link>
        </form>
      </fieldset>
    </section>
  );
};


  export default CreateRecipe;
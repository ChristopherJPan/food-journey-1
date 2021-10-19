import React from 'react';
import { Link } from "react-router-dom";

const CreateRecipe = props => {
  const handleClick = (e) => {

    const sendingTheStuff = {
      recipeName: document.getElementById('recipeName').value,
      ingredients: [{
        name: document.getElementById('ingredientName').value,
        quantity: document.getElementById('ingredientQuantity').value,
        unitOfMeasurement: document.getElementById('ingredientUnit').value
      }],
      instructions: document.getElementById('instructions').value
    };

    fetch(`/api/recipes`)
      .then(res => res.json())
      .then(data => this.props.createRecipe(data))

    props.createRecipe(sendingTheStuff)
  }

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
          <Link to="/"><button onClick={(e) => handleClick(e)}>Submit</button></Link>
        </form>
      </fieldset>
    </section>
  );
};


  export default CreateRecipe;
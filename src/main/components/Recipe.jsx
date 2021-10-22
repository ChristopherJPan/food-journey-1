/**
 * ************************************
 * @module Recipe
 * @author Michael Pay & Christopher Pan
 * @date 2021/10/16
 * @description presentation component which renders a single recipe box for each recipe
 * ************************************
 */

import React from 'react';
import Ingredients from './Ingredients';

const Recipe = props => {
  /**
   * expect the data of ingredients to be formated this way
   * [{
   * name: '',
   * quantity: 0,
   * unitOfMeasurement: '',
   * }]
   */
  const ingredientsArray = props.ingredients.map((ingredient, index) => (
    <Ingredients
      key={index}
      name={ingredient.name}
      quantity={ingredient.quantity}
      unitOfMeasurement={ingredient.unitOfMeasurement}
    />
  ));

  const handleDelete = () => {
    fetch(`/api/recipe/${props.recipeId}`, {
      method: 'DELETE',
    })
      .then(response => {
        window.location = response.url;
        response.json();
      })
      .catch(err => console.log('There was an error ', err));
  };

  return (
    <fieldset className="recipe">
      <legend>{props.recipeName}</legend>
      <h5>
        Created by:
        {' '}
        {props.account}
      </h5>
      <div className="ingredients">
        Ingredients:
        <ul>
          {ingredientsArray}
        </ul>
      </div>
      <div className="instructions">
        Instructions:
        <ol>
          {props.instructions}
        </ol>
      </div>
      {/* <ul>
        <li>

      <Link to="/createrecipe"><button onClick={() => console.log('Helo World')} id="createNewRecipe">EditRecipe</button></Link>
        </li>
      </ul> */}
      <button onClick={() => handleDelete()}>Delete</button>
    </fieldset>
  );
};

export default Recipe;

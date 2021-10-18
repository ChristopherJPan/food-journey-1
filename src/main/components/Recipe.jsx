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
  const ingredientsArray = props.ingredients.map((ing) => (
    <Ingredients
      name={ing.name}
      quantity={ing.quantity}
      unitOfMeasurement={ing.unitOfMeasurement}
    />
  ));
  
  return (
  <fieldset className="recipe">
    <legend>{props.recipeName}</legend>
    <h5>Created by: {props.account}</h5>
    <div className="ingredients">Ingredients:
      <ul>
        { ingredientsArray }
      </ul>
    </div>
    <div className="instructions">Instructions:
      <ol>
        {props.instructions}
      </ol>
    </div>
  </fieldset>
  );
};

export default Recipe;
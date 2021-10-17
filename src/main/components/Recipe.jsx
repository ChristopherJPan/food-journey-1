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
  
  const ingredientsArray = props.ingredients.map((ing) => (
    <Ingredients
      name={ing.name}
      quantity={ing.quantity}
      unitOfMeasurement={ing.unitOfMeasurement}
      // [{
      //   name: '',
      //   quantity: 0,
      //   unitOfMeasurement: '',
      // }]
      //expect the data of ingredients to be formated this way
    />
  ));

  return (
  <div className="recipe">
    {/* remove the below and instead populate data from props, once available */}
    <strong>Simple Xi'an Spices</strong>
    <p>Created by: Master Chef</p>
    <p>Ingredients:
      <ul>
        { ingredientsArray }
        {/* <li>2 tbsp cumin</li>
        <li>1 tbsp fennel seeds</li>
        <li>2 tbsp cayenna</li> */}
      </ul>
    </p>
    <p>Instructions:
      <ol>
        <li>Ground the spices using a mortar and pestel</li>
        <li>On a frying pan, combine the spices and cook them on a low heat for 3-5 minutes</li>
        <li>Sprinkle atop your favorite bbq items for a mouthwatering kick</li>
      </ol>
    </p>
  </div>
  );
};

export default Recipe;
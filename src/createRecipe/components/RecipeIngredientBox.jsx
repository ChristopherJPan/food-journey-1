import React, { Component } from 'react';

const RecipeIngredientBox = ({ handleAdd }) => (
  <div>
    <fieldset id="ingredients">
      <legend>Ingredient</legend>
      <ul>
        <li>
          <label htmlFor="ingredientName">Name</label>
          <input type="text" id="ingredientName" />
        </li>
        <li>
          <label htmlFor="ingredientQuantity">Quantity</label>
          <input type="text" id="ingredientQuantity" />
        </li>
        <li>
          <label htmlFor="ingredientUnit">Unit of Measurement</label>
          <input type="text" id="ingredientUnit" />
        </li>
        <button onClick={() => console.log('u removed something')}>Remove Ingredient</button>
        <button onClick={handleAdd}>Another Ingredient</button>
      </ul>
    </fieldset>
  </div>
);

export default RecipeIngredientBox;

import React, { Component, useEffect, useState } from 'react';

const RecipeIngredientBox = ({ id, handleDeleteIngredient }) => (
  <div>
    <fieldset id="ingredients">
      <legend>Ingredient</legend>
      <ul>
        <li>
          <label htmlFor="ingredientName">Name</label>
          <input type="text" className="ingredientName" />
        </li>
        <li>
          <label htmlFor="ingredientQuantity">Quantity</label>
          <input type="number" className="ingredientQuantity" />
        </li>
        <li>
          <label htmlFor="ingredientUnit">Unit of Measurement</label>
          <input type="text" className="ingredientUnit" />
        </li>
        <button id={id} onClick={() => handleDeleteIngredient(id)}>Remove Ingredient</button>
      </ul>
    </fieldset>
  </div>
);

export default RecipeIngredientBox;

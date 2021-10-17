/**
 * ************************************
 * @module RecipeList
 * @author Michael Pay & Christopher Pan
 * @date 2021/10/16
 * @description presentation component which renders n Recipe components
 * ************************************
 */

import React from 'react';
import Recipe from './Recipe';

const RecipeList = (props) => {

  // to implement later when receiving an array of objects for each recipe
  /*
  const recipes = props.recipeList.map((recipe) => (
    <Recipe
      key={recipe.id}
      name={recipe.name}
      chef={recipe.chef}
      image={recipe.image} // stretch goal
      // if expand feature is added, add it here and remove ingredients/instructions
      ingredients={recipe.ingredients}
      instrucitons={recipe.instructions}
    />
  ));
  */

  return(
    <div id="recipeList">
      <h3>Recipes</h3>
      <Recipe />
    </div>
  )
}

export default RecipeList;
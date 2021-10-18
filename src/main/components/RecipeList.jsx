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
  
  const theRecipeList = props.recipeList.map((recipe) => (
    // console.log('this is recipe', recipe)
    <Recipe
      key={recipe.recipeId}
      recipeId={recipe.recipeId}
      recipeName={recipe.recipeName}
      account={recipe.account}
      accountId={recipe.accountId}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
      // image={recipe.image} // stretch goal
    />
  ));

  return(
    <div id="recipeList">
      <h2>Recipes</h2>
      <hr />
      { theRecipeList }
    </div>
  );
};

export default RecipeList;
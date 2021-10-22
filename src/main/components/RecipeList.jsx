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
  const recipes = props.recipeList.map((recipe) => {
    console.log('this is recipeId', recipe.recipeId);
    return (
      <Recipe
        key={recipe.recipeId}
        recipeId={recipe.recipeId} // why do we use this twice?
        recipeName={recipe.recipeName}
        account={recipe.account}
        accountId={recipe.accountId}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
      />
    );
  });

  return (
    <div id="recipeList">
      <h2>Recipes</h2>
      <hr />
      {recipes}
    </div>
  );
};

export default RecipeList;

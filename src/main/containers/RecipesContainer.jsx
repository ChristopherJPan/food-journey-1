/**
 * ************************************
 * @module RecipesContainer
 * @author Michael Pay & Christopher Pan
 * @date 2021/10/17
 * @description stateful component which renders RecipesList
 * ************************************
 */

import React, { Component } from 'react';
import RecipeList from "../components/RecipeList";

class RecipesContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="recipesContainer">
        <RecipeList 
          recipeList={this.props.recipeList}
        />
      </div>
    );
  }
}

export default RecipesContainer;
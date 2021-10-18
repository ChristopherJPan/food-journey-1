/**
 * ************************************
 * @module RecipesContainer
 * @author Michael Pay & Christopher Pan
 * @date 2021/10/17
 * @description stateful component which renders RecipesList
 * ************************************
 */

// importing react and redux libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
// importing child components
import RecipeList from "../components/RecipeList";

// mapStateToProps
const mapStateToProps = state => ({
  recipeList: state.recipe.recipeList,

});

// rendering the react component
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

export default connect(mapStateToProps, null)(RecipesContainer);
/**
 * ************************************
 * @module MainContainer
 * @author Michael Pay & Christopher Pan
 * @date 2021/10/16
 * @description stateful component which renders NavBar and RecipeList
 * ************************************
 */

// importing react and redux libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

// importing actions, uncomment when actions are properly defined
import * as actions from '../../redux/actions/actions'

// importing child components
import NavBar from '../components/NavBar';
import RecipeList from '../components/RecipeList';

// mapStateToProps
const mapStateToProps = state => ({
  // need to define state first, then fill this in
  recipeList: state.recipe.recipieList,
  
});

// mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  // need to better flesh out actions, then map below
  logIn: () => dispatch(actions.accountInfo()),
  createRecipe: () => dispatch(actions.recipeCreator())
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="mainContainer">
        {/* <NavBar 
          createRecipe={this.props.createRecipe}
        /> */}
        <RecipeList />
      </div>
    );
  }
}

export default MainContainer;
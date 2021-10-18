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
import NavBarContainer from './NavBarContainer';
import RecipesContainer from './RecipesContainer';

// mapStateToProps
const mapStateToProps = state => ({
  // need to define state first, then fill this in
  recipeList: state.recipe.recipeList,

});

// mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  // need to better flesh out actions, then map below
  // logIn: () => dispatch(actions.accountInfo()),
  // createRecipe: () => dispatch(actions.recipeCreator()),
  getState: () => dispatch(actions.getInitialState()) //may need to put parameter
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    fetch(`/api/recipes`)
      .then(res => res.json())
      // .then(data => store.dispatch(getInitialState(data)))
      // .then(data => console.log(data))
      .then(data => this.props.getState(data)) //not sure if this will work
  }

  render() {
    return(
      <div id="mainContainer">
        <NavBarContainer />
        <RecipesContainer 
          recipeList={this.props.recipeList}
        />
      </div>
    );
  }
}

// export default MainContainer;
export default connect(mapStateToProps, null)(MainContainer); // will be required later upon full Redux integration
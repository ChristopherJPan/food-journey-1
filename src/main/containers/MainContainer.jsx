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
import * as actions from '../../redux/actions/actions';
// importing child components
import NavBarContainer from './NavBarContainer';
import RecipesContainer from './RecipesContainer';


// mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  // logIn: () => dispatch(actions.accountInfo()),
  getState: () => dispatch(actions.getInitialState()) //may need to put parameter
});


// rendering the react component
class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    fetch(`/api/recipes`)
      .then(res => res.json())
      // .then(data => store.dispatch(getInitialState(data)))
      // .then(data => console.log(data))
      .then(data => this.props.getState(data))
  }

  render() {
    return(
      <div id="mainContainer">
        <NavBarContainer />
        <RecipesContainer />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(MainContainer);
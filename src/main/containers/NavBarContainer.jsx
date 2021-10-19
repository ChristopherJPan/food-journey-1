/**
 * ************************************
 * @module NavBarContainer
 * @author Michael Pay & Christopher Pan
 * @date 2021/10/17
 * @description stateful component which renders NavBar
 * ************************************
 */

// importing react and redux libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
// importing actions, uncomment when actions are properly defined
import * as actions from '../../redux/actions/actions';
// importing child component
import NavBar from '../components/NavBar';

// mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  // createRecipe: () => dispatch(actions.recipeCreator()),
});

// rendering the react component
class NavBarContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="navBarContainer">
        <NavBar getState = {this.props.getState}/>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(NavBarContainer);

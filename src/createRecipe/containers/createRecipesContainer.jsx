// importing react and redux libraries
import React, { Component } from 'react';
import createRecipesComponent from '../components/createRecipesComponent';
import { connect } from 'react-redux';

// importing actions, uncomment when actions are properly defined
import * as actions from '../../redux/actions/actions'


// mapStateToProps
const mapStateToProps = state => ({
  // need to define state first, then fill this in
});

// mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  // need to better flesh out actions, then map below
  // logIn: () => dispatch(actions.accountInfo()),
  createRecipe: () => dispatch(actions.recipeCreator())
});

class createRecipesContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <createRecipesComponent/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(createRecipesContainer); // will be required later upon full Redux integration
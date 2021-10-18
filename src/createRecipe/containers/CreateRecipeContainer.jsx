// importing react and redux libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
// importing actions, uncomment when actions are properly defined
import * as actions from '../../redux/actions/actions'
// importing components
import CreateRecipe from '../components/CreateRecipe';

// mapStateToProps
const mapStateToProps = state => ({
  // need to define state first, then fill this in
});

// mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  // need to better flesh out actions, then map below
  // createRecipe: () => dispatch(actions.recipeCreator())
});

class CreateRecipeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="createRecipeContainer">
        <CreateRecipe />
      </div>
    );
  }
}

export default CreateRecipeContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(createRecipesContainer); // will be required later upon full Redux integration
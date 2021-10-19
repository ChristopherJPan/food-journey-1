// importing react and redux libraries
import React, { Component } from 'react';
// importing components
import CreateRecipe from '../components/CreateRecipe';

class CreateRecipeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="createRecipeContainer">
        <CreateRecipe createRecipe={this.props.createRecipe}/>
      </div>
    );
  }
}

export default CreateRecipeContainer;

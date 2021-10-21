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
  getState: (data) => dispatch(actions.getInitialState(data))
});


// rendering the react component
class MainContainer extends Component {
  constructor(props) {
    super(props);
    // const handleClick = (e) => {
    //   const fetchBody = { searchIngredient: document.getElementById('ingredientName').value};

    //   // so button is working and fetching the data just need to change the state
    //   // ^^^^^^^^^^^^^^^^^^
    //   //hooray

    //   console.log('we are working!!!');

    //   fetch(`/api/recipeByIngredient`, {
    //     method: "POST",
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(fetchBody)
    //   })
    //   .then(res => res.json())
    //   .then(res => console.log(res))
    //   // .then(data => this.props.getState(data));
    //   .catch(err => console.log("can't add recipe: " + JSON.stringify(err)));
    // }
  }

  componentDidMount(){
    fetch(`/api/recipes`)
      .then(res => res.json())
      .then(data => this.props.getState(data));
  }




  render() {
    return(
      <div id="mainContainer">
        <NavBarContainer getState = {this.props.getState}/>
        <RecipesContainer />
        {/* <input type="text" id="ingredientName" />
        <button onClick={(e) => handleClick(e)}>Submit</button> */}
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(MainContainer);


// fetch(`/api/recipes`)
//       .then(res => res.json())
//       .then(data => this.props.getState(data));
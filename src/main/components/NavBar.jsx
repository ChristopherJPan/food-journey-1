/**
 * ************************************
 * @module NavBar
 * @author Michael Pay & Christopher Pan
 * @date 2021/10/17
 * @description presentation component which renders the NavBar
 * ************************************
 */

import React from 'react';
import {Link} from "react-router-dom";

const NavBar = (props) => {
  const handleClick = (e) => {
    const fetchBody = { searchIngredient: document.getElementById('ingredientName').value};

    // so button is working and fetching the data just need to change the state
    // ^^^^^^^^^^^^^^^^^^
    //hooray

    console.log('we are working!!!');

    fetch(`/api/recipeByIngredient`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fetchBody)
    })
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(data => props.getState(data));
    // .catch(err => console.log("can't add recipe: " + JSON.stringify(err)));
  }
  // const logoutClick = () => {
    
  // }
  
  return (
    <div id="navBar">
      <Link to="/createrecipe"><button onClick={() => console.log('Helo World')} id="createNewRecipe">Create New Recipe</button></Link>
      {/* <button onClick={logoutClick}>Logout</button> */}
      <div>
      <input type="text" id="ingredientName" />
      <button onClick={(e) => handleClick(e)}>Submit</button>
      </div>
    </div>
  );
}

export default NavBar;

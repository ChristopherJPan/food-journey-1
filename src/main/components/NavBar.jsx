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

const NavBar = (props) => (
  <div id="navBar">
    <Link to="/createrecipe"><button onClick={() => console.log('Helo World')} id="createNewRecipe">Create New Recipe</button></Link>
  </div>
);

export default NavBar;
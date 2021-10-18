/**
 * ************************************
 * @module App.jsx
 * @author Michael Pay & Christopher Pan
 * @date 2021/10/16
 * @description primary container
 * ************************************
 */

import React, {Component} from 'react';
import MainContainer from './main/containers/MainContainer';
import CreateRecipeContainer from './createRecipe/containers/createRecipesContainer';
import { Switch, Route } from "react-router-dom";
// import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';



class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div id="container">
        <Switch>
          <Route path="/" component={MainContainer} exact/>
          {/* <Route path="/createRecipe" component={CreateRecipe}/> */}
        </Switch>
      </div>
    );
  }
}

export default App;
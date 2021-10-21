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
import CreateRecipeContainer from './createRecipe/containers/CreateRecipeContainer';
import LoginPage from './login/components/Login';
import { Switch, Route } from "react-router-dom";

// Changed App into a functional component
const App = () => {
  return (
    <div id="container">
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/main" component={MainContainer} exact />
          <Route path="/CreateRecipe" component={CreateRecipeContainer} />
        </Switch>
    </div>
  )
}

export default App;
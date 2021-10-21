/**
 * ************************************
 * @module App.jsx
 * @author Michael Pay & Christopher Pan
 * @date 2021/10/16
 * @description primary container
 * ************************************
 */

import React, {Component} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

import MainContainer from './main/containers/MainContainer';
import CreateRecipeContainer from './createRecipe/containers/CreateRecipeContainer';
import LoginPage from './login/components/Login';
import Signup from './signup/Signup';
// Changed App into a functional component
const App = () => {

  // using the state 'isLoggedIn' to handle redirects if false
  const { isLoggedIn } = useSelector(state=>state.recipe)
  console.log('app.jsx\'s isLoggedIn', isLoggedIn)
  // if (!isLoggedIn) {
  //   return <Redirect to="/" />
  // }


  return (
    <div id="container">
      <Switch>
        < Route exact path="/">
          {isLoggedIn ? <Redirect to="/main" /> : <LoginPage />}
        </ Route>

        <Route exact path="/main">
          {isLoggedIn ? <MainContainer /> : <Redirect to="/" />}
        </ Route>

        <Route path="/CreateRecipe">
          {isLoggedIn ? <CreateRecipeContainer/> : <Redirect to="/" />}
        </ Route>

        <Route path="/signup">
          <Signup />
        </Route>

      </Switch>
    </div>
  )
}

export default App;
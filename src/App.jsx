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
// import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div id="container">
        <MainContainer />
      </div>
    );
  }
}



export default App;
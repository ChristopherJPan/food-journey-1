/**
 * ************************************
 * @module NavBarContainer
 * @author Michael Pay & Christopher Pan
 * @date 2021/10/17
 * @description stateful component which renders NavBar
 * ************************************
 */

import React, { Component } from 'react';
import NavBar from '../components/NavBar';

class NavBarContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="navBarContainer">
        <NavBar />
      </div>
    )
  }
}

export default NavBarContainer;
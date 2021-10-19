/**
 * ************************************
 * @module Login
 * @author Michael Pay & Christopher Pan
 * @date 2021/10/18
 * @description presentation component which renders a login form
 * ************************************
 */

import React from 'react';
import { Link } from "react-router-dom";

const Login = props => {
  const handleClick = (e) => {
    //we will be sending an action here to our reducer
  }

  return (
    <div>
      <h2>Login Page</h2>
      <Link to="/main"><button onClick={(e) => handleClick(e)} id="login">Login</button></Link>
      {/* <button onClick={(e) => handleClick(e)}>Login</button> */}
    </div>

  );
};


  export default Login;
/**
 * ************************************
 * @module Login
 * @author Michael Pay & Christopher Pan
 * @date 2021/10/18
 * @description presentation component which renders a login form
 * ************************************
 */

import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import ImportantFunctions from '../../ImportantFunctions.jsx'

const { useFormInput } = ImportantFunctions;

const Login = props => {
  // define our form functionality for each input field
  const username = useFormInput('');
  const password = useFormInput('');
  // initialize useDispatch Redux Hook to dispatch actions to reducer
  const dispatch = useDispatch();

  // handleClick to dispatch login action with accountInfo
  const handleClick = () => {
    const accountInfo = {
      username: username.value,
      password: password.value,
    };
    // use a Redux hook to dispatch the action (useDispatch and/or useSelector)
    dispatch({ type: 'LOGIN', payload: accountInfo });
  }

  return (
    <div id='login'>
      <br/>
      <h2>Login Page</h2>
      <div>
        <input type='text' id='username' {...username}
          placeholder='Username'
          autoComplete='username' required />
      </div>
      <div>
        <input type='text' id='password' {...password}
          placeholder='Password'
          autoComplete='current-password' required />
      </div>
      <button onClick={handleClick} id="login">Login</button>
      {/* <Link><button onClick */}
    </div>
  );
};

export default Login;

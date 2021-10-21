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

const Login = props => {
  // define our form functionality for each input field
  const username = useFormInput('');
  const password = useFormInput('');
  // initialize useDispatch Redux Hook to dispatch actions to reducer
  const dispatch = useDispatch();
  
  const { isLoggedIn } = useSelector((state) => state.recipe);

  // handleClick to dispatch login action with accountInfo

  const handleClick = () => {
    const accountInfo = {
      username: username.value,
      password: password.value,
    };
    // use a Redux hook to dispatch the action (useDispatch and/or useSelector)
    dispatch({ type: 'LOGIN', payload: accountInfo });
  }
  // login -> useDispatch(login action) -> actions -> LOGIN -> reducer (post)
  
  if (isLoggedIn) {
    return <Redirect to="/main" />;
  }


  return (
    <div>
      <h2>Login Page</h2>
      <input type='text' id='username' {...username}
        placeholder='Username'
        autoComplete='username' required />
      <input type='text' id='password' {...password}
        placeholder='Password'
        autoComplete='current-password' required />
      {/* <Link to="/main"> */}
        <button onClick={handleClick} id="login">Login</button>
        {/* </Link> */}
    </div>
  );
};

// handle form inputs for both username and password
const useFormInput = (initialVal) => {
  const [value, setValue] = useState(initialVal);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  // returning object of attributes for inputs
  return {
    value,
    onChange: handleChange
  }
};

export default Login;

// const { isLoggedIn } = useSelector(state => state.auth);


// //  if (isLoggedIn) {
//   return <Redirect to="/profile" />;
// }

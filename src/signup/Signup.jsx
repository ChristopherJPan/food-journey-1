import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import  ImportantFunctions  from '../ImportantFunctions.jsx'

const { useFormInput } = ImportantFunctions;

const Signup = () => {
  
  // firstName, lastName, username, email, and password
  
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const username = useFormInput('');
  const email = useFormInput('');
  const password = useFormInput('');

  const dispatch = useDispatch();

  // initialize accountInfo to be passed after submit
  const handleClick = () => {
    const accountInfo = {
      firstName: firstName.value,
      lastName: lastName.value,
      username: username.value,
      email: email.value,
      password: password.value
    };
    // dispatch signup action
    dispatch({ type: 'SIGNUP', payload: accountInfo });
  }

  return (
    <div id='signup'>
      <h2>Signup</h2>
      <br />
      <div>
        <input type='text' placeholder='Enter your first name' required {...firstName} />
      </div>
      <div>
        <input type='text' placeholder='Enter your last name' required {...lastName} />
      </div>
      <div>
        <input type='text' placeholder='Enter your user name' required {...username} />
      </div>
      <div>
        <input type='text' placeholder='Enter your email' required {...email} />
      </div>
      <div>
        <input type='text' placeholder='Enter your password' autoComplete='new-password' required {...password} />
      </div>
      <button onClick={handleClick} id='signup'>Signup</button>
    </div>
  );
};

export default Signup;
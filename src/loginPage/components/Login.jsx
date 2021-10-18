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
    console.log('wifus are the lifu')
    // const textValue = document.getElementById('textBoxValue').value;
    // const sendingTheStuff = {

    // };
    // store.dispatch(addWifuCreator(textValue));
  }

  return (
    <div>
      <p>Wifus Are Lifu</p>
      <Link to="/main"><button onClick={(e) => handleClick(e)} id="THISISAWIFUBUTTON">WIFUS WILL RULE THE WORLD</button></Link>
      {/* <button onClick={(e) => handleClick(e)}>Add Wifu</button> */}
    </div>

  );
};


  export default Login;
/**
 * ************************************
 * @module LoginContainer
 * @author Michael Pay & Christopher Pan
 * @date 2021/10/18
 * @description stateful component which renders Login
 * ************************************
 */


// importing react and redux libraries
import React, { Component } from 'react';
// import Login from '../components/Login';
import { connect } from 'react-redux';
// importing actions, uncomment when actions are properly defined
import * as actions from '../../redux/actions/actions';
// importing components
import Login from '../components/Login';


// // mapStateToProps
// const mapStateToProps = state => ({
//   // need to define state first, then fill this in
// });

// // mapDispatchToProps
// const mapDispatchToProps = dispatch => ({
//   // logIn: () => dispatch(actions.accountInfo()),
// });

// class LoginContainer extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return(
//       <div id="loginContainer">
//         <Login />
//       </div>
//     );
//   }
// }

// export default LoginContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer); // will be required later upon full Redux integration
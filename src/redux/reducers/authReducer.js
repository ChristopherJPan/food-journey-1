import * as types from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  isSignedUp: false,
  message: '',
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
  
    // successful login
     case types.LOGIN_SUCCESS: {
      return { ...state, isLoggedIn: true, message: 'Login Success!'};
    }
    // unsuccessful login  
    case types.LOGIN_FAILURE: {
      return { ...state, message: 'Login Failed! Check your credentials' };
    }  
      
    // successful signup with success message
    case types.SIGNUP_SUCCESS: {
      return { ...state, isSignedUp: true, message: 'Successfully signed up!  Now please log in :]' };
    }

    // failed signup with error message
    case types.SIGNUP_FAILURE: {
      console.log('payload: ', action.payload);
      return { ...state, isSignedUp: false, message: 'Signup Failed! Double check your fields, and try again.' };
    }
    
    default: {
      console.log('Reducer in default for auth');
      return state;
    }
  }
}
export default authReducer;
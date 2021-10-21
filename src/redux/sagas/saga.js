import { delay } from 'redux-saga';
import { takeLatest, put, call } from 'redux-saga/effects';
import 'regenerator-runtime/runtime'
import axios from 'axios';

// async function for login
function* loginAsync({ payload }) {
  // make a post request to the server sending accountInfo
  try {
    const { data } = yield call(grabUserData, payload);
    yield put({ type: 'PRODUCTS_RECEIVED', payload: data });
  }
  catch (error) {
    yield put({ type: 'LOGIN_FAILURE', payload: error });

  }
};

// watcher it catches 'LOGIN' before it even reaches reducers

// wrapped function for axios post request
const grabUserData = (payload) => {
  return axios.post('/api/login', payload);
}

// async function for signup
function* signupAsync({ payload }) {
  // try call post request here for signup
  // if signup fail return different type
  try {
    const { data, message } = yield call(userSignup, payload);
    yield put({ type: 'SIGNUP_SUCCESS', payload: message });
    yield console.log('data received back: ', data);
    yield console.log('message received back: ', message);
  }
  catch (error) {
    yield put({ type: 'SIGNUP_FAILURE', payload: error});
  }
}

// promise function that sends post request to create user
const userSignup = (payload) => {
  return axios.post('/api/signup', payload);
}

  export function* watcher() {
    yield takeLatest('LOGIN', loginAsync);
    yield takeLatest('SIGNUP', signupAsync);
  };
  
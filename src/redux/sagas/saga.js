import { delay } from 'redux-saga';
import { takeLatest, put, call } from 'redux-saga/effects';
import 'regenerator-runtime/runtime'
// async function for login
import axios from 'axios';

function* loginAsync({ payload }) {
  // make a post request to the server sending accountInfo
  try {
    const { data } = yield call(grabUserData, payload);
    yield put({ type: 'PRODUCTS_RECEIVED', payload: data });
  }
  catch (error) {
    yield put({ type: 'LOGIN_UNSUCCESSFUL', payload: error });

  }
};

// watcher it catches 'LOGIN' before it even reaches reducers
export function* watchLogin() {
  yield takeLatest('LOGIN', loginAsync);
};

// wrapped function for axios post request
const grabUserData = (payload) => {
  return axios.post('/api/login', payload)
}

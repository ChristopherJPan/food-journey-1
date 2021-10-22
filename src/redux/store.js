import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import { watcher } from './sagas/saga.js'

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
  // composeWithDevTools()
);

sagaMiddleware.run(watcher);

export default store;
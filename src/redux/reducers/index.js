import { combineReducers } from 'redux';
import recipeReducer from './reducers';
import authReducer from './authReducer';

const reducers = combineReducers({
  recipe: recipeReducer,
  auth: authReducer,
})

export default reducers;
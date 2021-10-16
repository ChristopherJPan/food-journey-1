import { combineReducers } from 'redux';
import recipeReducer from './reducers';

const reducers = combineReducers({
  recipe :recipeReducer,
})

export default reducers;
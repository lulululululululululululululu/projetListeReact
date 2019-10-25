import {
  combineReducers
} from 'redux';
import listReducer from './reducers/listReducers';
import signUpReducers from './reducers/signUpReducers';

export default combineReducers({
  listReducer, 
  signUpReducers
});
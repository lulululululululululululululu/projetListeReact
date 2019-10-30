import {
  combineReducers
} from 'redux';
import listReducer from './reducers/listReducers';
import signUpReducers from './reducers/signUpReducers';
import mainReducers from './reducers/mainReducers';

export default combineReducers({
  mainReducers,
  listReducer, 
  signUpReducers
});
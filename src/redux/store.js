import {
  createStore
} from 'redux';
import listReducer from './reducers/listReducers';

export default createStore(listReducer);
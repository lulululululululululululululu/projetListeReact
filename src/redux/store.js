import { createStore } from 'redux';
import errorFieldState from './reducers/listReducers';

const configureStore = () => {
  return createStore(
    errorFieldState,
  );
};

export default configureStore;
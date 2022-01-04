import { createStore } from 'redux';
import { counterReducer } from './reducer';

// Connect to Redux devtools in browser if available
const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Create redux store
export const store = createStore(counterReducer, enhancer);

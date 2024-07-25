import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  // Your reducers
});

const store = createStore(rootReducer);

export default store;
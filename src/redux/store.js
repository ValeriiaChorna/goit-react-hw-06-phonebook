import { createStore, combineReducers } from 'redux';
import contactsReducer from './contacts/contactsReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  //   theme: themeReducer,
});

const store = createStore(
  rootReducer /* preloadedState, */,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;

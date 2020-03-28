import { combineReducers } from 'redux';
import { ADD_CONTACTS, REMOVE_CONTACTS, FILTER } from './contactsActionTypes';

function contactsReducer(state = [], { type, payload }) {
  switch (type) {
    case ADD_CONTACTS:
      return [...state, payload.contact];

    case REMOVE_CONTACTS:
      return state.filter(note => note.id !== payload.id);

    default:
      return state;
  }
}

function fiterReducer(state = '', { type, payload }) {
  switch (type) {
    case FILTER:
      return payload.filter;

    default:
      return state;
  }
}

export default combineReducers({
  contacts: contactsReducer,
  filter: fiterReducer,
});

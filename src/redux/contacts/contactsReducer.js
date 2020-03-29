import { combineReducers } from 'redux';
import {
  ADD_CONTACTS,
  REMOVE_CONTACTS,
  CHANGE_FILTER,
} from './contactsActionTypes';

function itemsReducer(state = [], { type, payload }) {
  switch (type) {
    case ADD_CONTACTS:
      const { name } = payload.contact;
      // const { contacts } = state;
      const doesExistContact = state.some(contact => contact.name === name);
      if (doesExistContact) {
        alert(`${name} is allready exist in contacts.`);
        return state;
      }
      return [...state, payload.contact];

    case REMOVE_CONTACTS:
      return state.filter(contact => contact.id !== payload.contactId);

    default:
      return state;
  }
}

function fiterReducer(state = '', { type, payload }) {
  switch (type) {
    case CHANGE_FILTER:
      return payload.filter;

    default:
      return state;
  }
}

export default combineReducers({
  items: itemsReducer,
  filter: fiterReducer,
});

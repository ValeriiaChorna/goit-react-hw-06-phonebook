import { ADD_CONTACTS, REMOVE_CONTACTS, FILTER } from './contactsActionTypes';
import uuid from 'uuid';

const addContact = ({ name, number }) => ({
  type: ADD_CONTACTS,
  payload: {
    contact: { id: uuid.v4(), name, number },
  },
});

const removeContact = contactId => ({
  type: REMOVE_CONTACTS,
  payload: {
    id: contactId,
  },
});

const filter = filter => ({
  type: FILTER,
  payload: {
    filter,
  },
});

export default { addContact, removeContact, filter };

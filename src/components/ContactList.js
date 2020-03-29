import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import contactActions from '../redux/contacts/contactsActions';
import ContactItem from './ContactItem';

function ContactList({ contacts, onRemoveContact }) {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <ContactItem
          key={id}
          name={name}
          id={id}
          number={number}
          onRemoveContact={() => onRemoveContact(id)}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: T.arrayOf(
    T.exact({
      name: T.string,
      id: T.string,
      number: T.string,
    }),
  ).isRequired,
  onRemoveContact: T.func.isRequired,
};

const MapStateToProps = state => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const getVisibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
  return { contacts: getVisibleContacts };
};

const MapDispatchToProps = { onRemoveContact: contactActions.removeContact };

export default connect(MapStateToProps, MapDispatchToProps)(ContactList);

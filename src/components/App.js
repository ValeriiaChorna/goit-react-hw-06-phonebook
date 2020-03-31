import React from 'react';
import Layout from './Layout';
import ContactEditer from './ContactEditer';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  return (
    <Layout>
      <h1>Phonebook</h1>

      <h2>Create new contact</h2>
      <ContactEditer />

      <h3>Find contact by name</h3>
      <Filter />

      <ContactList />
    </Layout>
  );
};

export default App;

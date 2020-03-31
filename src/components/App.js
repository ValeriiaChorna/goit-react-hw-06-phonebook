import React from 'react';
import Layout from './Layout';
import ContactEditer from './ContactEditer';
import ContactList from './ContactList';
import Filter from './Filter';
import ButtonThemeChanger from './ButtonThemeChanger';
import ThemeContext from '../context/ThemeContext';

const App = () => {
  return (
    <ThemeContext>
      <Layout>
        <p>Change theme</p>
        <ButtonThemeChanger />
        <h1>Phonebook</h1>

        <h2>Create new contact</h2>
        <ContactEditer />

        <h3>Find contact by name</h3>
        <Filter />

        <ContactList />
      </Layout>
    </ThemeContext>
  );
};

export default App;

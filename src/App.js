import React, { Component } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import ContactForm from './Components/ContactForm';
import ContactLIst from './Components/ContactList';
import Filter from './Components/Filter/Filter';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  formHandler = data => {
    const { name, number } = data;
    console.log(data);
    const newContact = {
      id: nanoid(5),
      name,
      number,
    };
    const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      error({
        text: 'That name is already in the list!',
        delay: 1500,
      });

      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

    console.log(contacts);
  };

  contactFilter = () => {
    const { filter, contacts } = this.state;
    const lowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCase),
    );
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const contactsFilter = this.contactFilter();
    return (
      <div className="App">
        <h1>Phone book</h1>

        <ContactForm onSubmit={this.formHandler} />
        <div>
          <h2>Contacts</h2>
          <Filter value={this.filter} onChange={this.changeFilter} />
          <ContactLIst contacts={contactsFilter} />
        </div>
      </div>
    );
  }
}

export default App;

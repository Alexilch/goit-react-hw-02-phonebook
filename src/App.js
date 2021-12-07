import React, { Component } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import ContactForm from './components/ContactForm';
import ContactLIst from './components/ContactList';
import Filter from './components/Filter/Filter';
import Title from './components/Title/Title';

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

  componentDidMount(){
    const contacts = localStorage.getItem('contacts');
    const parsedContatcts = JSON.parse(contacts);

    if (parsedContatcts) {
      this.setState({contacts: parsedContatcts});
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts',  JSON.stringify(this.state.contacts))
    }
  }

  formHandler = data => {
    const { name, number } = data;
    const newContact = {
      id: nanoid(5),
      name,
      number,
    };

    const { contacts } = this.state;
    const existingName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (existingName) {
      error({
        text: 'That name is already in the list!',
        delay: 1500,
      });
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  contactFilter = () => {
    const { filter, contacts } = this.state;
    const lowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCase),
    );
  };

  contactDelete = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  onFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const contactsFilter = this.contactFilter();
    return (
      <div className="App">
        <Title title={'Phone book'} />
        <ContactForm onSubmit={this.formHandler} />
        <Title title={'Contacts'} />
        <Filter value={this.filter} onChange={this.onFilter} />
        <ContactLIst contacts={contactsFilter} onDelete={this.contactDelete} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import ContactForm from './Components/ContactForm';
import ContactLIst from './Components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
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

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

    console.log(contacts);
  };

  contactFilter = () => {
    const { contacts } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase());
  };

  render() {
    const contactsFilter = this.contactFilter();
    return (
      <div className="App">
        <h1>Phone book</h1>

        <ContactForm onSubmit={this.formHandler} />
        <div>
          <h2>Contacts</h2>
          <ContactLIst contacts={contactsFilter} />
        </div>
      </div>
    );
  }
}

export default App;

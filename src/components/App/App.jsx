import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactsList from 'components/ContactsList/ContactsList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.find(
      contact => newContact.name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, newContact],
        }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFindContact = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  componentDidMount() {
    const contactLS = JSON.parse(localStorage.getItem('contacts'));
    if (contactLS) {
      this.setState({ contacts: contactLS });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const { addContact, deleteContact, handleFilterChange, getFindContact } =
      this;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onFilterChange={handleFilterChange} />
        <ContactsList list={getFindContact()} onClick={deleteContact} />
      </div>
    );
  }
}

export default App;

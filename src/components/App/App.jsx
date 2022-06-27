import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactsList from 'components/ContactsList/ContactsList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const contactLS = JSON.parse(localStorage.getItem('contacts'));

  const [contacts, setContacts] = useState(() => contactLS ?? initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    contacts.every(contact => contact.name.toLowerCase() !== name.toLowerCase())
      ? setContacts([
          ...contacts,
          {
            name,
            number,
            id: nanoid(),
          },
        ])
      : alert(`${name} is alredy in contacts`);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const getFindContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

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

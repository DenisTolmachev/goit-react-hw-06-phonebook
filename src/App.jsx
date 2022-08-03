import { useState, useEffect } from 'react';
import { ContactForm } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Notification } from 'components/common/Notification.styled';
import { Container } from 'components/common/Container.styled';

const KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(KEY) ?? []);
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    const normalizedName = data.name.trim().toLowerCase();
    const result = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );
    result
      ? alert(`${data.name} is already in contacts`)
      : setContacts(prevContacts => [data, ...prevContacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFiteredContacts = () => {
    const normalizedContacts = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContacts)
    );
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const filteredContacts = getFiteredContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      {contacts.length > 0 ? (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      ) : (
        <Notification>There are no contacts in the phone book.</Notification>
      )}
    </Container>
  );
};

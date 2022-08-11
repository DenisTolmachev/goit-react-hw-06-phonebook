import { useState, useEffect } from 'react';
import { ContactForm } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Notification } from 'components/common/Notification.styled';
import { Container } from 'components/common/Container.styled';

// const KEY = 'contacts';

export const App = () => {
//   const [contacts, setContacts] = useState(() => {
//     return JSON.parse(localStorage.getItem(KEY) ?? []);
//   });
//   const [filter, setFilter] = useState('');


//   const changeFilter = e => {
//     setFilter(e.currentTarget.value);
//   };

//   const getFilteredContacts = () => {
//     const normalizedContacts = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedContacts)
//     );
//   };

//   const deleteContact = id => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== id)
//     );
//   };

//   const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm  />
      <h2>Contacts</h2>
      <Filter />
      {/* {contacts.length > 0 ? (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      ) : (
        <Notification>There are no contacts in the phone book.</Notification>
      )} */}
    </Container>
  );
};

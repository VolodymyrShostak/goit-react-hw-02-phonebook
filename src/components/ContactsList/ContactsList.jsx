import React from 'react';


const ContactsList = ( filter, contacts ) => {
  console.log({ contacts, filter });
    const normalizedFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  return (
    <ul>
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id} id={id}>
          {name}: {number}
        </li>
      ))}
    </ul>
  );
};
export default ContactsList;
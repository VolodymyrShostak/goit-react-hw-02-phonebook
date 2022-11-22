import React from 'react';
import Form from './../Form/Form';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactsList/ContactsList';

class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onChangeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  onAddContact = ({ name, number, id }) => {
    const { contacts } = this.state;
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }
    this.setState({
      contacts: [...contacts, { name, number, id }],
    });
  };
  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <Form onSubmit={this.onAddContact} />
        <h2>Contacts</h2>
        <Filter title="Find contact by name" onChange={this.onChangeFilter} />
        <ContactsList
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </div>
    );
  }
}
export default Phonebook;

import React from 'react';
import { nanoid } from 'nanoid';

class Phonebook extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  onNameChange = event => {
    this.setState({
      name: event.target.value,
      id: nanoid(),
    });
  };
  handleNumberChange = event => {
    this.setState({
      number: event.target.value,
      id: nanoid(),
    });
  };
  onAddContact = event => {
    const { name, contacts, number } = this.state;
    event.preventDefault();
    this.setState({
      contacts: [...contacts, name, number],
      name: '',
      number: '',
    });
  };
  render() {
    const { name, contacts, id, number } = this.state;
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.onAddContact}>
          <h3>Name</h3>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.onNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <h3>Number</h3>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleNumberChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit" onClick={this.onAddContact}>
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index} id={id}>
              {contact} {number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Phonebook;

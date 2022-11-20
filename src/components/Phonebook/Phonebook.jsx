import React from 'react';
// import { nanoid } from 'nanoid';

class Phonebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      name: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddContact = this.handleAddContact.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      name: event.target.value,
    });
  }
  handleAddContact(event) {
    const { name, contacts } = this.state;
    event.preventDefault();
    this.setState({
      name: "",
      contacts: [...contacts, name],
    });
  }
  render() {
    const { name, contacts } = this.state;
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <h3>Name</h3>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="submit" onClick={this.handleAddContact}>
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>{contact}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Phonebook;

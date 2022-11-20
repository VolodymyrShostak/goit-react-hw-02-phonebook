import React from 'react';
// import { nanoid } from 'nanoid';

class Phonebook extends React.Component {
  state = {
    contacts: [],
    name: '',
  };
  // handleSubmit = e => {
  //   e.prevenDefault();
  //   // this.setState(prevState => ({
  //   //   contacts: prevState.contacts.push(this.name),
  //   console.log(this.state);
  // };
  handleInputChange = ({ target: { value } }) => {
    this.setState({
      name: value,
    });
  };
  handleAddContact = e => {
    const { contacts, name } = this.state;
    e.prevenDefault();
    this.setState = {
      contacts: contacts.push(name),
    };
    
  };
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
          <li>{contacts}</li>
        </ul>
      </div>
    );
  }
}
export default Phonebook;

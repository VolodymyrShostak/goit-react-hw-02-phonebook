import React from 'react';
import { nanoid } from 'nanoid';


class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };
  onHandleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      id: nanoid(),
    });
  };
  render() {
    return (
      <>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.onSubmit(this.state);
            this.setState({
              name: '',
              number: '',
            });
          }}
        >
          <h3>Name</h3>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onHandleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <h3>Number</h3>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.onHandleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit" onClick={this.onAddContact}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}
export default Form;

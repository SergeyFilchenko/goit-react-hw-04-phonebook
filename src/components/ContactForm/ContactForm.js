import { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onBtnClick = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    this.props.addContact(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { handleInputChange, onBtnClick } = this;
    const { name, number } = this.state;

    return (
      <form onSubmit={onBtnClick}>
        <label className={s.form}>
          <p>Name</p>
          <input
            onChange={handleInputChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={s.input}
          />
          <p>Number</p>
          <input
            onChange={handleInputChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={s.input}
          />
          <Button
            text="Add Contact"
            type="submit"
            disabled={number && name ? false : true}
          />
        </label>
      </form>
    );
  }
}
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;

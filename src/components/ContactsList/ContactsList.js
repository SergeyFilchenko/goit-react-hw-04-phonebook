import React from 'react';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import s from './ContactsList.module.css';

export default function ContactsList({ list, onClick }) {
  return (
    <ul className={s.ContactList}>
      {list.map(({ name, number, id }, idx) => (
        <Contact
          key={id}
          idx={idx}
          name={name}
          number={number}
          onClick={() => {
            onClick(id);
          }}
        />
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  list: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

export default function Contact({ name, number, onClick }) {
  return (
    <li>
      <p>
        {name}: {number}
        <Button type="button" onClick={onClick} text="Delete"></Button>
      </p>
    </li>
  );
}

Contact.propTypes = {
  options: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    onClick: PropTypes.func,
    idx: PropTypes.number.isRequired,
  }),
};

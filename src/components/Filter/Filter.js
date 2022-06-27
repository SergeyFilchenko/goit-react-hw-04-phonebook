import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ value, onFilterChange }) {
  return (
    <label>
      Find contacts by name :
      <input
        onChange={onFilterChange}
        value={value}
        type="text"
        name="filter"
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

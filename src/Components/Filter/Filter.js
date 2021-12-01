import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <label className={s.filterlabel}>
      Find contacts by name:
      <input type="search" value={value} onChange={onChange}></input>
    </label>
  );
}

Filter.popTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

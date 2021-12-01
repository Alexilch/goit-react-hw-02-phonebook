import React from 'react';

export default function Filter({ value, onChange }) {
  return (
    <label>
      Find contacts by name
      <input type="search" value={value} onChange={onChange}></input>
    </label>
  );
}

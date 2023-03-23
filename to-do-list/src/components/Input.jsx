import React from 'react';

function Input({ placeholder, type='text', required=false, id='', value, onChange }) {
  return(
    <input
      type={ type }
      required={ required }
      placeholder={ placeholder }
      id={ id }
      value={ value }
      onChange={ onChange }
    />
  );
}

export default Input;

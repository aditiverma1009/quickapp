import React from 'react';
import './InputItems.css';

const InputItems = ({
  name, value, title, type, onChange,
}) => (
  <div className="input">
    <input className="input-inputFields" name={name} value={value} placeholder={title} type={type} onChange={onChange} />
  </div>
);

export default InputItems;

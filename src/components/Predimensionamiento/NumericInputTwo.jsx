
import React from 'react';

const NumericInputTwo = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="number"
      placeholder={placeholder}
      className="border border-gray-300 p-2 mb-4"
      value={value}
      onChange={onChange}
    />
  );
};

export default NumericInputTwo;

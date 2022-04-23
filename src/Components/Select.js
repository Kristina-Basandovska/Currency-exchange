import React from "react";

export default function Select({ options, value, onChange, name }) {
  return (
    <select name={name} value={value} onChange={onChange} className="tw-field">
      {options.map((option) => (
        <option value={option.value} key={option.label}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

import React from "react";

export default function Input({ value, onChange, name, type = "text" }) {
  return (
    <input
      name={name}
      value={value}
      type={type}
      className="tw-field"
      placeholder="0"
      onChange={onChange}
    />
  );
}

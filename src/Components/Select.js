import React from "react";

export default function Select({ options, value, onChange, name }) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="block w-full rounded-lg border  p-2.5 focus:border-blue-500 focus:ring-blue-500 border-gray-500 bg-gray-600 text-white placeholder-gray-400 sm:text-sm"    >
      {options.map((option) => (
        <option value={option.value} key={option.label}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

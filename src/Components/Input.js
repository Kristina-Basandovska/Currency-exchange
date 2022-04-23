import React from "react";

export default function Input({value,onChange,name,type='text'}) {
  return (
    <input
    name={name}
    value={value}
      type={type}
      className="block w-full rounded-lg border  p-2.5 focus:border-blue-500 focus:ring-blue-500 border-gray-500 bg-gray-600 text-white placeholder-gray-400 sm:text-sm"
      placeholder="0"
      onChange={onChange}
    />
  );
}

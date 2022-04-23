import React from "react";

export default function Header({ list }) {
  return (
    <header className="flex">
      {list.map((el) => (
        <div class="p-2" key={el.label}>
          <div class="text-teal inline-flex items-center rounded-full bg-white p-2 text-sm leading-none text-gray-700 shadow">
            <span class="inline-flex h-6 items-center justify-center rounded-full bg-yellow-400 px-3 text-black">
              {el.label}
            </span>
            <span class="inline-flex px-2">{el.value}</span>
          </div>
        </div>
      ))}
    </header>
  );
}

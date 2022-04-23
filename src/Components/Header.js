import React from "react";

const COLORS = [
  "bg-yellow-300",
  "bg-pink-300",
  "bg-green-500",
  "bg-blue-300",
  "bg-purple-300",
];

export default function Header({ list }) {
  return (
    <div className="overflow-hidden ">
      <header className="flex relative animate-slide hover:animation-pause">
        {list.map((el, index) => (
          <div className="p-2" key={el.label}>
            <div className="text-teal inline-flex items-center rounded-full bg-white p-2 text-sm leading-none text-gray-700 shadow">
              <span
                className={`inline-flex h-6 items-center justify-center rounded-full  px-3 text-white ${
                  COLORS[index % COLORS.length]
                }`}
              >
                {el.label}
              </span>
              <span className="inline-flex px-2">{el.value}</span>
            </div>
          </div>
        ))}
      </header>
    </div>
  );
}

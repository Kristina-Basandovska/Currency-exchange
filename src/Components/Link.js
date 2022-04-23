import React from "react";

export default function Link({ link, text, description = "" }) {
  return (
    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
      {description}
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="hover:underline text-blue-500"
      >
        {text}
      </a>
    </div>
  );
}

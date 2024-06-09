import React from "react";

export default function Card({ image, title, link }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <a href={link} className="text-blue-500 hover:text-blue-700">
          Meer
        </a>
      </div>
    </div>
  );
}

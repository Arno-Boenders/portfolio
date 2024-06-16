import React from "react";

export default function Card({ image, title, link }) {
  return (
    <div className="w-80 h-96 rounded overflow-hidden shadow-lg flex flex-col">
      <div className="h-2/3">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <div className="h-1/3 px-6 py-4 flex flex-col justify-between">
        <div className="font-bold text-xl mb-2">{title}</div>
        <a href={link} className="text-orange-300 hover:underline">
          Meer
        </a>
      </div>
    </div>
  );
}

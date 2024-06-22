import React from "react";
import { NavLink } from "react-router-dom";

export default function Card({ image, title, link }) {
  return (
    <NavLink className="w-80 rounded-xl overflow-hidden hover:shadow-2xl hover:scale-105 flex-col">
      <div className="h-2/3 flex justify-center align-center">
        <img
          className="w-11/12 h-11/12 object-cover rounded-xl"
          src={image}
          alt={title}
        />
      </div>
      <div className="font-bold text-xl mt-2 text-center">{title}</div>
    </NavLink>
  );
}

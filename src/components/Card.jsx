import React from "react";
import { NavLink } from "react-router-dom";

export default function Card({ image, title, link, technologies }) {
  return (
    <NavLink
      to={link}
      className="w-80 h-60 rounded-xl overflow-hidden hover:shadow-lg hover:scale-105 duration-300 relative group"
    >
      <div className="w-full h-full relative">
        <img className="w-full h-full object-cover" src={image} alt={title} />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 duration-300 flex flex-col justify-center items-center text-white lg:text-center">
          <div className="opacity-0 group-hover:opacity-100 duration-300 font-bold text-2xl">
            {title}
          </div>
          <p className="opacity-0 group-hover:opacity-100 duration-300">
            {technologies}
          </p>
        </div>
        <div className="lg:hidden absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-70 text-white text-center">
          <div className="font-bold text-2xl">{title}</div>
          <p>{technologies}</p>
        </div>
      </div>
    </NavLink>
  );
}

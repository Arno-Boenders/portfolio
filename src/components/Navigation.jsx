import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export default function Navigation() {
  const location = useLocation();
  const isHomePage = location.pathname === ROUTES.home.path;

  return (
    isHomePage && (
      <nav className="sticky top-0 flex justify-end items-center gap-8 pr-5 text-2xl h-20 z-10 backdrop-blur-sm bg-white/1">
        <NavLink className="hover:text-orange-300" to={ROUTES.home.path}>
          {ROUTES.home.title}
        </NavLink>
        <a className="hover:text-orange-300" href={ROUTES.about.path}>
          {ROUTES.about.title}
        </a>
        <a className="hover:text-orange-300" href={ROUTES.work.path}>
          {ROUTES.work.title}
        </a>
      </nav>
    )
  );
}

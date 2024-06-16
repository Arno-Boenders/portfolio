import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export default function Navigation() {
  return (
    <nav>
      <NavLink to={ROUTES.home.path}>{ROUTES.home.title}</NavLink>
      <a href={ROUTES.work.path}>{ROUTES.work.title}</a>
      <a href={ROUTES.about.path}>{ROUTES.about.title}</a>
    </nav>
  );
}

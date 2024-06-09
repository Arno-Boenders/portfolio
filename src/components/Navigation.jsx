import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export default function Navigation() {
  return (
    <nav>
      <NavLink to={ROUTES.home.path}>{ROUTES.home.title}</NavLink>
    </nav>
  );
}

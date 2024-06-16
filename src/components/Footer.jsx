import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <h2 className="text-2xl sm:text-4xl mb-5 font-bold text-center">Socials</h2>
      <nav className="flex justify-center gap-6 mb-5">
        <NavLink
          to={{ pathname: "https://github.com/Arno-Boenders" }}
          target="_blank"
          style={{ display: "flex", alignItems: "center" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            className="w-10 fill-white hover:fill-orange-300"
          >
            <path d="M17.791 46.836A1.999 1.999 0 0 0 19 45v-5.4c0-.197.016-.402.041-.61A.611.611 0 0 1 19 39h-3.6c-1.5 0-2.8-.6-3.4-1.8-.7-1.3-1-3.5-2.8-4.7-.3-.2-.1-.5.5-.5.6.1 1.9.9 2.7 2 .9 1.1 1.8 2 3.4 2 2.487 0 3.82-.125 4.622-.555C21.356 34.056 22.649 33 24 33v-.025c-5.668-.182-9.289-2.066-10.975-4.975-3.665.042-6.856.405-8.677.707a21.537 21.537 0 0 1-.151-.987c1.797-.296 4.843-.647 8.345-.714a8.162 8.162 0 0 1-.291-.849c-3.511-.178-6.541-.039-8.187.097-.02-.332-.047-.663-.051-.999 1.649-.135 4.597-.27 8.018-.111a9.832 9.832 0 0 1-.13-1.543c0-1.7.6-3.5 1.7-5-.5-1.7-1.2-5.3.2-6.6 2.7 0 4.6 1.3 5.5 2.1C21 13.4 22.9 13 25 13s4 .4 5.6 1.1c.9-.8 2.8-2.1 5.5-2.1 1.5 1.4.7 5 .2 6.6 1.1 1.5 1.7 3.2 1.6 5 0 .484-.045.951-.11 1.409 3.499-.172 6.527-.034 8.204.102-.002.337-.033.666-.051.999-1.671-.138-4.775-.28-8.359-.089a8.272 8.272 0 0 1-.325.98c3.546.046 6.665.389 8.548.689-.043.332-.093.661-.151.987-1.912-.306-5.171-.664-8.879-.682-1.665 2.878-5.22 4.755-10.777 4.974V33c2.6 0 5 3.9 5 6.6V45c0 .823.498 1.53 1.209 1.836C41.37 43.804 48 35.164 48 25 48 12.318 37.683 2 25 2S2 12.318 2 25c0 10.164 6.63 18.804 15.791 21.836z" />
          </svg>
        </NavLink>
        <NavLink
          to={{
            pathname: "https://www.linkedin.com/in/arno-boenders-816117228/",
          }}
          target="_blank"
          style={{ display: "flex", alignItems: "center" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            className="w-10 fill-white hover:fill-orange-300"
          >
            <path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM17 20v19h-6V20h6zm-6-5.53c0-1.4 1.2-2.47 3-2.47s2.93 1.07 3 2.47c0 1.4-1.12 2.53-3 2.53-1.8 0-3-1.13-3-2.53zM39 39h-6V29c0-2-1-4-3.5-4.04h-.08C27 24.96 26 27.02 26 29v10h-6V20h6v2.56S27.93 20 31.81 20c3.97 0 7.19 2.73 7.19 8.26V39z" />
          </svg>
        </NavLink>
        <NavLink
          to={{ pathname: "https://www.instagram.com/arno_boenders/" }}
          target="_blank"
          style={{ display: "flex", alignItems: "center" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            className="w-10 fill-white hover:fill-orange-300"
          >
            <path d="M16 3C8.83 3 3 8.83 3 16v18c0 7.17 5.83 13 13 13h18c7.17 0 13-5.83 13-13V16c0-7.17-5.83-13-13-13H16zm21 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-12 3c6.07 0 11 4.93 11 11s-4.93 11-11 11-11-4.93-11-11 4.93-11 11-11zm0 2c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9z" />
          </svg>
        </NavLink>
      </nav>
    </footer>
  );
}

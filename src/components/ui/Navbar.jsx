import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const activeLinkClass =
    "border-b-2 border-menu pb-2 transition-all duration-300";

  return (
    <nav className="w-[60%] mx-auto hidden lg:block">
      <ul className="list-none uppercase font-medium text-base flex justify-evenly">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLinkClass : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className={({ isActive }) => (isActive ? activeLinkClass : "")}
          >
            Collection
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? activeLinkClass : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            className={({ isActive }) => (isActive ? activeLinkClass : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

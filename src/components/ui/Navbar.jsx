import React from "react";
import { NavLink } from "react-router";
import { useAuth } from "../../../context/authContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Collection", path: "/collection" },
  { name: "About", path: "/about-us" },
  { name: "Contact", path: "/contact-us" },
];

const Navbar = ({ className }) => {
  const { isLoggedIn } = useAuth();

  const activeLinkClass =
    "border-b-2 border-menu pb-2 transition-all duration-300";

  return (
    <nav className={`w-full lg:w-[60%] mx-auto lg:block ${className}`}>
      <ul className="list-none uppercase font-medium text-base flex flex-col gap-y-8 lg:gap-y-0 lg:flex-row lg:justify-evenly ">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? activeLinkClass : "")}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
        <li className={isLoggedIn ? "hidden" : ""}>
          <NavLink
            to={"/login"}
            className={({ isActive }) => (isActive ? activeLinkClass : "")}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

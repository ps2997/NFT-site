import React from "react";
import "../styles/components/Navbar.css"
import logo from '../assets/logo.png';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar-body">
      <img
        src={logo}
        alt="logo"
      />

      <div className="navbar-flex">
        <NavLink className="navbar-links" to="/">
          Form
        </NavLink>
        <NavLink className="navbar-links" to="/scanner">
          Scanner
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

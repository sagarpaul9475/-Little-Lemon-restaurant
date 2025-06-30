// components/Nav.jsx
import React from "react";
import "./css/Nav.css";
import logo from "../assets/Logo.svg"; // make sure the path is correct
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Little Lemon Logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/order">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
</ul>
      </div>
    </nav>
  );
};

export default Nav;

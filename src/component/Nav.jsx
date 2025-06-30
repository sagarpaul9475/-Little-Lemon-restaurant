// components/Nav.jsx
import React from "react";
import "./css/Nav.css";
import logo from "../assets/Logo.svg"; // make sure the path is correct

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Little Lemon Logo" />
          <h1>Little Lemon</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservations</a></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

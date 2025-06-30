// components/Header.jsx
import React from "react";
import "./css/Header.css";
import headerImage from "../assets/restauranfood.jpg"; // replace with your actual image name

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Left text content */}
        <div className="header-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </div>

        {/* Right image */}
        <div className="header-image">
          <img src={headerImage} alt="Chef preparing food" />
        </div>
      </div>
    </header>
  );
};

export default Header;

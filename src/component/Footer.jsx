// components/Footer.jsx
import React from "react";
import "./css/Footer.css";
import logo from "../assets/Logo.svg"; // Replace with your actual logo path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Little Lemon Logo" />
          <h2>Little Lemon</h2>
        </div>

        {/* Footer Columns */}
        <div className="footer-columns">
          {/* Doormat Navigation */}
          <div className="footer-column">
            <h3>Doormat Navigation</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Reservations</a></li>
              <li><a href="#">Order Online</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>123 Lemon St, Chicago</li>
              <li>(123) 456-7890</li>
              <li>info@littlelemon.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-column">
            <h3>Social Media</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

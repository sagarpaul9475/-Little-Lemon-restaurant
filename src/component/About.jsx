// components/About.jsx
import React from "react";
import "./css/About.css";
import chef1 from "../assets/chef1.jpg";
import chef2 from "../assets/chef2.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        {/* Text */}
        <div className="about-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon is a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. We are passionate
            about fresh ingredients, cultural flavor, and friendly hospitality.
          </p>
        </div>

        {/* Images */}
        <div className="about-images">
          <img src={chef1} alt="Chef 1" className="img1" />
          <img src={chef2} alt="Chef 2" className="img2" />
        </div>
      </div>
    </section>
  );
};

export default About;

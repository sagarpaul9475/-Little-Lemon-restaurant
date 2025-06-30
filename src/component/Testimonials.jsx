// components/Testimonials.jsx
import React from "react";
import "./css/Testimonials.css";
import user1 from "../assets/basket.svg";
import user2 from "../assets/basket.svg";
import user3 from "../assets/basket.svg";
import user4 from "../assets/basket.svg";

const testimonials = [
  {
    image: user1,
    name: "Alex Johnson",
    rating: "⭐⭐⭐⭐⭐",
    review: "The food was absolutely amazing! Highly recommend the Greek Salad."
  },
  {
    image: user2,
    name: "Maria Gomez",
    rating: "⭐⭐⭐⭐",
    review: "Loved the ambiance and the lemon dessert. Will visit again!"
  },
  {
    image: user3,
    name: "Rahul Verma",
    rating: "⭐⭐⭐⭐⭐",
    review: "Authentic Mediterranean flavors. The bruschetta is my favorite!"
  },
  {
    image: user4,
    name: "Sarah Lee",
    rating: "⭐⭐⭐⭐",
    review: "Quick service, friendly staff. Great place for a weekend dinner."
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2>Testimonials</h2>
        <div className="testimonial-cards">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <img src={t.image} alt={t.name} />
              <h3>{t.name}</h3>
              <p className="rating">{t.rating}</p>
              <p className="review">{t.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

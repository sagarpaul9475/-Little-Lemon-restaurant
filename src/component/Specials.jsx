// components/Specials.jsx
import React from "react";
import "./css/Specials.css";
import greekSalad from "../assets/greek-salad.jpg";
import bruschetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon-dessert.jpg";

const Specials = () => {
  return (
    <section className="specials">
      <div className="specials-container">
        <div className="specials-header">
          <h2>This week's specials!</h2>
          <button>Online Menu</button>
        </div>

        <div className="specials-cards">
          {/* Card 1 */}
          <div className="card">
            <img src={greekSalad} alt="Greek Salad" />
            <div className="card-body">
              <div className="card-title">
                <h3>Greek Salad</h3>
                <span>$12.99</span>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with garlic and
                rosemary croutons.
              </p>
              <p className="order-link">Order a delivery 🛵</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src={bruschetta} alt="Bruschetta" />
            <div className="card-body">
              <div className="card-title">
                <h3>Bruschetta</h3>
                <span>$5.89</span>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <p className="order-link">Order a delivery 🛵</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img src={lemonDessert} alt="Lemon Dessert" />
            <div className="card-body">
              <div className="card-title">
                <h3>Lemon Dessert</h3>
                <span>$5.00</span>
              </div>
              <p>
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <p className="order-link">Order a delivery 🛵</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;

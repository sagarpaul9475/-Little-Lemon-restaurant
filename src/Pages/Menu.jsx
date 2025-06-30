import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";

const MenuPage = () => (
  <>
    <Nav />
    <main style={{ padding: "60px", textAlign: "center" }}>
      <h1>Menu</h1>
      <p>Explore our delicious Mediterranean menu.</p>
    </main>
    <Footer />
  </>
);

export default MenuPage;

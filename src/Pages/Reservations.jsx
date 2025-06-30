import React from "react";
import Nav from "../component/Nav";
import BookingForm from "../component/BookingForm";
import Footer from "../component/Footer";

const Reservations = () => {
  return (
    <>
      <Nav />
      <main style={{ padding: "60px", textAlign: "center" }}>
        <h1>Reserve a Table</h1>
        <BookingForm />
      </main>
      <Footer />
    </>
  );
};

export default Reservations;

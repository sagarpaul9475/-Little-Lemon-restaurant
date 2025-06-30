import React, { useReducer } from "react";
import Nav from "../component/Nav";
import Header from "../component/Header";
import Specials from "../component/Specials";
import Testimonials from "../component/Testimonials";
import About from "../component/About";
import Footer from "../component/Footer";
import BookingForm from "../component/BookingForm";

// 🧠 Step 2: Initial & Update functions
// Home.jsx
const initializeTimes = () => {
  const today = new Date();
  if (typeof window.fetchAPI === "function") {
    return window.fetchAPI(today); // expected to return array
  } else {
    console.warn("fetchAPI not found, returning empty array");
    return [];
  }
};

const updateTimes = (state, action) => {
  if (action.type === "update" && typeof window.fetchAPI === "function") {
    const newDate = new Date(action.date);
    return window.fetchAPI(newDate);
  } else {
    console.warn("fetchAPI not found or bad action, returning state");
    return state;
  }
};



const Home = () => {
  const [availableTimes, dispatch ,submitForm] = useReducer(updateTimes, [], initializeTimes);

  return (
    <>
      <Nav />
      <Header />
      <Specials />
      <Testimonials />
      <About />
      {/* 🔗 Pass times and dispatch */}
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
      <Footer />
    </>
  );
};

export default Home;

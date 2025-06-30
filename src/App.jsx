// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import Menu from "./Pages/Menu";
import Reservations from "./Pages/Reservations";
import Order from "./Pages/Order";
import Login from "./Pages/Login";
import ConfirmedBooking from "./Pages/ConfirmedBooking";
function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
}

export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import "./component/Navbar.jsx";
import Navbar from "./component/Navbar.jsx";
import HeroSection from "./Screen/HeroSection.jsx";
import HappyMeal from "./Screen/HappyMeal.jsx";
import Restaurant from "./Screen/Restaurant.jsx";
import McDelivery from "./Screen/McDelivery.jsx";
import News from "./Screen/News.jsx";
import BirthdayParty from "./Screen/BirthdayParty.jsx";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HappyMeal />
      <Restaurant />
      <McDelivery />
      <News />
      {/* <BirthdayParty /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </>
  );
}

export default App;

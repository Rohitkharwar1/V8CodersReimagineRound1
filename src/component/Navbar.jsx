import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`main-nav ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo Part */}
      <div className="logo">
        <h2>
          <span>M</span>c<span>D</span>onalds
        </h2>
      </div>
      {/* Navbar List */}
      <div
        className={
          showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
        }
      >
        <ul>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Happy Meals</a>
          </li>
          <li>
            <a href="#">Restaurants</a>
          </li>
          <li>
            <a href="#">McDelivery</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Birthday Party</a>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu">
        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <GiHamburgerMenu />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

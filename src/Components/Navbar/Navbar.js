import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="top">
        <nav className="navbar">
          <div className="logo">Weather</div>
          <div
            className={`burger ${isOpen ? "toggle" : ""}`}
            onClick={toggleNav}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>

          <ul className={`nav-links ${isOpen ? "nav-active" : ""}`}>
            <li>
              <a
                href="#"
                className={`nav-link ${isOpen ? "nav-link-active" : ""}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link ${isOpen ? "nav-link-active" : ""}`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link ${isOpen ? "nav-link-active" : ""}`}
              >
                Find weather your area
              </a>
            </li>
          </ul>
        </nav>

        <div className="subject">
          <h3 className="subject1">
              Today's Weather Forecast
          </h3>
        </div>
      </div>
    </>
  );
};

export default Navbar;

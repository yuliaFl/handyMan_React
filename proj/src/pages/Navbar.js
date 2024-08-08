import "../styles/Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '..'

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };
  return (
    <nav className="navbar">
      <ul className="nav-links">
      <li>
          <Link to="/outdoor">Outdoor</Link>
        </li>
        <li
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#Rooms" className="dropdown-toggle">
            Rooms
          </a>
          {dropdownOpen && (
            <ul className="dropdown-content">
              <li>
                <a href="#Kitchen">Kitchen</a>
              </li>
              <li>
                <a href="#Bedroom">Bedroom</a>
              </li>
              <li>
                <a href="#Bathroom">Bathroom</a>
              </li>
            </ul>
          )}
        </li>
        <li className="home-link">
          <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;

import "./Navbar.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li><a href="#Home">Home</a></li>
        <li
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#Rooms" className="dropdown-toggle">Rooms</a>
          {dropdownOpen && (
            <ul className="dropdown-content">
              <li><a href="#Kitchen">Kitchen</a></li>
              <li><a href="#Bedroom">Bedroom</a></li>
              <li><a href="#Bathroom">Bathroom</a></li>
            </ul>
          )}
        </li>
        <li><Link to="/outdoor">Outdoor</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;
// src/components/DropdownButton.js
import React, { useState } from 'react';
import './DropdownButton.css';

const DropdownButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="dropdown">
      <button
        className="dropdown-button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Sink
      </button>
      {isHovered && (
        <div className="dropdown-content">
          <ul>
            <li>Change Sink</li>
            <li>Clogged Sink</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;

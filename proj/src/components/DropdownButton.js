import React, { useState } from 'react';

const DropdownButton = ({ label, items, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    alert('Button clicked!'); // Optional: remove this if not needed
  };

  return (
    <div className="dropdown">
      <button
        className="dropdown-button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {label}
      </button>
      {isHovered && (
        <div className="dropdown-content">
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;

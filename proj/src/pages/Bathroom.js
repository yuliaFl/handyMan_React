import React from 'react';
import './Bathroom.css';
import DropdownButton from "../components/DropdownButton";

function Bathroom () {

  const showerHeadtems = ["Replace"];
  const tileItems = ["Fix", "Replace ", "Hang Items"];

  return (
    <div className="bathroom-background">
      <header>
        <h1>Bathroom</h1>
      </header>
      <main>
        <p>Hover over a part of the room that I can help you with</p>
        <div className="showerhead-section">
          <DropdownButton label="Shower Head" items={showerHeadtems} />
        </div>
        <div className="tileitems-section">
          <DropdownButton label="Tile Items" items={tileItems} />
        </div>
      </main>
    </div>
  );
}

export default Bathroom;

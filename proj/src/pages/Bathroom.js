import React from "react";
import "../styles/Bathroom.css";
import DropdownButton from "../components/DropdownButton";

function Bathroom() {
  /* Content for every dropdown button */
  const showerHeadtems = ["Replace"];
  const tileItems = ["Fix", "Replace ", "Hang Items"];

  return (
    <div className="bathroom-background">
      <header>
        <div className="page-header">Bathroom</div>
      </header>
      <main>
        <div className="message">
          Hover over a part of the <br></br> room that I can help you with
        </div>
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

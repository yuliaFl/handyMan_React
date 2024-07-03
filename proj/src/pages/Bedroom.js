import React from "react";
import "./Bedroom.css";
import DropdownButton from "../components/DropdownButton";

function Bedroom() {
  const walltems = ["Paint", "Touch up", "Drywall"];
  const slidingDoorItems = ["Fix", "Replace "];
  const curtiansItems = ["Hang up"];
  const doorHandleItems = ["Change"];
  const fanItems = ["Install"];

  return (
    <div className="bedroom-background">
      <header>
        <h1>Bedroom</h1>
      </header>
      <main>
        <p>Hover over a part of the room that I can help you with</p>
        <div className="wall-section">
          <DropdownButton label="Wall" items={walltems} />
        </div>
        <div className="slidingdoor-section">
          <DropdownButton label="Sliding Door" items={slidingDoorItems} />
        </div>
        <div className="curtians-section">
          <DropdownButton label="Curtains" items={curtiansItems} />
        </div>
        <div className="doorhandle-section">
          <DropdownButton label="Door handle" items={doorHandleItems} />
        </div>
        <div className="fan-section">
          <DropdownButton label="Fan" items={fanItems} />
        </div>
        <div className="furnitureAssemble-section">
          <button className="button-style" >Furniture Assembly </button>
        </div>
      </main>
    </div>
  );
}

export default Bedroom;

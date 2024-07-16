import React from "react";
import DropdownButton from "../components/DropdownButton";
import "./Outdoor.css";

function Outdoor() {
  const roofItems = ["Repair", "Replace"];
  const interlockItems = ["Repair", "Replace"];
  const drivewayItems = ["Repair"];
  const bollardsItems = ["Repair ", "Install"];
  const windowItems = ["Repair", "Install"];
  const doorItems = ["Repair", "Install"];
  const gateItems = ["Repair", "Install"];
  const sidingItems = ["Repair", "Install"];

  return (
    <div className="outdoor-background">
      <header>
        <div className="page-header">Outdoor</div>
      </header>
      <main>
        <div className="message">
          Hover over a part of the room that I can help you with
        </div>
        <div className="roof-section">
          <DropdownButton label="Roof" items={roofItems} />
        </div>
        <div className="interlock-section">
          <DropdownButton label="Interlock" items={interlockItems} />
        </div>
        <div className="driveway-section">
          <DropdownButton label="Driveway" items={drivewayItems} />
        </div>
        <div className="bollards-section">
          <DropdownButton label="Bollards" items={bollardsItems} />
        </div>
        <div className="window-section">
          <DropdownButton label="Window" items={windowItems} />
        </div>
        <div className="door-section">
          <DropdownButton label="Door" items={doorItems} />
        </div>
        <div className="gate-section">
          <DropdownButton label="Gate" items={gateItems} />
        </div>
        <div className="siding-section">
          <DropdownButton label="Siding" items={sidingItems} />
        </div>
      </main>
    </div>
  );
}

export default Outdoor;

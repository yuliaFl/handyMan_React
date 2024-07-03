import React from 'react';
import './Bathroom.css';
import DropdownButton from "../components/DropdownButton";

function Bathroom () {

  const walltems = ["Paint", "Touch up", "Drywall"];
  const slidingDoorItems = ["Fix", "Replace "];
  const curtiansItems = ["Hang up"];
  const doorHandleItems = ["Change"];
  const fanItems = ["Install"];

  return (
    <div className="bathroom-background">
      <header>
        <h1>Bathroom</h1>
      </header>
      <main>
        <p>Hover over a part of the room that I can help you with</p>
      </main>
    </div>
  );
}

export default Bathroom;

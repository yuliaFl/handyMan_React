import React, { useState } from "react";
import DropdownButton from "../components/DropdownButton";
import Form from "../components/Form";
import "./Kitchen.css";

function Kitchen() {
  const sinkItems = ["Change Sink", "Clogged Sink"];
  const backsplashItems = ["Fix", "Replace "];
  const faucetItems = ["Replace"];
  const doorItems = ["Fix ", "Replace", "Paint"];

  return (
    <div className="kitchen-background">
      <header>
        <div className="page-header">Kitchen</div>
      </header>
      <main>
        <div className="message">
          Hover over a part of the <br></br> room that I can help you with
        </div>
        <div className="sink-section">
          <DropdownButton label="Sink" items={sinkItems} />
        </div>
        <div className="backsplash-section">
          <DropdownButton label="Backsplash" items={backsplashItems} />
        </div>
        <div className="faucet-section">
          <DropdownButton label="Faucet" items={faucetItems} />
        </div>
        <div className="door-section">
          <DropdownButton label="Door" items={doorItems} />
        </div>
      </main>
    </div>
  );
}

export default Kitchen;

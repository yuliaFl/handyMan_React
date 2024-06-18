import React from 'react';
import DropdownButton from '../components/DropdownButton'; 
import './Kitchen.css';

function Kitchen() {

  const sinkItems = ['Change Sink', 'Clogged Sink'];
  const ovenItems = ['Change Sink', 'Clogged Sink'];

  return (
    <div className="kitchen-background">
      <header>
        <h1>Kitchen</h1>
      </header>
      <main>
        <p>Hover over a part of the room that I can help you with</p>
        <div className="sink-section">
          <DropdownButton label="Sink" items={sinkItems} />
        </div>
        <div className="oven-section">
          <DropdownButton label="Oven" items={ovenItems} />
        </div>
      </main>
    </div>
  );
}

export default Kitchen;

import React, { useState } from 'react';
import DropdownButton from '../components/DropdownButton';
import Form from '../components/Form';
import './Kitchen.css';

function Kitchen() {
  const sinkItems = ['Change Sink', 'Clogged Sink'];
  const backsplashItems = ['Fix', 'Replace '];
  const faucetItems = ['Replace'];
  const doorItems = ['Fix ', 'Replace', 'Paint'];

  const [isFormVisible, setFormVisible] = useState(false);

  const handleButtonClick = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  return (
    <div className="kitchen-background">
      <header>
        <h1>Kitchen</h1>
      </header>
      <main>
        <p>Hover over a part of the room that I can help you with</p>
        <div className="sink-section">
          <DropdownButton label="Sink" items={sinkItems} onClick={handleButtonClick}/>
          {isFormVisible && <Form onClose={handleCloseForm} />}
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

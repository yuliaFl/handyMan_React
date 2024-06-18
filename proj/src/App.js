import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Bathroom from './pages/Bathroom';
import Bedroom from './pages/Bedbroom';
import Kitchen from './pages/Kitchen';

function App() {
  return (
    <div className="App">
       <Navbar />
      <div id="Home">
        <Home />
      </div>
      <div id="Kitchen">
        <Kitchen />
      </div>
      <div id="Bedroom">
        <Bedroom />
      </div>
      <div id="Bathroom">
        <Bathroom />
      </div>
    </div>
  );
}

export default App;

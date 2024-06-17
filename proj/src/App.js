// src/App.js
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
      <Home />
      <Kitchen/>
      <Bedroom/>
      <Bathroom/>
    </div>
  );
}

export default App;

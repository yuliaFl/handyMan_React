import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Bathroom from './pages/Bathroom';
import Bedroom from './pages/Bedroom';
import Kitchen from './pages/Kitchen';
import Contact from './pages/Contact';

function MainPage() {
  return (
    <div>
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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

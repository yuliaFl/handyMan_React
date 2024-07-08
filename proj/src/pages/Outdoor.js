import React from 'react';
import './Outdoor.css';
import { useNavigate } from 'react-router-dom';

function Outdoor () {

  const navigate = useNavigate();

  const redirectPage=()=>{
    navigate('/contact');
  }
  return (
    <div className="outdoor-background">
      <header>
        <h1>Fixit Handyman Solutions</h1>
      </header>
      <main>
        <p>Description of Ignats work</p>
      </main>
    </div>
  );
}

export default Outdoor;


/*
CSS CHANGE WITH THIS FILE EFFECTS BUTTONS ON OTHER PAGES
*/
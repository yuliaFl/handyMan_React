import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home () {

  const navigate = useNavigate();

  const redirectPage=()=>{
    navigate('/contact');
  }
  return (
    <div className="home-background">
      <header>
        <h1>Ignats Website</h1>
      </header>
      <main>
        <button id="estimate-button" onClick={redirectPage}>Get Your Free Estimate </button>
        <p>Hover over a part of the room that I can help you with</p>
      </main>
    </div>
  );
}

export default Home;

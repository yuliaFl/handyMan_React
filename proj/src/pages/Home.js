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
        <h1>FixIt Handyman Solutions</h1>
      </header>
      <main>
        <button id="estimate-button" onClick={redirectPage}>Get Your Free Estimate </button>
        <p>Description of Ignats work- Hello</p>
      </main>
    </div>
  );
}

export default Home;

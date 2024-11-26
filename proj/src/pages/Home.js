import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const redirectPage = () => {
    navigate("/contact");
  };
  return (
    <div className="home-background">
    <div className="home-container">
        <div className="main-tittle">FixIt Handyman Solutions</div>
        <button id="estimate-button" onClick={redirectPage}>
          Get Your Free Estimate!
        </button>
        <div class="description">
          <div class="home-title">
            Reliable Handyman Services for All Your Home Needs
          </div>
          <div className="home-content">
            From minor repairs to major renovations, we've got you covered! Our
            skilled handyman provides top-notch services with a smile. No job is too big or small.
          </div>
          <div className="home-content">
            Contact us today for a free estimate and let us take care of your
            home improvement projects!
          </div>
        </div>
        </div>
    </div>
  );
}

export default Home;

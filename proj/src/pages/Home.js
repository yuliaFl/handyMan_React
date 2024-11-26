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
    <div className="home-content">
        <div className="hometitle1">FixIt Handyman Solutions</div>
        <button id="estimate-button" onClick={redirectPage}>
          Get Your Free Estimate!
        </button>
        <div class="home-container">
          <div class="hometitle">
            Reliable Handyman Services for All Your Home Needs
          </div>
          <div className="content">
            From minor repairs to major renovations, we've got you covered! Our
            skilled handyman provides top-notch services with a smile. No job is too big or small.
          </div>
          <div className="content">
            Contact us today for a free estimate and let us take care of your
            home improvement projects!
          </div>
        </div>
        </div>
    </div>
  );
}

export default Home;

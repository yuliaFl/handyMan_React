import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const redirectPage = () => {
    navigate("/contact");
  };
  return (
    <div className="home-background">
      <header>
        <div className="home-page-header">FixIt Handyman Solutions</div>
      </header>
      <main>
        <button id="estimate-button" onClick={redirectPage}>
          Get Your Free Estimate{" "}
        </button>
        <div class="handyman-description">
          <div class="title">
            Reliable Handyman Services for All Your Home Needs
          </div>
          <div class="content">
            From minor repairs to major renovations, we've got you covered! Our
            skilled and experienced handyman is here to provide top-notch
            services with a smile. Whether it's fixing a leaky faucet, painting
            a room, or installing new fixtures, we handle it all with precision
            and care. Your satisfaction is our priority, and no job is too big
            or too small. Trust us to make your home the best it can be!
          </div>
          <div class="content">
            Contact us today for a free estimate and let us take care of your
            home improvement projects!
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;

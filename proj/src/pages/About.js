import React from "react";
import "../styles/About.css";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const redirectPage = () => {
    navigate("/contact");
  };
  return (
    <div className="about-background">
      <div className="about-container">
        <div class="about-heading">About Us</div>
        <div className="about-content">
          Welcome to FixIt Handyman Solutions, your trusted partner in
          renovation and handicrafts for both interior and exterior projects.
          With years of experience and a commitment to excellence, we transform
          spaces into stunning, functional environments. Our portfolio showcases
          a range of projects, reflecting our versatility and dedication to
          quality.
        </div>
        <br />
        <div className="experience">
          <div class="about-title">Our Experience </div>
          <div className="content-experience">
            <div class="name">
              General Contractor for Hazelton Real Estate Inc.{" "}
            </div>
            Over 4 years of managing and executing renovation projects, ensuring
            top-notch quality and timely completion.
            <br />
            <br />
            <div class="name">
              {" "}
              General Contractor for Woodbine Family Health Team{" "}
            </div>
            Successfully leading renovation efforts for over 1 year, enhancing
            healthcare facilities to better serve the community.
            <br />
            <br />
            <div class="name">
              Collaborations with Drive Test{" "}
            </div>
            Provided expert renovation and handyman services, contributing to
            the efficiency and aesthetics of their facilities.
            <br />
            <br />
            <div class="name">
              {" "}
              Prestigious Hotel Renovations{" "}
            </div>
            Four Season Hotel: Delivered high-quality renovation and handyman
            services, maintaining luxury standards. Hotel Shangri-la:
            Consistently upgraded and maintained interiors, ensuring a superior
            guest experience.
            <br />
            <br />
            <div class="name">
              {" "}
              Retail and Commercial Projects{" "}
            </div>
            National Dispatch: Built stores and provided comprehensive handyman
            services, supporting their operational needs. Lucid Windows Inc.:
            Partnered to deliver specialized renovation and installation
            services.
            <br />
            <br />
          </div>
        </div>
        <div className="why-choose-us">
          <div class="about-title">Why Choose Us?</div>
          <div className="content">
            Our dedication to craftsmanship and customer satisfaction sets us
            apart. Whether you need a complete renovation or minor handyman
            work, we bring the same level of professionalism and attention to
            detail to every project. Trust us to enhance the beauty and
            functionality of your property.
            <br></br>
            <br></br>
            Contact us today to discuss your next project and see how we can
            turn your vision into reality.
          </div>
        </div>
        <br></br>
        <button id="estimate-button" onClick={redirectPage}>
            Contact!
          </button>
      </div>
    </div>
  );
}

export default About;

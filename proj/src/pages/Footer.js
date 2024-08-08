import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-container">
          <div className="footer-section about-us">
            <h2>About Us</h2>
            <p>
              We provide top-notch handyman services to meet all your home
              repair needs
            </p>
          </div>
          <div className="footer-section partners">
            <h2>Our Partners</h2>
            <div className="partner-logos">
              {/* Add your partner logos here */}
              <img src={`${process.env.PUBLIC_URL}/lucid.jpg`} alt="Lucid" />
            </div>
          </div>
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>
              Email:{" "}
              <a href="mailto:handyman.fixed.it@gmail.com" className="email-link">
                handyman.fixed.it@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+16479373558" className="phone-link">
                +1 (647)937-3558
              </a>
            </p>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/fixit_handyman_solution/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/instagram.png`}
                  alt="Instagram"
                  className="icon"
                />
              </a>
              <a
                href="https://g.co/kgs/UZsDEj2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/google.png`}
                  alt="Google"
                  className="icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Handyman Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

/*
              <img
                src={`${process.env.PUBLIC_URL}/facebook.png`}
                alt="Facebook"
                className="icon"
              />
*/

import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="home-background">
      <header>
        <div className="page-header"> Contact Page Unavailable</div>
        <div className="error-message">
          We're sorry, but our contact page is temporarily unavailable due to
          maintenance. Please use the information below to reach me:
        </div>
        <div class="contact-info">
          <br></br>
          <br></br>
          Email:{" "}
          <a href="handyman.fixed.it@gmail.com" className="email-link">
          handyman.fixed.it@gmail.com
          </a>
          <br></br>
          <br></br>
          Mobile:
          <a href="tel:+16479373558" className="phone-link">
            +1 (647)937-3558
          </a>
        </div>
      </header>
    </div>
  );
}

export default Contact;

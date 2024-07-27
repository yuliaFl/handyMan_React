import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="home-background">
        <div className="contact-page-header"> Contact Page Unavailable</div>
        <div className="error-message">
          We're sorry, but our contact page is temporarily unavailable due to
          maintenance. Please use the information below to reach me:
        </div>
        <div className="contact-contact-info">
          <p>Email: <a href="mailto:handyman.fixed.it@gmail.com" className="email-link">handyman.fixed.it@gmail.com</a></p>
          <p>Mobile: <a href="tel:+16479373558" className="phone-link">+1 (647)937-3558</a></p>
        </div>
    </div>
  );
}

export default Contact;

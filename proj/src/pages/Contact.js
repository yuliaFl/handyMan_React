import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="home-background">
      <header>
        <h1>Contact Page Unavailable</h1>
        <h3>
          We're sorry, but our contact page is temporarily unavailable due to
          maintenance.
        </h3>
        <h2>Please use the information below to reach me:</h2>
        <div class="contact-info">
          <h3>
            Email: <a href="mailto:support@example.com" className="email-link" >support@example.com</a>
          </h3>
          <h3><a href="tel:+16479373558" className="phone-link" >+1 (647)937-3558</a></h3>
        </div>
      </header>
    </div>
  );
}

export default Contact;

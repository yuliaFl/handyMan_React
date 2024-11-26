import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    setError("");
    // Add your form submission logic here
    alert("Form submitted successfully!");
  };

  return (
    <div className="contact-background">
      <div className="contact-container">
        <div className="contact-page-header">Contact Page Is Not Working</div>
        <div className="error-message">
          We're sorry, but our contact page is temporarily unavailable due to
          maintenance. Please use the information below to reach me:
        </div>
        <div className="contact-contact-info">
          <p>Email: <a href="mailto:handyman.fixed.it@gmail.com" className="email-link">handyman.fixed.it@gmail.com</a></p>
          <p>Mobile: <a href="tel:+16479373558" className="phone-link">+1 (647)937-3558</a></p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="g-recaptcha" data-sitekey="6LewC4oqAAAAAN_FN5azb5maulj6Bes7pAhdQCrq"></div>
          {error && <p className="error-text">{error}</p>}
          <button type="submit">Get in contact!</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

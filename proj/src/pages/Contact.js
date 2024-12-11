import React, { useState } from "react";
import "../styles/Contact.css";
import ReCAPTCHA from "react-google-recaptcha";


function Contact() {

  const [recaptchaToken, setRecaptchaToken] = useState("");

  const handleRecaptcha = () => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute("6LewC4oqAAAAAGFLvJqYazYkLobXefoN09zgbMbO", { action: "submit" })
        .then((token) => {
          setRecaptchaToken(token);
          handleSubmit();
        });
    });
  };
  
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
  
    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA.");
      return;
    }
  
    setError("");
    // Submit the data to the PHP server via a POST request
    fetch("/email.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, "g-recaptcha-response": recaptchaToken }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Form submitted successfully!");
        } else {
          setError("Failed to submit the form. Please try again.");
        }
      })
      .catch(() => setError("An error occurred while submitting the form."));
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
          <p>Email: <a href="mailto:handyman.fixed.it@gmail.com" className="c-email-link">handyman.fixed.it@gmail.com</a></p>
          <p>Mobile: <a href="tel:+16479373558" className="c-phone-link">+1 (647)937-3558</a></p>
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
         <ReCAPTCHA sitekey="6LewC4oqAAAAAGFLvJqYazYkLobXefoN09zgbMbO" onChange={handleRecaptcha}/>
          {error && <p className="error-text">{error}</p>}
          <button>Send us a message! </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

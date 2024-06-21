import React, { useState } from 'react';

function Contact() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', inputs);
    // Add your form submission logic here
  };

  return (
    <div className="home-background">
      <header>
        <h1>Contact me</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={inputs.name} 
              onChange={handleChange} 
            />
          </label>
          <br />
          <label>
            Email Address:
            <input 
              type="email" 
              name="email" 
              value={inputs.email} 
              onChange={handleChange} 
            />
          </label>
          <br />
          <label>
            Phone:
            <input 
              type="tel" 
              name="phone" 
              value={inputs.phone} 
              onChange={handleChange} 
            />
          </label>
          <br />
          <label>
            What can I help you with?:
            <textarea 
              name="message" 
              value={inputs.message} 
              onChange={handleChange} 
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </main>
    </div>
  );
}

export default Contact;

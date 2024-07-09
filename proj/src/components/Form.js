import React from 'react';
import './Form.css'; // Assuming you have some styles for the form

const Form = ({ section, onClose }) => {
  return (
    <div className="form-container">
      <h2>{section} Form</h2>
      <form>
        {/* Add your form fields here */}
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

export default Form;

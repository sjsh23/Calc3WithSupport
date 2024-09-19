import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './support.css';

const SupportForm = () => {
    const navigate = useNavigate();
    const [ticketNumber, setTicketNumber] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Generate a random 4-digit ticket number
      
  
      // Redirect to the ThankYouPage
      navigate('/thank-you');
    };
  return (
    <div className="support-form">
      <h2>Support Form</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="topic">Topic:</label>
          <input type="text" id="topic" name="topic" required />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" rows="4" required />
        </div>

        <button type="submit">Send</button>
      </form>

    </div>
  );
};

export default SupportForm;

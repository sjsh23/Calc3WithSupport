import React from 'react'
import './support.css';

const ThankYouPage = () => {

  const randomTicketNumber = Math.floor(1000 + Math.random() * 9000);
  return (

    <div className="support-form">
      <h2>Support ticket Form</h2>
      <hr />
      <div className='text'>
      <h1>Thank you for sending the report, we will track the problem now </h1>
      <p>ticket number : {randomTicketNumber}</p>

      </div>
    </div>
  );
};

export default ThankYouPage
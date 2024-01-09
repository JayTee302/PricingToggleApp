import React from 'react';
import './Card.css';

const Card = ({ title, description, price, plan, image, handleButtonClick }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
      <p>Price: {price}</p>
      <p>Plan: {plan}</p>
      <button onClick={handleButtonClick}>Details</button>
    </div>
  );
};

export default Card;

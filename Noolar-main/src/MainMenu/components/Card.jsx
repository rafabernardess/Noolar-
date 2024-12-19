import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ title, description, imageUrl, bgColor, buttonText, destino }) {


  return (
    <div className="card-container">
      <img src={imageUrl} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p>
      <button className="card-button"><Link to={destino} className='linkNavigate'>{buttonText}</Link></button>
    </div>
  );
}

export default Cards;
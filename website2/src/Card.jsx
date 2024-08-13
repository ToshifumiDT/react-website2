import React from 'react';
import image from './images/screanshot.png';
import './Card.css';

const Card = ({ title, content, imageUrl, linkUrl }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <img 
        src={image} 
        alt={title} 
        style={{ cursor: 'pointer' }} 
        onClick={() => window.open(linkUrl, '_blank')}
      />
      <p>{content}</p>
    </div>
  );
};

export default Card;

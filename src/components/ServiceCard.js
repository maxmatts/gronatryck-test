// src/components/ServiceCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { serviceId, name, price, images } = service;
  const modelImage = images.modelUrl; 
  const path = modelImage.basePath;

  return (
    <Link to={`/tjanster/${serviceId}`} className="card">
      <div className="card-image">
        <picture className="default-image">
          <source
            srcSet={`${path}-small.webp 600w, ${path}-medium.webp 1024w, ${path}.webp 1600w`}
            type="image/webp"
            sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
          />
          <source
            srcSet={`${path}-small.jpg 600w, ${path}-medium.jpg 1024w, ${path}.jpg 1600w`}
            type="image/jpeg" 
            sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
          />
          <img
            src={`${path}.jpg`} 
            alt={modelImage.alt}
            loading="lazy"
          />
        </picture>
      </div>
      <div className="card-content">
        <h3 className="card-name">{name}</h3>
        <p className="service-price">{`Pris:  ${price !== null ? price : 'Kontakta oss för pris'} `}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;

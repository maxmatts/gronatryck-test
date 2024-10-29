// src/components/ServiceCard.js
import React from 'react'; // Importerar React-biblioteket
import { Link } from 'react-router-dom'; // Importerar Link för navigering

const ServiceCard = ({ service }) => {
  // Destrukturera serviceobjektet för att få ut nödvändiga egenskaper
  const { serviceId, name, price, images } = service;
  const modelImage = images.modelUrl; // Hämtar bild-URL:n
  const path = modelImage.basePath; // Basväg för bilden

  return (
    <Link to={`/tjanster/${serviceId}`} className="card"> {/* Navigerar till tjänstens sida */}
      <div className="card-image">
        <picture className="default-image">
          {/* Definierar bildkällor för olika bildformat och storlekar */}
          <source
            srcSet={`${path}-small.webp 600w, ${path}-medium.webp 1024w, ${path}.webp 1600w`} // WebP-format
            type="image/webp"
            sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
          />
          <source
            srcSet={`${path}-small.jpg 600w, ${path}-medium.jpg 1024w, ${path}.jpg 1600w`} // JPEG-format
            type="image/jpeg" 
            sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
          />
          <img
            src={`${path}.jpg`} // Fallback-bild
            alt={modelImage.alt} // Alternativtext för bilden
            loading="lazy" // Låter bilden laddas asynkront
          />
        </picture>
      </div>
      <div className="card-content">
        <h3 className="card-name">{name}</h3> {/* Tjänstens namn */}
        <p className="service-price">{`Pris:  ${price !== null ? price : 'Kontakta oss för pris'} `}</p> {/* Visar priset eller meddelande */}
      </div>
    </Link>
  );
};

export default ServiceCard; // Exporterar komponenten

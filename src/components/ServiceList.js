// src/components/ServiceList.js
import React from 'react'; // Importerar React-biblioteket
import ServiceCard from './ServiceCard'; // Importerar ServiceCard-komponenten
import services from '../data/serviceData'; // Importerar data om tjänster

const ServiceList = () => {
  return (
    <div className="product-wrapper"> {/* Wrapper för att styla tjänstelistan */}
      
      {services.map(service => ( // Loopar genom varje tjänst i services-arrayen
        <ServiceCard key={service.serviceId} service={service} /> // Renderar en ServiceCard för varje tjänst
      ))}
    </div>
  );
};

export default ServiceList; // Exporterar komponenten


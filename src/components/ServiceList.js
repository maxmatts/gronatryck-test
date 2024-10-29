// src/components/ServiceList.js
import React from 'react';
import ServiceCard from './ServiceCard';
import services from '../data/serviceData'; 

const ServiceList = () => {
  return (
    <div className="product-wrapper">
      
      {services.map(service => (
        <ServiceCard key={service.serviceId} service={service} />
      ))}
    </div>
  );
};

export default ServiceList;

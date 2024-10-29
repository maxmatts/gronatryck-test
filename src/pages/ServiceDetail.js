import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import services from '../data/serviceData'; 
import Breadcrumb from '../components/Breadcrumb.js';
import '../styles/services.css';
import Button from '../components/Button.js';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  // Find service, but initialize empty object to prevent undefined errors in state initialization
  const service = services.find((s) => s.serviceId === serviceId) || {};

  // State to handle currently displayed main image and service details
  const [currentImage, setCurrentImage] = useState(service?.images?.modelUrl?.basePath || '');

  // Subdescription setup
  const renderSubdescription = () => {
    const points = (service.subdescription || '').split('\n').filter(point => point.trim() !== '');
    return (
      <ul>
        {points.map((point, index) => (
          <li key={index} className="subdescription-item">{point.trim()}</li>
        ))}
      </ul>
    );
  };

  // Render additional images with click functionality to update main image
  // const renderAdditionalImages = () => {
  //   return (
  //     <div className="thumbnail-carousel-2">
  //       {(service.images?.additionalInfo || []).map((img, index) => (
  //         <img
  //           key={index}
  //           src={`${img.basePath}.jpg`}
  //           alt={img.alt}
  //           className="thumbnail-image-2"
  //           onClick={() => setCurrentImage(img.basePath)}
  //         />
  //       ))}
  //     </div>
  //   );
  // };

  
  if (!service || !service.name) {
    return <div>Tjänsten hittades inte</div>; 
  }

  return (
    <div>
      <div className="container service-detail">
        <Breadcrumb />
        <main className="service">
          <div className="service-grid">
            
            <div className="service-gallery">
              <div className="main-image-2">
                <img src={`${currentImage}.jpg`} alt="Main Service Image" loading="lazy" />
              </div>
              
              {/* {renderAdditionalImages()} */}
            </div>

            {/* Service details section */}
            <section className="service-info">
              <h2 className="heading-2">{service.name}</h2>
              <p className="service-description">{service.description}</p>
              <h3 className="subheading">Detaljer:</h3>
              <div className='main-body'>{renderSubdescription()}</div>
              <Button
                to="/kontakt"
                className="main-btn btn-container-2"
                content="Kontakta oss för beställning"
              />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ServiceDetail;

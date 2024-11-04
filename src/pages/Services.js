import React from "react";
import ServiceList from '../components/ServiceList';
import "../styles/services.css";
import Breadcrumb from "../components/Breadcrumb";


const Services = () => {



    return (
        <div className="services-page">¨
        
            <div className="service-container">
          
          <h2 className="subheading-1 heading-margin"> Tjänster</h2>
          <ServiceList />
          </div>
        </div>
      );

}
export default Services
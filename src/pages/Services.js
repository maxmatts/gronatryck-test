import React from "react";
import ServiceList from "../components/ServiceList";
import "../styles/services.css";

const Services = () => {
  return (
    <div className="services-page">
      ¨
      <div className="service-container">
        <div className="test-heading">
          <h2 className="subheading-1 heading-margin title"> Tjänster</h2>
        </div>
        <ServiceList />
      </div>
    </div>
  );
};
export default Services;

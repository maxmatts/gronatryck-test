import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import '../styles/progresstracker.css';

const ProgressTracker = () => {
  const location = useLocation(); 
  const steps = [
    { label: 'Varukorg', path: '/cart' },
    { label: 'Logga in', path: '/login' },
    { label: 'Dina uppgifter', path: '/checkout' },
    { label: 'Bekräftelse', path: '/confirmation' }
  ];

  const currentStep = () => {
    switch (location.pathname) {
      case '/cart':
        return 0;
      case '/login':
        return 1;
      case '/checkout':
        return 2;
      case '/confirmation':
        return 3;
      default:
        return 0;
    }
  };

  return (
    <div className="progress-tracker main-body">
      {steps.map((step, index) => (
        <div 
          key={index} 
          className={`step ${index < currentStep() ? 'completed' : ''} ${index === currentStep() ? 'active' : ''}`}
        >
          <Link to={step.path} className="step-link">
            <span className="step-number">{index + 1}</span> 
            <span className="step-label">{step.label}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProgressTracker;

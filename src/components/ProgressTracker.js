// Importerar nödvändiga moduler och komponenter
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import '../styles/progresstracker.css';

// Definierar ProgressTracker-komponenten
const ProgressTracker = () => {
  // Hämta aktuell plats från React Router
  const location = useLocation(); 

  // Definierar stegen i progress tracker
  const steps = [
    { label: 'Varukorg', path: '/cart' }, // Steg 1: Varukorg
    { label: 'Logga in', path: '/login' }, // Steg 2: Logga in
    { label: 'Dina uppgifter', path: '/checkout' }, // Steg 3: Dina uppgifter
    { label: 'Bekräftelse', path: '/confirmation' } // Steg 4: Bekräftelse
  ];

  // Funktion för att bestämma vilket steg som är aktuellt baserat på URL
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
      {/* Mappning över stegen för att skapa en lista med navigeringssteg */}
      {steps.map((step, index) => (
        <div 
          key={index} // Använder index som nyckel för varje steg
          className={`step ${index < currentStep() ? 'completed' : ''} ${index === currentStep() ? 'active' : ''}`}
        >
          <Link to={step.path} className="step-link"> {/* Länk till varje steg */}
            <span className="step-number">{index + 1}</span> 
            <span className="step-label">{step.label}</span> 
          </Link>
        </div>
      ))}
    </div>
  );
};

// Exporterar ProgressTracker-komponenten för användning i andra delar av appen
export default ProgressTracker;

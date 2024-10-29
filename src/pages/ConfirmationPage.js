// components/ConfirmationPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails; 

  if (!orderDetails) {
    return <div>Ingen beställning information tillgänglig.</div>;
  }

  return (
    <div>
      <div className='confirmation-page '>
        <div className='confirmation-heading'>
        <h1 className='heading-3'>Tack för din offert!</h1>
        <h3 className='subheading-2 '>Offertnummer: {orderDetails.orderId}</h3>
       <p className='main-body confirmation-text'>
        Vi tittar nu på din offert. Vi kontaktar er så fort vi kan!
       </p>
       </div>
      
      <div className='btn-container-2'>
      <button className="second-btn"onClick={() => window.location.href = '/'}>Gå till startsidan</button>
      </div>
      </div>
      </div>
    
  );
};

export default ConfirmationPage;

// components/ConfirmationPage.js
import React from "react";
import { useLocation } from "react-router-dom";

const ConfirmationPage = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;

  if (!orderDetails) {
    return <div>Ingen beställning information tillgänglig.</div>;
  }

  return (
    <div>
      <div className="confirmation-page ">
        <div className="confirmation-heading">
          <div className="confirmation-container">
            <h1 className="heading-3">Tack för din offertförfrågan!</h1>
            <h3 className="subheading-2 ">
              Offertnummer: {orderDetails.orderId}
            </h3>
            <p className="main-body confirmation-text">
              Vi tittar nu på din offert. Vi kontaktar er så fort vi kan!
            </p>
            <p className="main-body confirmation-text">
              För att se dina ordrar, gå till din profil.
            </p>
          </div>
        </div>

        <div className="btn-container">
          <div className="btn-container-2">
            <button
              className="second-btn"
              onClick={() => (window.location.href = "/")}
            >
              Gå till startsidan
            </button>
          </div>
          <div className="btn-container-2">
            <button
              className="second-btn"
              onClick={() => (window.location.href = "/mina-sidor")}
            >
              Min profil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;

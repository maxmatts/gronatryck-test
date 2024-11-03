import React from "react";
import Button from "../components/Button";
import "../styles/resell.css";

const services = () => {
  return (
    <div>
      <div className="resell-page">
        <div className="cart-heading">
          <h1 className="main-heading">Återförsäljare</h1>
        </div>

        <div className="resell-page-container">
          <div className="resell-container">
            <h1 className="section-heading heading-3 resell-heading">
              Bli Återförsäljare med Gröna Tryck
            </h1>
            <p className="main-body resell-text-container">
              Söker du en pålitlig partner för profilprodukter som kan stärka
              ditt varumärke? På Gröna Tryck erbjuder vi ett brett utbud av
              ekologiska och rättvisemärkta profilkläder samt reklamprodukter
              som passar perfekt för dina marknadsföringsbehov.
            </p>
            <p className="main-body resell-text-container">
              Som vår återförsäljare får du tillgång till vår expertis inom
              tryck och design, samt ett sortiment som kan anpassas för att möta
              dina kunders krav. Vi erbjuder helhetslösningar – från idé till
              produktion – vilket gör det enkelt för dig att leverera produkter
              som uppskattas av både kunder och anställda.
            </p>
            <p className="main-body resell-text-container">
              Låt oss tillsammans bygga en stark och pålitlig produktlinje som
              sätter ditt varumärke i fokus!
            </p>

            <div className="btn-container">
              <div style={{ display: "flex", gap: "1.6rem" }}>
                <Button
                  to="/kontakt"
                  content={"Kontakta oss"}
                  className="main-btn"
                />
              </div>
            </div>
          </div>

          <div className="resell-image-container">
            <img
              className="resell-image"
              src="/img/decorative/gronatryck_jacket_img.png"
              alt="en man med ryggen vänd iklädd en stilig beigefärgad jacka"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default services;

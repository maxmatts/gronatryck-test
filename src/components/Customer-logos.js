import React from "react";
import "../styles/CustomerCase.css"; // Importera CSS-filen för att styla komponenten

// Lista över logotyper som ska visas i sektionen
const logos = [
  "/img/decorative/Case-icons/bob_hund.png",
  "/img/decorative/Case-icons/fatta.png",
  "/img/decorative/Case-icons/images.png",
  "/img/decorative/Case-icons/nedladdning.png",
  "/img/decorative/Case-icons/riksgrans.png",
  "/img/decorative/Case-icons/Umea_kommun_RGB.png",
  "/img/decorative/Case-icons/gbg_st_rgb_sociala+medier_high.png",
  "/img/decorative/Case-icons/httpssthlm.agendajamlikhet.seimage8b1209f347ef4cb84f2e1d366858fe70a529cb32.png",
  "/img/decorative/Case-icons/pow-main-logo.svg",
];

const CustomerCases = () => {
  return (
    <div>
      <h1 className="section-heading heading-3">Andra arbeten</h1>{" "}
      {/* Rubrik för sektionen */}
      {/* Sektion för att visa logotyper */}
      <div className="customer-cases-text-containers">
        <div className="customer-logo-container">
          {/* Loopar igenom logotyperna och skapar en bild för varje */}
          {logos.map((logo, index) => (
            <div key={index} className="customer-logo-wrapper">
              <img
                src={logo} // Använder logotypens sökväg som källa
                alt={`Partner Logo ${index + 1}`} // Beskrivning för tillgänglighet
                className="customer-logo-image" // CSS-klass för styling
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerCases;

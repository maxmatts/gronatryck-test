import React from "react";
import "../styles/CustomerCase.css"; // Importera CSS-filen för att styla komponenten

// Lista över logotyper som ska visas i sektionen
const logos = [
  "/img/decorative/case-icons/bob_hund.png",
  "/img/decorative/case-icons/fatta.png",
  "/img/decorative/case-icons/images.png",
  "/img/decorative/case-icons/nedladdning.png",
  "/img/decorative/case-icons/riksgrans.png",
  "/img/decorative/case-icons/Umea_kommun_RGB.png",
  "/img/decorative/case-icons/gbg_st_rgb_sociala+medier_high.png",
  "/img/decorative/case-icons/httpssthlm.agendajamlikhet.seimage8b1209f347ef4cb84f2e1d366858fe70a529cb32.png",
  "/img/decorative/case-icons/pow-main-logo.svg",
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

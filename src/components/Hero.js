import { useState } from "react"; // Importera useState för att hantera komponentens tillstånd
import "../styles/hero.css"; // Importera CSS för hero-sektionen
import Button from "./Button"; // Importera Button-komponenten
import HeroDisplay from "./HeroDisplay.js"; // Importera HeroDisplay-komponenten

// Hero-komponenten
export default function Hero() {
  const [video, setVideo] = useState(true); // Hantera tillstånd för att visa video eller bild

  return (
    <section className="hero-section"> {/* Wrapper för hero-sektionen */}
      <div>
        <HeroDisplay media={video} /> {/* Visa media baserat på tillstånd */}
      </div>
      <div className="hero-content-container container"> {/* Innehåll i hero-sektionen */}
        <div className="hero-content">
          <span style={{ textTransform: "uppercase", fontWeight: "300" }}>
            Most Northern Official Stanley Stella Dealer
          </span>
          <h1 className="main-heading">Hållbart Tryck, Rättvis Framtid.</h1> {/* Huvudrubrik */}
          <p>
            Välkommen till Gröna Tryck – din pålitliga partner för hållbara och
            rättvisemärkta trycklösningar och profilkläder. Vi kombinerar modern
            teknik med miljömedvetenhet för att leverera högkvalitativa
            produkter, anpassade efter dina behov. Utforska vårt utbud och var
            med och bidra till en mer hållbar framtid.
          </p>
          <div style={{ display: "flex", gap: "1.6rem" }}> {/* Flexbox för knappar */}
            <Button
              to="/sortiment"
              content={"Utforska vårt sortiment"} // Text för första knappen
              className="main-btn" // Klass för styling
            />
            <Button
              to="/om-grona-tryck"
              content="Vår historia" // Text för andra knappen
              className="second-btn" // Klass för styling
            />
          </div>
        </div>
      </div>
    </section>
  );
}


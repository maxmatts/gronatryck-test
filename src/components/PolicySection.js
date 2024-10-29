
import React from "react";
import "../styles/FAQ.css"; 

const PolicySection = () => {
  return (
    <section className="faq-section" id="policy">
      <div className="faq-item">
        <h2 className="subheading-1">Dataskyddsfrågor</h2>
        <p className="main-body long">
          Vi på Gröna Tryck tar din personliga integritet på största allvar. Vi lagerhåller dina företag- eller personuppgifter du har uppgett för oss och sparar dessa för leveranser, samt fakturering...
        </p>
      </div>

      <div className="faq-item">
        <h2 className="subheading-1">Pris</h2>
        <p className="main-body long">
          Samtliga priser är styckepriser angivna exklusive moms och frakt. Priser avser att kund tillhandahåller tryckfärdigt digitalt underlag. Priserna inkluderar inte tryck eller eventuellt designarbete...
        </p>
      </div>

      <div className="faq-item">
        <h2 className="subheading-1">Leverans</h2>
        <p className="main-body long">
          De flesta produkter levereras normalt inom ca 3 veckor efter godkänt korrektur om inte annat överenskommit. Levererat antal faktureras. Expressproduktion kan i många fall erbjudas...
        </p>
      </div>

      <div className="faq-item">
        <h2 className="subheading-1">Frakt</h2>
        <p className="main-body long">
          Fraktkostnaden för en beställning debiteras beroende på försändelsens vikt och storlek och tillkommer efter leverans.
        </p>
      </div>

      <div className="faq-item">
        <h2 className="subheading-1">Betalningsvillkor Sverige</h2>
        <p className="main-body long">
          Mot faktura 15 dagar netto efter sedvanlig kreditkontroll om inte annat överenskommits...
        </p>
      </div>

      <div className="faq-item">
        <h2 className="subheading-1">Design</h2>
        <p className="main-body long">
          Vi erbjuder professionell design via vårt nätverk av grafiker. 1450kr/tim exkl. moms.
        </p>
      </div>

      <div className="faq-item">
        <h2 className="subheading-1">Korrektur och godkännande</h2>
        <p className="main-body long">
          Gröna Tryck tillhandahåller alltid ett digitalt korrektur för godkännande innan produkterna trycks...
        </p>
      </div>

      <div className="faq-item">
        <h2 className="subheading-1">Reklamation och retur</h2>
        <p className="main-body long">
          Retur mottages ej utan godkänd reklamation. Kontakta alltid ordermottagare innan retur. Reklamation ska ske inom 5 arbetsdagar efter mottagande av försändelsen...
        </p>
      </div>

      <div className="faq-item">
        <h2 className="subheading-1">Transportskada</h2>
        <p className="main-body long">
          Anmäl direkt till fraktbolaget om ni upptäcker att leveransen har skadats i transporten...
        </p>
      </div>

      <div className="faq-item">
        <h2 className="subheading-1">Tvist</h2>
        <p className="main-body long">
          Vid eventuell tvist har vi som policy att alltid följa Allmänna Reklamationsnämndens (ARNs) rekommendationer.
        </p>
      </div>
    </section>
  );
};

export default PolicySection;

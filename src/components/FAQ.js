// src/components/FAQ.js
import React from 'react'; // Importera React-biblioteket
import '../styles/FAQ.css'; // Importera CSS-filen för att styla FAQ-komponenten

const FAQ = () => {
  return (
    <section className="faq-section" id="faq"> {/* Sektion för FAQ med unik ID för navigering */}
      <h1 className="section-heading heading-3">FAQ</h1> {/* Rubrik för FAQ-sektionen */}

      {/* FAQ-fråga och svar */}
      <div className="faq-item">
        <h2 className="subheading-1">Kan man bara beställa en produkt?</h2> {/* Fråga */}
        <p className="main-body long">
          Det går inte att beställa färre än 25st produkter då vi använder ett bulksystem för att dra ner priserna till våra företagskunder. {/* Svar */}
        </p>
      </div>

      <div className="faq-item">
        <h2 className="subheading-1">Kan en privatperson beställa hos er?</h2>
        <p className="main-body long">
          Det går jättebra men eftersom vi arbetar med bulk måste beställningen överskrida 25st artiklar. {/* Svar */}
        </p>
      </div>
      
      <div className="faq-item">
        <h2 className="subheading-1">Hur går offertprocessen till?</h2>
        <p className="main-body long">
          Du kan enkelt lägga till produkter i din varukorg på vår hemsida. När du är klar med din val av varor sammanställs de automatiskt till en offert som du kan skicka till oss för granskning. 
          <br />
          Vi kommer att kontrollera din offert och återkomma med förslag på tryck och eventuella anpassningar. Om du är nöjd med förslaget skickar vi en korrektur orderbekräftelse. När du godkänner denna bekräftelse sätter vi igång med att beställa produkterna till tryckeriet, där de trycks, packas och levereras direkt till dig. {/* Svar */}
        </p>
      </div>

      <div className="faq-item">
        <h2 className="subheading-1">Hur kommer mitt färdiga tryck se ut?</h2>
        <p className="main-body long">
          – Vi skickar alltid en detaljerad korrektur med ditt tryck på vald produkt, antingen vet du själv exakt hur du vill ha det annars kommer vi gärna med förslag. I korrekturen ser du tydligt hur dina produkter kommer att se ut. {/* Svar */}
        </p>
      </div>

      <div className="faq-item">
        <h2 className="subheading-1">Kan man beställa prover?</h2>
        <p className="main-body long">
          – Självklart! Vi kan skicka ut upp till 3 prover per kund. Då vi själva inte har alla modeller, storlekar och färger på lager så skickas dessa ofta från våra klädmärkens huvudlager. Det gör att vi endast skickar prover från ett klädmärke. På våra produktbilder har vi en logotyp i högra hörnet och så länge dina prover har samma logotyp funkar det fint. 
          <br />
          Alla prover vi skickar ut kommer utan tryck, detta då förberedelserna inför 1 tryck kräver både mycket tid och resurser. Istället jobbar vi med tydliga korrekturer så du tydligt får se innan hur ditt tryck kommer se ut innan du godkänner ordern. {/* Svar */}
        </p>
      </div>

      <div className="faq-item">
        <h2 className="subheading-1">Vad är minimumbeställning och kan jag blanda storlekar och plaggfärger?</h2>
        <p className="main-body long">
          – Minimumbeställning är 25 tryck per motiv. Du kan blanda produkter inom samma tryckomgång, det betyder t.ex. att kan blanda 15 t-shirts, 5 huvtröjor och 5 sweatshirts (ej tygpåsar) så länge det är samma motiv. 
          <br />
          Storlekar, plaggfärger och modeller får blandas fritt, önskas extra färgbyte för tryckfärgen (t.ex. några plagg har vita tryck och några har svarta tryck) kostar det 170 SEK per färg. För brodyr är minimum 10 st brodyrer, även här kan du blanda produkter inom samma brodyromgång. {/* Svar */}
        </p>
      </div>

      <div className="faq-item">
        <h2 className="subheading-1">Vilka färger kan jag välja mellan och kan jag beställa kläder utan tryck?</h2>
        <p className="main-body long">
          – Hos oss kan du välja upp till 8 tryckfärger i hela PMS-färgskalan, oftast har du din logotyp i PMS och då går vi direkt efter den. Har du den i CMYK eller RGB så hjälper vi dig ta fram den färg som matchar bäst. Genom screentryckt rastertryck kan vi även trycka fotomotiv. Det går även bra att beställa våra produkter utan tryck om så önskas. {/* Svar */}
        </p>
      </div>

      <div className="faq-item">
        <h2 className="subheading-1">Vilken typ av tryck ska jag välja?</h2>
        <p className="main-body long">
          – Vi trycker både med PVC- och ftalatfritt screentryck (vilket är den absolut mest kvalitativa tekniken inom textiltryck) och brodyr. Vi brukar endast rekommendera brodyr till pikéer, jackor och mössor, för andra textilprodukter brukar screentryck passa bäst. För giveaways och andra hårda produkter trycker vi med ftalatfria tampotryck eller lasergravyr. {/* Svar */}
        </p>
      </div>

      <div className="faq-item">
        <h2 className="subheading-1">Vad är schablonkostnad och brodyrkort?</h2>
        <p className="main-body long">
          – En schablonkostnad tas ut för förberedelserna som krävs för att trycka varje färg. Kallas också ofta för ramkostnad eller stencilkostnad. Dessa kostar 350 SEK per färg. Brodyrkartor är en engångskostnad där man för hand bestämmer hur brodyrmaskinen lägger stygnen. 
          Denna kostar 825 SEK per motiv. {/* Svar */}
        </p>
      </div>

      <div className="faq-item">
        <h2 className="subheading-1">Jag tänkte lägga en order men är inte riktigt säker på vilka storlekar som blir bäst?</h2>
        <p className="main-body long">
          – Vi brukar ha en bra uppfattning om standardstorlekar beroende på användningsområde. Kontakta oss och säg vad plaggen ska användas till så hjälper vi dig. Gäller det t.ex. jackor kan det vara bra att maila runt till de anställda för att vara säker på vilka storlekar de behöver. För att få en bättre bild av storlekarna på våra produkter får du gärna läsa vår storleksguide inne på produktsidorna. {/* Svar */}
        </p>
      </div>
      
    </section>
  );
};

export default FAQ; // Exportera FAQ-komponenten för användning i andra delar av applikationen

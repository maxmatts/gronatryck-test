import React, { useState } from 'react'; 
import '../styles/FAQ.css';

const FAQ = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

 
  const faqs = [
    {
      question: "Kan man bara beställa en produkt?",
      answer: "Det går inte att beställa färre än 25st produkter då vi använder ett bulksystem för att dra ner priserna till våra företagskunder."
    },
    {
      question: "Kan en privatperson beställa hos er?",
      answer: "Det går jättebra men eftersom vi arbetar med bulk måste beställningen överskrida 25st artiklar."
    },
    {
      question: "Hur går offertprocessen till?",
      answer: "Du kan enkelt lägga till produkter i din varukorg på vår hemsida. När du är klar med din val av varor sammanställs de automatiskt till en offert som du kan skicka till oss för granskning. Vi kommer att kontrollera din offert och återkomma med förslag på tryck och eventuella anpassningar. Om du är nöjd med förslaget skickar vi en korrektur orderbekräftelse. När du godkänner denna bekräftelse sätter vi igång med att beställa produkterna till tryckeriet, där de trycks, packas och levereras direkt till dig."
    },
    {
      question: "Hur kommer mitt färdiga tryck se ut?",
      answer: "Vi skickar alltid en detaljerad korrektur med ditt tryck på vald produkt, antingen vet du själv exakt hur du vill ha det annars kommer vi gärna med förslag. I korrekturen ser du tydligt hur dina produkter kommer att se ut."
    },
    {
      question: "Kan man beställa prover?",
      answer: "Självklart! Vi kan skicka ut upp till 3 prover per kund. Då vi själva inte har alla modeller, storlekar och färger på lager så skickas dessa ofta från våra klädmärkens huvudlager. Det gör att vi endast skickar prover från ett klädmärke. På våra produktbilder har vi en logotyp i högra hörnet och så länge dina prover har samma logotyp funkar det fint. Alla prover vi skickar ut kommer utan tryck, detta då förberedelserna inför 1 tryck kräver både mycket tid och resurser. Istället jobbar vi med tydliga korrekturer så du tydligt får se innan hur ditt tryck kommer se ut innan du godkänner ordern."
    },
    {
      question: "Vad är minimumbeställning och kan jag blanda storlekar och plaggfärger?",
      answer: "Minimumbeställning är 25 tryck per motiv. Du kan blanda produkter inom samma tryckomgång, det betyder t.ex. att kan blanda 15 t-shirts, 5 huvtröjor och 5 sweatshirts (ej tygpåsar) så länge det är samma motiv. Storlekar, plaggfärger och modeller får blandas fritt, önskas extra färgbyte för tryckfärgen (t.ex. några plagg har vita tryck och några har svarta tryck) kostar det 170 SEK per färg. För brodyr är minimum 10 st brodyrer, även här kan du blanda produkter inom samma brodyromgång."
    },
    {
      question: "Vilka färger kan jag välja mellan och kan jag beställa kläder utan tryck?",
      answer: "Hos oss kan du välja upp till 8 tryckfärger i hela PMS-färgskalan, oftast har du din logotyp i PMS och då går vi direkt efter den. Har du den i CMYK eller RGB så hjälper vi dig ta fram den färg som matchar bäst. Genom screentryckt rastertryck kan vi även trycka fotomotiv. Det går även bra att beställa våra produkter utan tryck om så önskas."
    },
    {
      question: "Vilken typ av tryck ska jag välja?",
      answer: "Vi trycker både med PVC- och ftalatfritt screentryck (vilket är den absolut mest kvalitativa tekniken inom textiltryck) och brodyr. Vi brukar endast rekommendera brodyr till pikéer, jackor och mössor, för andra textilprodukter brukar screentryck passa bäst. För giveaways och andra hårda produkter trycker vi med ftalatfria tampotryck eller lasergravyr."
    },
    {
      question: "Vad är schablonkostnad och brodyrkort?",
      answer: "En schablonkostnad tas ut för förberedelserna som krävs för att trycka varje färg. Kallas också ofta för ramkostnad eller stencilkostnad. Dessa kostar 350 SEK per färg. Brodyrkartor är en engångskostnad där man för hand bestämmer hur brodyrmaskinen lägger stygnen. Denna kostar 825 SEK per motiv."
    },
    {
      question: "Jag tänkte lägga en order men är inte riktigt säker på vilka storlekar som blir bäst?",
      answer: "Vi brukar ha en bra uppfattning om standardstorlekar beroende på användningsområde. Kontakta oss och säg vad plaggen ska användas till så hjälper vi dig. Gäller det t.ex. jackor kan det vara bra att maila runt till de anställda för att vara säker på vilka storlekar de behöver. För att få en bättre bild av storlekarna på våra produkter får du gärna läsa vår storleksguide inne på produktsidorna."
    },
  ];

  return (
    <section className="faq-section" id="faq">
      <h1 className="section-heading heading-3">FAQ</h1> 


      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <h2 
            className={`subheading-1 ${openIndex === index ? 'active' : ''}`} 
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </h2>
          {openIndex === index && ( 
            <p className="main-body">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </section>
  );
};

export default FAQ; 

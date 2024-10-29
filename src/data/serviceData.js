// src/data/services.js
const services = [
  {
    serviceId: 's1',
    name: 'Egen infärgning utifrån profilfärger',
    description: `Infärgning av 100% bomullskläder med miljömärkt färg som tål industritvätt, t.ex. mössor, t-shirts, linnen och tygpåsar. Infärgning sker i Sverige vilket underlättar både för leveranstid och ur miljöperspektiv.`,
    subdescription: `Vi utgår ifrån dina profilfärger och matchar dem med färgskalan HEX. Minimum ligger på 15 kg textil vilket motsvarar något av följande:
    – 100 st t-shirts = ca 15 kg
    – 220 st tunna (150 g/m2) tygpåsar = ca 15 kg
    – 110 st tjocka (300 g/m2) tygpåsar = ca 15 kg`,
    price: null,
    images: {
      modelUrl: {
        basePath: "/img/informative/Services/matcha-klader-med-profilfarg-510x510 (1)",
        alt: "Matcha kläder",
      },
      additionalInfo: [

        { basePath: "/img/informative/Services/matcha-klader-med-profilfarg-510x510 (1)",
          alt: "Matcha kläder"},

        {
          basePath: "/img/informative/Services/infargning-av-klader-till-foretag-247x247",
          alt: "Custom dye process illustration",
        },

      
        {
          basePath: "/img/informative/Services/egen-farg-pa-klader-247x247",
          alt: "Environmental impact of eco-dyeing",
        },
        
      ],
    },
  },
  {
    serviceId: 's2',
    name: 'Egen webbshop',
    description: `Starta eget klädmärke? Vi hjälper dig gärna med att sätta upp en egen webbshop, komplett med betalningslösningar som Swish, Klarna och genom kontokort. Självklart utan annonser eller direktreklam.`,
    subdescription: `Detta ingår i vår webbshopspaket:
    – Design och layout utifrån din grafiska manual, önskemål eller t.ex. en referenssida du gillar
    – Produktbilder utifrån digitala Mockups
    – Produkttexter (miljömärkningar, tillverkningsland, tryckteknik m.m.)
    – Storleksguider med din logotyp
    – Lagernivåer, produktvikter samt portokostnader
    – Koppling till en befintlig domän
    – SSL certifikat för säker hemsida
    – Responsiv butiksdesign (mobilvänlig)
    – Google Analytics (besöksspårning och e-handelsspårning)
    – Färdig GDPR-policy

    Utöver kostnaden för att sätta upp din webbshop så tillkommer en månadskostnad på antingen:
    – 139 kr/mån ex. moms för en enkel webbshop
    – 499 kr/mån ex. moms för en avancerad webbshop.`,
    price: 3500,
    images: {
      modelUrl: {
        basePath: "/img/informative/Services/matcha-klader-med-profilfarg-510x510 (1)",
        alt: "illustration av hemsida",
      },
      additionalInfo: [
        {
          basePath: "/img/informative/Services/hjalp-med-enkel-webbshop-egen-butik-510x268",
        alt: "illustration av hemsida",
        },
        {
          basePath: "/img/informative/Services/man-exempel-enkel-webbshop-247x247",
          alt: "Webshop design process",
        },
        {
          basePath: "/img/informative/Services/monkeymind-exempel-enkel-webbshop-247x247",
          alt: "Payment solutions available",
        },
       
      ],
    },
  },
  {
    serviceId: 's3',
    name: 'Risk free deal',
    description: `Genom vår kampanj “Risk free deal” kan du erbjuda en hel kollektion eller en enkel t-shirt med ditt eget tryck. Helt utan den ekonomiska risken, behöva ha ett eget lager och springa till posten för att skicka paket. Perfekt till föreningen, bandet, konstnären eller organisationen och schysst mot miljön då vi tar bort risken med överproduktion. Ett riskfritt sätt för era medlemmar eller supportar att stötta.`,
    subdescription: `Ta upp förbeställningar via en webbshop eller Swish och när du är uppe i minst 25 st sätter vi igång produktionen.
    När kläderna är klara (mellan 3-4 veckor) skickar vi ut kläderna direkt till dina kunder.

    I vårt erbjudande ingår:
    – Mockup-bilder
    – Storleksguider
    – Produkttexter

    Du kan blanda plaggtyper och plaggfärger inom samma klädmärke (se logotypen uppe i högra hörnet på våra produktbilder).
    T.ex. kan vi trycka ditt motiv på huvtröjor, t-shirts, linnen, sweatshirts där vi totalt kommer upp i 25 st screentryck.

    Tryckpriset baserad på totalt antal tryck samt antal tryckfärger. Kontakta oss för offert på vad just din design skulle kosta. Vi kan trycka både på plaggets framsida, baksida, ärmar och insida nacke.

    Vi tipsar dig gärna om enkla webbshopslösningar eller hjälper dig ta fram en egen webshop.
    Kommer du inte upp i minst 25 förbeställningar avbryter vi ordern och du behöver inte betala något.`,
    price: null,
    images: {
      modelUrl: {
        basePath: "/img/informative/Services/matcha-klader-med-profilfarg-510x510 (1)",
        alt: "Trycka kläder utan risk",
      },
      additionalInfo: [
        {
          basePath: "/img/informative/Services/screentryck-exempel-2-247x247",
          alt: "Preorder process",
        },
        {
          basePath: "/img/informative/Services/screentryck-exempel-1-1-247x247",
          alt: "Display of collection",
        },
        {
          basePath: "/img/informative/Services/screentryck-nacke-247x247",
          alt: "Sustainability of risk-free deal",
        },
      ],
    },
  },
  {
    serviceId: 's4',
    name: 'Design & Grafisk form',
    description: `Vi erbjuder grafisk hjälp genom ett stort nätverk av grafiker. Vi diskuterar fram er önskade stil och matchar ihop er med den bäst lämpade.`,
    subdescription: `Genom ett stort nätverk av designers och grafiker kan vi erbjuda anpassade lösningar för er som behöver hjälp med era tryck. Vi kollar av vilken typ av design ni önskar och föreslår en passande grafiker. Det kan även vara retusch av ett redan designat tryck en av vära interna grafiker kan “fixa det sista”.

Detta gäller kan t.ex. vara:
– Illustrationer (om ni vill förmedla ert budskap, produkt eller tjänst genom en snygg illustration)
– Layout av banderoll
– Logotypdesign eller hel grafisk profil
– Custom-design av kollektioner

Minimumorder: 0,5 tim`,
    price: null,
    images: {
      modelUrl: {
        basePath: "/img/informative/Services/matcha-klader-med-profilfarg-510x510 (1)",
        alt: "Trycka kläder utan risk",
      },
     
    },
  },
];

export default services;

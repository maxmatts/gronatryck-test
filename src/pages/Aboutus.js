import React from "react";
import Button from "../components/Button"; // Importerar Button-komponenten
import "../styles/Aboutus.css"; // Importerar stilmallen för AboutUs-sidan
import FAQ from "../components/FAQ"; // Importerar FAQ-komponenten
import CustomerCases from "../components/Customer-logos"; // Importerar CustomerCases-komponenten

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section-2">
        <img
          src="/img/decorative/kaja-sariwating-ICOnjJTa3N4-unsplash.jpg" // Bakgrundsbild för hero-sektionen
          alt="Hero"
          className="hero-image"
          id="aboutus-hero-image"
        />

        <div className="hero-content-container container">
          <div className="hero-content">
            <h1 className="main-heading">Om Gröna Tryck</h1>
            <p>
              Gröna Tryck är din hållbara partner för profilprodukter och
              återförsäljare av ekologiska och miljövänliga varumärken. Vi
              strävar alltid efter att erbjuda produkter som är hållbara, både
              för ditt varumärke och för planeten.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Content Section */}
      <div className="aboutus-page container">
        <div id="aboutus-container" className="aboutus-page-container">
          <div className="about-text-containers">
            <div className="text-container main-body">
              <h1 className="section-heading heading-3">
                Norrländska problemlösare..
              </h1>
              <p>
                Vi är ett gäng norrländska problemlösare som brinner för tryck,
                och vi tycker det är en självklarhet att det görs på bästa sätt.
              </p>
              <p>
                Sedan starten 2008 som ett litet screentryckeri i en bunker har
                vi vuxit till att bli experter på helhetslösningar för ekologisk
                profilreklam. Det hela började med att vi tryckte kläder för
                andra märken. En av våra första kunder sålde babybodies, och vi
                blev nyfikna på vad som faktiskt fanns i textiltryckfärgerna.
              </p>
              <p>
                Det ledde oss till att byta ut hela vårt färglager till PVC- och
                ftalatfria alternativ redan 2009. Vi gjorde ingen reklam, men
                snart började kunder ringa och fråga om vi var de som tryckte
                med den gröna färgen – och så föddes namnet Gröna Tryck!
              </p>
              <p>
                Så, oavsett om du letar efter profilkläder, merchandise eller
                arbetskläder, är vi här för att hjälpa dig att göra medvetna val
                med stil. Häng med på vår resa mot en grönare framtid!
              </p>

              <p>
                <a href="/hallbara-material" className="link-text">
                  Läs mer om vårt hållbarhetsarbete →
                </a>
              </p>
            </div>

            {/* Images Container */}
            <div className="img-container">
              <div className="img-wrapper">
                <img
                  className="about-img"
                  src="/img/decorative/derek-owens-YCbJCM249KE-unsplash.jpg"
                  alt="Fejk bild på joel"
                />
                <h1 className="section-heading heading-3 stanley-heading">
                  Joel
                </h1>
              </div>

              <div className="img-wrapper">
                <img
                  className="about-img"
                  src="./img/decorative/alano-oliveira-3UknV3EZVBs-unsplash.jpg"
                  alt="Fejk bild på Josef"
                />
                <h1 className="section-heading heading-3 stanley-heading">
                  Josef
                </h1>
              </div>
            </div>
          </div>
          <h1 className="section-heading heading-3">I stolt samarbete med</h1>
          <div className="about-text-containers">
            <div className="logo-container">
              {/* Partner-logos */}
              <img
                src="./img/certificates/partners/atlantis-green-collection-logo-grona-tryck-2 2.png"
                alt="Partner Logo"
              />
              <img
                src="./img/certificates/partners/dedicated-logo-grona-tryck-2 2.png"
                alt="Partner Logo"
              />
              <img
                src="./img/certificates/partners/ecovero-logo-grona-tryck 2.png"
                alt="Partner Logo"
              />
              <img
                src="./img/certificates/partners/knowledge-cotton-apparel-logo-grona-tryck-2 2.png"
                alt="Partner Logo"
              />
              <img
                src="./img/certificates/partners/langbrett-logo-2048x844 2.png"
                alt="Partner Logo"
              />
              <img
                src="./img/certificates/partners/mantis-logo-grona-tryck 2.png"
                alt="Partner Logo"
              />
              <img
                src="./img/certificates/partners/neoblu-logo-2048x844 2.png"
                alt="Partner Logo"
              />
              <img
                src="./img/certificates/partners/regatta-honestly-made-logo-grona-tryck 2.png"
                alt="Partner Logo"
              />
              <img
                src="./img/certificates/partners/result-genuine-recycled-logo-grona-tryck 2.png"
                alt="Partner Logo"
              />
              <img
                src="./img/certificates/partners/royk-logo-grona-tryck 2.png"
                alt="Partner Logo"
              />
              <img
                src="./img/certificates/partners/russel-pure-organic-logo-grona-tryck 2.png"
                alt="Partner Logo"
              />
              <img
                src="./img/certificates/partners/salvage-logo-grona-tryck 2.png"
                alt="Partner Logo"
              />
              <img
                src="./img/certificates/partners/stst-logo-grona-tryck-2023 2.png"
                alt="Partner Logo"
              />
              <img
                src="./img/certificates/partners/tiger-logo-2048x844 2.png"
                alt="Partner Logo"
              />
              <img
                src="./img/certificates/partners/xd-logo-2048x844 2.png"
                alt="Partner Logo"
              />
              <img
                src="./img/certificates/partners/neutral-logo-grona-tryck 2.png"
                alt="Partner Logo"
              />
            </div>
          </div>
          <FAQ /> {/* Renderar FAQ-komponenten */}
          <CustomerCases /> {/* Renderar CustomerCases-komponenten */}
          <div className="btn-container">
            <Button
              to="/kundcase" // Länk till kundcase-sidan
              className="main-btn btn-container"
              content="Se mer om våra arbeten"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; // Exporterar AboutUs-komponenten

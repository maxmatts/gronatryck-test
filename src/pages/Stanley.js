import React, { useState } from "react";
import Button from "../components/Button";
import "../styles/Stanley.css";

const scrollCarousel = (direction) => {
  const carousel = document.querySelector(".image-carousel");
  const scrollAmount = direction === 1 ? 200 : -200;
  carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
};

const Stanley = () => {
  const [video, setVideo] = useState(true);

  return (
    <div>
      <section className="hero-section-2">
        <img
          src="/img/cover/Stanley_Stella_AW24_Timeless_Outerwear_Mix_01.jpg"
          alt="Hero"
          className="hero-image"
          id="aboutus-hero-image"
        />
        <div className="hero-content-container container">
          <div className="hero-content">
            <h1 className="main-heading">Stanley Stella</h1>
            <p>
              Sedan 2013 har Gröna Tryck och Stanley/Stella samarbetat för att
              erbjuda kläder som kombinerar stil, kvalitet och hållbarhet. Sedan
              2021 är vi stolta över att vara “Most Northern” Official Dealer
              och Selected Dealer Outerwear
            </p>
            <div style={{ display: "flex", gap: "1.6rem" }}>
              <Button
                to="/sortiment"
                content={"Se sortiment"}
                className="main-btn"
              />
            </div>
          </div>
        </div>
      </section>

      <div id="stanley-section" className="stanley">
        <div id="stanley-container" className="stanley-container">
          <div className="stanley-text-container">
            <div className="text-container main-body">
              <h1 className="section-heading heading-3">
                Hållbara Kläder i Toppklass
              </h1>
              <p className="main-body">
                Sedan 2013 har Gröna Tryck och Stanley/Stella samarbetat för att
                erbjuda kläder som kombinerar stil, kvalitet och hållbarhet.
                Sedan 2021 är vi stolta över att vara “Most Northern” Official
                Dealer och Selected Dealer Outerwear. Kläderna är noggrant
                tillverkade med en modern passform och en kvalitet som passar
                både företag, organisationer och designers. Stanely/Stella
                erbjuder ett stort utbud av säsongsanpassade färger och modeller
                samt möjlighet till egen customisering som exempelvis eget tryck
                i nacken
                <br /> <br />
                Varje plagg är producerat med miljön och rättvisa arbetsvillkor
                i åtanke och det finns transparens genom hela processen. Genom
                att använda ekologisk och återvunnen bomull, återvunnen
                polyester och Lenzing Modal, säkerställer de hållbara val i
                varje steg av produktionen. Dessutom genomgår deras fabriker
                oberoende kvalitets- och miljökontroller och följer
                Fairwear-principer.
                <br />
                <br />
                Med Stanley/Stella kan du som kund känna stolthet över både stil
                och hållbar produktion. Vi sätter sedan vår prägel på kläderna
                genom egen patch, brodyr eller screentryck och hjälper dig att
                matcha ditt varumärke med kläder av högsta kvalitet!
                <br />
                <br />
              </p>
            </div>

            <div className="img-container">
              <div className="img-wrapper">
                <img
                  className="stanley-img"
                  src="/img/decorative/Feature-Stanley-Stella-1.jpg"
                  alt="En grupp modeller på tre personer som bär Stanley Stella kläder"
                />
              </div>
            </div>
          </div>

          <section className="gallery-section stanley-container">
            <h1 className="section-heading heading-3 stanley-heading">
              Populära Produkter
            </h1>

            <div className="carousel-container">
              <button
                className="carousel-arrow left"
                onClick={() => scrollCarousel(-1)}
              >
                &lt;
              </button>

              <div className="image-carousel">
                <img
                  src="/img/informative/Connector 2.0_French Navy_Duo_Front_Main_0.jpg"
                  alt="Product 1"
                />
                <img
                  src="/img/informative/Liner_Desert Dust_Duo_Front_Main_0.jpg"
                  alt="Product 2"
                />
                <img
                  src="/img/informative/Radder 2.0 Vintage_G. Dyed Blue Stone_Duo_Front_Main_0.jpg"
                  alt="Product 3"
                />
                <img
                  src="/img/informative/Puffer Gilet_French Navy_Duo_Front_Main_0.jpg"
                  alt="Product 4"
                />
                <img
                  src="/img/informative/Connector 2.0_French Navy_Duo_Front_Main_0.jpg"
                  alt="Product 1"
                />
                <img
                  src="/img/informative/Liner_Desert Dust_Duo_Front_Main_0.jpg"
                  alt="Product 2"
                />
                <img
                  src="/img/informative/Radder 2.0 Vintage_G. Dyed Blue Stone_Duo_Front_Main_0.jpg"
                  alt="Product 3"
                />
                <img
                  src="/img/informative/Puffer Gilet_French Navy_Duo_Front_Main_0.jpg"
                  alt="Product 4"
                />
              </div>

              <button
                className="carousel-arrow right"
                onClick={() => scrollCarousel(1)}
              >
                &gt;
              </button>
            </div>
          </section>

          <section className="benefits-section stanley-container">
            <h1 className="section-heading heading-3 stanley-heading">
              Varför Välja Stanley/Stella?
            </h1>
            <div className="benefits-list">
              <div className="benefit-item">
                <h3 className="subheading-2">Miljövänliga Material</h3>
                <p className="main-body">Hållbara och ekologiska tyger.</p>
              </div>
              <div className="benefit-item">
                <h3 className="subheading-2">Customisering</h3>
                <p className="main-body">Egen design och tryck.</p>
              </div>
              <div className="benefit-item">
                <h3 className="subheading-2">Rättvisa Arbetsvillkor</h3>
                <p className="main-body">
                  Produktion under Fairwear-principer.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Stanley;

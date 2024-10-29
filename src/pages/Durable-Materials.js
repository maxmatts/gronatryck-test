import "../styles/Durable-Materials.css";
import React from "react";

const SustainabilityWork = () => {
  return (
    <div className="sustainability-page-container">
      <div className="cart-heading">
        <h1 className="heading-3 header-label">Hållbarhetsarbete</h1>
      </div>
      <div className="sustainability-work">
        {/* Each section now has a class that sets it to flex */}
        <section className="flex-section">
          <div className="flex main-body main-body-spacing">
            <h1 className="section-heading heading-3">
              Hållbarhet hos Gröna tryck
            </h1>
            <h5 className="subheading-2">
              Vår passion för en giftfri och hållbar framtid.
            </h5>
            <p>
              På Gröna Tryck är hållbarhet alltid den främsta prioriteringen. Vi
              strävar ständigt efter att minimera vår miljöpåverkan och
              säkerställa rättvisa arbetsvillkor genom hela produktionskedjan...
              Här kan du läsa mer om hur vi uppnår detta genom noggrant utvalda
              material och certifieringar, samt genom våra trycktekniker som
              ligger i framkant.
            </p>
          </div>

          <div className="main-body main-body-spacing">
            <h1 className="section-heading heading-3">
              Miljövänliga trycktekniker
            </h1>
            <h5 className="subheading-2">Pionjära inom ftalatfria färger</h5>
            <p>
              Gröna Tryck var först i Sverige att standardisera ftalatfri
              screenfärg för alla våra tryck, redan 2009...
            </p>
            <h3>Våra trycktekniker</h3>
            <ul>
              <li>
                <strong>Screentryck:</strong> En klassisk metod, nu med
                miljövänlig ftalatfri färg.
              </li>
              <li>
                <strong>Brodyr:</strong> För högkvalitativa och hållbara tryck
                på textilier.
              </li>
              <li>
                <strong>DTG (Direct-to-Garment):</strong> Direkttryck som
                möjliggör små upplagor och fullfärgstryck.
              </li>
              <li>
                <strong>DTF (Direct-to-Film):</strong> Ett flexibelt alternativ
                för detaljerade motiv.
              </li>
              <li>
                <strong>Tampotryck och lasergravyr:</strong> För tryck på hårda
                produkter som t.ex. muggar och pennor.
              </li>
            </ul>
          </div>
        </section>

        <section className="membership-section">
          <div className="margin">
          <div className="brush-background-2"></div> {/* Background div */}
          <div className="membership-form">
            <p className="membership-subheading main-body">
              Vi gör en del av våra tryck själva, medan andra utförs via
              noggrant utvalda samarbetspartners både i Sverige och utomlands.
            </p>
          </div>
          </div>
        </section>

        <section className="flex-section">
          <div className="main-body main-body-spacing">
            <h1 className="section-heading heading-3">
              Hållbara material och produktion
            </h1>
            <p className="main-body-spacing">
              Vi arbetar med en rad olika hållbara material för att säkerställa
              att våra profilkläder och produkter lever upp till de högsta
              miljökraven.
            </p>

            <div className="info-box-container">
              <div className="info-box">
                <h3>Ekologisk bomull</h3>
                <p>
                  Våra kläder är tillverkade av certifierad ekologisk bomull,
                  som odlas utan kemiska bekämpningsmedel eller konstgödsel.
                  Detta säkerställer att bomullen produceras på ett sätt som
                  skyddar både miljön och de människor som arbetar med
                  produktionen.
                </p>
              </div>
              <div className="info-box">
                <h3>Återvunna material</h3>
                <p>
                  Vi använder återvunnen PET (R-PET), som tillverkas från
                  återvunna plastflaskor, vilket minskar behovet av att
                  framställa nya råvaror och bidrar till minskad
                  plastanvändning.
                </p>
              </div>
              <div className="info-box">
                <h3>Innovativa blandmaterial</h3>
                <p>
                  Våra produkter innehåller även blandningar av ekologisk bomull
                  med hållbara material som Tencel, Modal och återvunnen ull,
                  vilket ger mjuka och slitstarka kläder samtidigt som de är
                  snälla mot miljön.
                </p>
              </div>
              <div className="info-box">
                <img
                  src="./img/decorative/DJI_20241010094358_0007_D-Enhanced-NR.jpg"
                  alt="Hållbara material"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="flex-section">
          <div className="main-body main-body-spacing">
            <h1 className="section-heading heading-3">
              Certifieringar och märkningar för en hållbar produktion
            </h1>
            <p>
              För att garantera att våra produkter är miljövänliga och rättvist
              producerade, arbetar vi endast med oberoende certifieringar och
              standarder.
            </p>

            <div className="certifications-container">
              <div className="certification-item">
                <div className="label-with-bg">
                  <h5 className="eco main-body">EU Ecolabel</h5>
                </div>
                <p>
                  Garanterar att produkterna har minimal påverkan på miljön
                  under hela livscykeln.
                </p>
              </div>

              <div className="certification-item">
                <div className="label-with-bg">
                  <h5 className="eco main-body">GRS</h5>
                </div>
                <h3>(Global Recycle Standard)</h3>
                <p>
                  Verifierar det återvunna innehållet i produkter och
                  säkerställer goda arbetsvillkor och minimal miljöpåverkan.
                </p>
              </div>

              <div className="certification-item">
                <div className="label-with-bg">
                  <h5 className="eco main-body">Fairtrade</h5>
                </div>
                <p>
                  Säkerställer att bomullen i våra produkter har producerats
                  till ett rättvist pris och under goda arbetsvillkor.
                </p>
              </div>

              <div className="certification-item">
                <div className="label-with-bg">
                  <h5 className="eco main-body">Bluesign</h5>
                </div>
                <p>
                  Kontrollerar varje steg i produktionskedjan för att minimera
                  användningen av skadliga kemikalier och säkerställa att
                  slutprodukten är säker och hållbar.
                </p>
              </div>

              <div className="certification-item">
                <div className="label-with-bg">
                  <h5 className="eco main-body">GOTS</h5>
                </div>
                <h3>(Global Organic Textile Standard)</h3>
                <p>
                  GOTS är en världsledande standard för kontroll av organiska
                  fibrer, där både ekologiska och sociala kriterier beaktas och
                  granskas av oberoende tredjepartscertifiering genom hela
                  textilförsörjningskedjan. Detta innebär att alla steg – från
                  odling till produktion och handel – uppfyller strikta krav.
                  Vårt certifikat: Gröna Tryck GOTS.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="certifications-container main-body main-body-spacing">
            <div>
              <h1 className="section-heading heading-3">
                Ansvar för rättvisa arbetsvillkor
              </h1>
              <p className="main-body-spacing">
                Vi arbetar inte bara för en hållbar miljö, utan också för
                rättvisa arbetsvillkor. Våra produkter är tillverkade i fabriker
                som uppfyller internationella standarder för rättvisa
                arbetsförhållanden.
              </p>
            </div>
            <div className="flex-section">
              <div className="certification-item-2">
                <img
                  src="/img/certificates/fairwear.svg"
                  alt="Fair Wear Foundation"
                  className="certification-container-img"
                />
                <h3>Fair Wear Foundation (FWF):</h3>
                <p>
                  Arbetar för att förbättra arbetsvillkoren inom textilindustrin
                  globalt.
                </p>
              </div>

              <div className="certification-item-2">
                <img
                  src="/img/certificates/amfori.svg"
                  alt="Amfori BSCI"
                  className="certification-container-img"
                />
                <h3>Amfori BSCI:</h3>
                <p>
                  Ett internationellt kontrollsystem som säkerställer goda
                  arbetsförhållanden och transparens i leverantörskedjan.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="certifications-container main-body main-body-spacing">
            <div className="certification-summary">
              <p>
                Vi säkerställer att våra leverantörer följer dessa standarder
                genom oberoende granskningar, krav på levnadslön och rätt till
                VAB, fria fackföreningar samt jämställdhetsarbete.
              </p>
            </div>

            <div className="main-body main-body-spacing">
              <p>
                Har du ytterligare frågor om vårt hållbarhetsarbete är du alltid
                välkommen att höra av dig – vi berättar gärna mer om hur vi
                arbetar för en grönare och rättvisare framtid.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SustainabilityWork;
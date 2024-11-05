import React from "react"; // Importera React-biblioteket
import { Link } from "react-router-dom"; // Importera Link för navigering inom applikationen
import "../styles/footer.css"; // Importera CSS-filen för att styla footer-komponenten

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo"> {/* Huvudcontainer för footern */}
      {/* Mobil- och surfplattans footer */}
      <div className="footer-mobile"> {/* Footer-layout för mobila enheter */}
        <div className="footer-links">
          <details>
            <summary>Kontakt</summary> {/* Utvecklingsbart avsnitt för kontaktinformation */}
            <div className="footer-text-container">
              <p>
                {/* <img className="footer-icon" src="/img/decorative/icons/phone_icon.svg" alt="Telefonikon" /> Telefonikon */}
                Tel: <a href="tel:+4690131340">+46 (0)90 13 13 40</a> {/* Länk för att ringa */}
              </p>
              <p>
                {/* <img className="footer-icon" src="/img/decorative/icons/mail_icon.svg" alt="Mailikon" /> Mailikon */}
                Email: <a href="mailto:kontakt@gronatryck.se">kontakt@gronatryck.se</a> {/* Länk för att skicka e-post */}
              </p>
              <p>
                {/* <img className="footer-icon-2"src="/img/decorative/icons/location_icon.svg" alt="Platsikon" /> Platsikon */}
                Adress: Västra Kyrkogatan 1B, 903 29 Umeå, Sverige {/* Adressinformation */}
              </p>
            </div>
          </details>
          <details>
            <summary>Hjälp</summary> {/* Utvecklingsbart avsnitt för hjälplänkar */}
            <div className="Page-links">
              <Link to="/FAQ">FAQ</Link> {/* Länkar till FAQ */}
              <Link to="/om-grona-tryck">Om oss</Link> {/* Länkar till information om företaget */}
              <Link to="/kopvillkor">Köpvillkor</Link> {/* Länkar till köpvillkor */}
              <Link to="/kontakt">Kontakt oss</Link> {/* Länkar till kontaktformulär */}
              <Link to="/om-grona-tryck">Jobba hos oss</Link> {/* Länkar till jobbannonser */}
            </div>
          </details>
        </div>
        <div className="social-media"> {/* Sektion för sociala medier */}
          <p>Vi finns även här</p>
          <div className="icons"> {/* Ikoncontainer för sociala medie-länkar */}
            <a
              href="https://www.facebook.com/gronatryck/?locale=sv_SE"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src="/img/decorative/icons/fb_icon_inverted.svg" alt="Facebook-ikon" /> {/* Facebook-ikon */}
            </a>
            <a
              href="https://www.linkedin.com/company/gronatryck/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src="/img/decorative/icons/li_icon_inverted.svg" alt="LinkedIn-ikon" /> {/* LinkedIn-ikon */}
            </a>
            <a
              href="https://www.youtube.com/@gronatryck508"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src="/img/decorative/icons/yt_icon_inverted.svg" alt="YouTube-ikon" /> {/* YouTube-ikon */}
            </a>
            <a
              href="https://www.instagram.com/gronatryck/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src="/img/decorative/icons/ig_icon_inverted.svg" alt="Instagram-ikon" /> {/* Instagram-ikon */}
            </a>
          </div>
        </div>
        <p className="copyright">Copyright © gröna tryck 2024</p> {/* Upphovsrättsinformation */}
      </div>

      {/* Desktop-footer */}
      <div className="footer-desktop"> {/* Footer-layout för stationära enheter */}
        <div className="footer-columns"> {/* Kolumnlayout för footern */}
          <div className="footer-logo">
            <img
              src="./img/decorative/gronatryck_logo_webb.png"
              alt="Gröna Tryck logo" // Alt-text för logo
            />
            <p>Tryck med omtanke <br /> - hållbarhet i varje detalj</p> {/* Tagline för företaget */}
          </div>
          <div className="footer-column">
            <h4>Kontakt</h4> {/* Rubrik för kontaktinformation */}
            <p>
              Tel: <a href="tel:+4690131340">+46 (0)90 13 13 40</a> {/* Länk för att ringa */}
            </p>
            <p>
              Email: <a href="mailto:kontakt@gronatryck.se">kontakt@gronatryck.se</a> {/* Länk för att skicka e-post */}
            </p>
            <p>Adress: Västra Kyrkogatan 1B, 903 29 Umeå, Sverige</p> {/* Adressinformation */}
          </div>
          <div className="footer-column">
            <h4>Hjälp</h4> {/* Rubrik för hjälplänkar */}
            <Link to="/FAQ">FAQ</Link> {/* Länkar till FAQ */}
            <Link to="/om-grona-tryck">Om oss</Link> {/* Länkar till information om företaget */}
            <Link to="/kopvillkor">Köpvillkor</Link> {/* Länkar till köpvillkor */}
            <Link to="/kontakt">Kontakt oss</Link> {/* Länkar till kontaktformulär */}
            <Link to="/om-grona-tryck">Jobba hos oss</Link> {/* Länkar till jobbannonser */}
          </div>
          <div className="footer-column">
            <h4>Vi finns även här</h4> {/* Rubrik för sociala medier */}
            <div className="icons"> {/* Ikoncontainer för sociala medie-länkar */}
              <a
                href="https://www.facebook.com/gronatryck/?locale=sv_SE"
                target="_blank"
                rel="noreferrer"
              >
                <img className="icon" src="/img/decorative/icons/fb_icon_inverted.svg" alt="Facebook-ikon" /> {/* Facebook-ikon */}
              </a>
              <a
                href="https://www.linkedin.com/company/gronatryck/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="icon" src="/img/decorative/icons/li_icon_inverted.svg" alt="LinkedIn-ikon" /> {/* LinkedIn-ikon */}
              </a>
              <a
                href="https://www.youtube.com/@gronatryck508"
                target="_blank"
                rel="noreferrer"
              >
                <img className="icon" src="/img/decorative/icons/yt_icon_inverted.svg" alt="YouTube-ikon" /> {/* YouTube-ikon */}
              </a>
              <a
                href="https://www.instagram.com/gronatryck/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="icon" src="/img/decorative/icons/ig_icon_inverted.svg" alt="Instagram-ikon" /> {/* Instagram-ikon */}
              </a>
            </div>
          </div>
        </div>
        <p className="copyright">Copyright © gröna tryck 2024</p> {/* Upphovsrättsinformation */}
      </div>
    </footer>
  );
};

export default Footer; // Exportera Footer-komponenten för användning i andra delar av applikationen


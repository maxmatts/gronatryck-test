import { Link } from "react-router-dom"; // Importerar Link från react-router-dom för navigering
import "../styles/navbar.css"; // Importerar CSS-stil för navigationslisten

// Definierar NavList-funktionen med props som argument
export default function NavList({ links, className, handleClick }) {
  return (
    <ul className={`nav ${className ? className : ""}`}> {/* Skapar en lista med klassnamnet 'nav' och eventuellt extra klassnamn */}
      {links.map((link) => { // Itererar över varje länk i links-arrayen
        return (
          <li key={link.textContent}> {/* Unik nyckel för varje listobjekt */}
            <Link
              className="nav-link" // Klassnamn för länken
              to={link.to} // Sätter destinationen för länken
              onClick={handleClick} // Anropar handleClick-funktionen när länken klickas
            >
              {link.textContent} {/* Visar textinnehållet för länken */}
              {link.icon && link.icon} {/* Om det finns en ikon, visa den */}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

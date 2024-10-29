import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function NavList({ links, className, handleClick }) {
  return (
    <ul className={`nav ${className ? className : ""}`}>
      {links.map((link) => {
        return (
          <li>
            <Link
              className="nav-link"
              key={link.textContent}
              to={link.to}
              onClick={handleClick}
            >
              {link.textContent}
              {link.icon && link.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

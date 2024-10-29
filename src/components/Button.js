import { Link } from "react-router-dom";
import "../styles/button.css";

// Button-komponenten används för att skapa en länk som ser ut som en knapp
function Button({ to, className, content }) {
  return (
    // Använder Link-komponenten för att navigera till den angivna sökvägen
    <Link to={to} className={className}>
      {/* Innehållet i knappen, som kan vara text eller annan komponent */}
      {content}
    </Link>
  );
}

export default Button;


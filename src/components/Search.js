// Importerar nödvändiga moduler och komponenter
import React, { useState } from "react";
import products from "../data/product.js"; // Importerar produktdata (ej använd i koden)
import { Link } from "react-router-dom"; // Importerar Link för navigering
import { LuSearch, LuX } from "react-icons/lu"; // Importerar ikoner för sökning och stängning
import "../styles/searchbar-filter.css"; // Importerar CSS för stilar
import IconButton from "./IconButton.js"; // Importerar en anpassad ikonknapp
import searchProducts from "../utils/search.js"; // Importerar sökfunktion
import slugify from "../utils/slugify.js"; // Importerar slugify-funktion för URL-vänliga strängar

export default function SearchBar({ handleClick, isActive }) {
  // State för att hålla sökord och sökresultat
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  // Funktion för att hantera sökningen
  const handleSearch = (e) => {
    const value = e.target.value; // Får värdet från sökfältet
    setSearchTerm(value); // Uppdaterar sökterm
    const searchResults = searchProducts(value); // Söker efter produkter
    setResults(searchResults); // Sätter resultaten i state
  };

  // Funktion för att återställa sökningen
  function resetSearch() {
    setSearchTerm(""); // Återställer sökterm
    setResults([]); // Rensar sökresultaten
    handleClick(); // Anropar handleClick för att stänga sökfältet
  }

  return (
    <div className={`search-container ${isActive ? "active" : ""}`}>
      <div className="container search-content">
        {/* Sökningsikonen */}
        <IconButton
          icon={<LuSearch />}
          handleClick={() => console.log("pressed search btn")}
        />
        {/* Sökfält */}
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch} // Anropar handleSearch vid förändring
          placeholder="Sök i vårt sortiment..."
        />
        {/* Stängningsikonen */}
        <IconButton icon={<LuX />} handleClick={handleClick} />
      </div>
      {/* Visar sökresultaten om det finns en sökterm */}

      <div className={`dropdown-list ${searchTerm.length > 0 ? "active" : ""}`}>
        <h2>Din sökning gav {results.length} resultat...</h2>
        <div className="container search-items-wrapper">
          {results.map((item) => (
            <Link
              className="h-card slide-in"
              key={item.name}
              to={`/produkter/${item.productId}/${slugify(item.name)}`} // Navigerar till produktens sida
              onClick={resetSearch} // Återställer sökningen vid klick
            >
              <div className="thumbnail">
                <img
                  src={`${item.images.variants[0].basePath}-small.jpg`} // Visar bild på produkten
                  alt={`${item.name} i färgen ${item.images.variants[0].colorName} `}
                />
              </div>
              <div>
                <h3>{item.name}</h3> {/* Produktnamn */}
                <p>
                  Finns i {item.images.variants.length}{" "}
                  {item.images.variants.length > 1 ? "färger" : "färg"}{" "}
                  {/* Antal färger */}
                </p>
                <p>
                  Pris från{" "}
                  <b>{item.priceTiers[item.priceTiers.length - 1].price},00 </b>
                  <small>SEK</small> {/* Visar priset */}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

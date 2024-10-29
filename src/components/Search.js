import React, { useState } from "react";
import products from "../data/product.js";
import { Link } from "react-router-dom";
import { LuSearch, LuX } from "react-icons/lu";
import "../styles/searchbar-filter.css"; // Se till att du har en CSS-fil för stilar
import IconButton from "./IconButton.js";
import searchProducts from "../utils/search.js";
import slugify from "../utils/slugify.js";

export default function SearchBar({ handleClick, isActive }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const searchResults = searchProducts(value);
    setResults(searchResults);
  };
  function resetSearch() {
    setSearchTerm("");
    setResults([]);
    handleClick();
  }

  return (
    <div className={`search-container ${isActive ? "active" : ""}`}>
      <form className="container search-content">
        <IconButton
          icon={<LuSearch />}
          handleClick={() => console.log("pressed search btn")}
        />
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Sök i vårt sortiment..."
        />
        <IconButton icon={<LuX />} handleClick={handleClick} />
      </form>
      {searchTerm.length > 0 && (
        <div className="dropdown-list">
          <h2>Din söknings gav {results.length} resultat...</h2>
          <div className="container search-items-wrapper">
            {results.map((item) => (
              <Link
                className="h-card slide-in"
                key={item.name}
                to={`/produkter/${item.productId}/${slugify(item.name)}`}
                onClick={resetSearch}
              >
                <div className="thumbnail">
                  <img
                    src={`${item.images.variants[0].basePath}-small.jpg`}
                    alt={`${item.name} i färgen ${item.images.variants[0].colorName} `}
                  />
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    Finns i {item.images.variants.length}{" "}
                    {item.images.variants.length > 1 ? "färger" : "färg"}
                  </p>
                  <p>
                    Pris från{" "}
                    <b>
                      {item.priceTiers[item.priceTiers.length - 1].price},00{" "}
                    </b>
                    <small>SEK</small>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

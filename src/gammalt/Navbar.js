import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaUserAlt,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import SearchBar from "./Search";
import "../styles/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSortimentOpen, setIsSortimentOpen] = useState(false); // State för Sortiment

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState);
  };

  const handleUserDropdownToggle = () => {
    setIsUserDropdownOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
  };

  const handleSortimentClick = () => {
    if (window.innerWidth <= 768) { // Kontrollera om fönstrets bredd är mindre än eller lika med 768px
      setIsSortimentOpen((prevState) => !prevState); // Toggle för Sortiment-menyn
    }
  };

  // Handle link clicks
  const handleLinkClick = (e) => {
    setIsMenuOpen(false); // Close menu when any other link is clicked
    setIsSortimentOpen(false); // Stäng Sortiment-menyn
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-brand">
          <Link to="/">
            <img
              src="/img/decorative/logotyp_horizontell.png"
              alt="Gröna Tryck"
              className="navbar-logo"
            />
          </Link>
        </div>
        <ul className="navbar-links">
          {/* Sortiment Button */}
          <li className="sortiment-dropdown">
            <button className="nav-link" onClick={handleSortimentClick}>
              Sortiment
            </button>
            {isSortimentOpen && window.innerWidth <= 768 && ( // Kontrollera att det är en mobil enhet
              <ul className="dropdown-menu">
                <li>
                  <Link to="/kategori1" className="dropdown-item" onClick={handleLinkClick}>
                    Kategori 1
                  </Link>
                </li>
                <li>
                  <Link to="/kategori2" className="dropdown-item" onClick={handleLinkClick}>
                    Kategori 2
                  </Link>
                </li>
                <li>
                  <Link to="/kategori3" className="dropdown-item" onClick={handleLinkClick}>
                    Kategori 3
                  </Link>
                </li>
                <li>
                  <Link to="/kategori4" className="dropdown-item" onClick={handleLinkClick}>
                    Kategori 4
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/services" className="nav-link" onClick={handleLinkClick}>
              Tjänster
            </Link>
          </li>
          <li>
            <Link to="/stanley-stella" className="nav-link" onClick={handleLinkClick}>
              Stanley Stella
            </Link>
          </li>
          <li>
            <Link to="/hallbara-material" className="nav-link" onClick={handleLinkClick}>
              Hållbara Material
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="nav-link" onClick={handleLinkClick}>
              Om Gröna Tryck
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link" onClick={handleLinkClick}>
              För Återförsäljare
            </Link>
          </li>
          <li>
            <Link to="/kontakt" className="nav-link" onClick={handleLinkClick}>
              Kontakt
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link" onClick={handleLinkClick}>
              Mina sidor
            </Link>
          </li>
        </ul>

        <div className="navbar-icons">
          <Link to="/cart" className="icon cart-icon" onClick={handleLinkClick}>
            <FaShoppingCart />
          </Link>
          <div
            className="icon user-icon"
            onMouseEnter={handleUserDropdownToggle}
            onMouseLeave={handleUserDropdownToggle}
          >
            <FaUserAlt />
            {isUserDropdownOpen && (
              <ul className="user-dropdown">
                {loggedInUser ? (
                  <>
                    <li>
                      <Link to="/customer" className="nav-link" onClick={handleLinkClick}>
                        Profil
                      </Link>
                    </li>
                    <li onClick={handleLogout} className="nav-link">
                      Logga ut
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/login" className="nav-link" onClick={handleLinkClick}>
                        Logga in
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" className="nav-link" onClick={handleLinkClick}>
                        Registrera dig
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            )}
          </div>

          <button onClick={toggleSearch} className="icon search-icon">
            <FaSearch />
          </button>

          <button onClick={toggleMenu} className="menu-toggle">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="navbar-search">
          <SearchBar />
          <button className="close-search" onClick={toggleSearch}>
            <FaTimes />
          </button>
        </div>
      )}

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="navbar-links-mobile navbar-text">
          <li>
            <Link to="/" className="nav-link" onClick={handleLinkClick}>
              Sortiment
            </Link>
          </li>
          <li>
            <Link to="/produkter" className="nav-link" onClick={handleLinkClick}>
              Produkter
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav-link" onClick={handleLinkClick}>
              Tjänster
            </Link>
          </li>
          <li>
            <Link to="/stanley-stella" className="nav-link" onClick={handleLinkClick}>
              Stanley Stella
            </Link>
          </li>
          <li>
            <Link to="/hallbara-material" className="nav-link" onClick={handleLinkClick}>
              Hållbara Material
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="nav-link" onClick={handleLinkClick}>
              Om Gröna Tryck
            </Link>
          </li>
          <li>
            <Link to="/resells" className="nav-link" onClick={handleLinkClick}>
              För Återförsäljare
            </Link>
          </li>
          <li>
            <Link to="/kontakt" className="nav-link" onClick={handleLinkClick}>
              Kontakt
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link" onClick={handleLinkClick}>
              Mina sidor
            </Link>
          </li>
          <li className="contact-info">
            <p>
              Ring oss på: <a href="tel:+4690131340">+46 (0)90 13 13 40</a>
            </p>
            <p>
              Maila oss på: <a href="mailto:kontakt@gronatryck.se">kontakt@gronatryck.se</a>
            </p>
          </li>
        </ul>
      </div>

      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </nav>
  );
};

export default Navbar;


import React, { useState, useEffect } from 'react';
import '../styles/scrolltotop.css'; // Importerar CSS separat

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Hantera scrolling
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scrolla till toppen när användaren klickar på knappen
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Lägg till en event listener för att upptäcka scroll
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`sticky-btn ${isVisible ? 'show' : ''}`}
      title="Till toppen"
    >
       ↑
    </button>
  );
};

export default ScrollToTopButton;

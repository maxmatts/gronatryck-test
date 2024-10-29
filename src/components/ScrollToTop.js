// Importerar React och nödvändiga hooks
import React, { useState, useEffect } from 'react';
// Importerar CSS för komponenten
import '../styles/scrolltotop.css'; 

const ScrollToTopButton = () => {
  // State för att hålla reda på om knappen ska vara synlig
  const [isVisible, setIsVisible] = useState(false);

  // Funktion för att hantera scrollning och synlighet av knappen
  const toggleVisibility = () => {
    // Om scroll-positionen är mer än 300 pixlar från toppen, gör knappen synlig
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Funktion för att scrolla till toppen av sidan
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Anger att scrolla till toppen
      behavior: 'smooth', // Gör scrollningen smidig
    });
  };

  // Använda useEffect för att lägga till event listener för scroll
  useEffect(() => {
    // Lägg till event listener för att upptäcka scroll
    window.addEventListener('scroll', toggleVisibility);
    // Rensa upp event listenern när komponenten avmonteras
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // Tom array betyder att effekten bara körs en gång vid montering

  return (
    <button
      onClick={scrollToTop} // Anropar scrollToTop när knappen klickas
      className={`sticky-btn ${isVisible ? 'show' : ''}`} // Dynamisk klass för synlighet
      title="Till toppen" // Tooltip som visar när man hovrar över knappen
    >
       ↑ {/* Knappens ikon (uppåtpil) */}
    </button>
  );
};

// Exporterar ScrollToTopButton-komponenten för användning i andra delar av appen
export default ScrollToTopButton;


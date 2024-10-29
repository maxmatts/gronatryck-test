// Importerar useEffect för att hantera livscykelmetoder och useLocation för att få information om URL:en
import { useEffect } from "react"; 
import { useLocation } from "react-router-dom"; // Importerar useLocation för att få tillgång till aktuell URL

// Definierar PageScroller-funktionen
const PageScroller = () => {
  const { pathname } = useLocation(); // Hämtar den aktuella sökvägen (URL) från useLocation

  // useEffect hook som körs varje gång pathname ändras
  useEffect(() => {
    window.scrollTo(0, 0); // Scrollar till toppen av sidan
  }, [pathname]); // Effektens beroende är pathname

  return null; // Komponent återger inget visuellt innehåll
};

// Exporterar PageScroller-komponenten för användning i andra delar av appen
export default PageScroller;


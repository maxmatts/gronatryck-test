import React from "react"; // Importerar React-biblioteket

// Funktionell komponent som heter HeroDisplay
function HeroDisplay({ media }) {
  // Kollar om media är sant (true)
  if (media) {
    return (
      // Returnerar en video om media är true
      <video
        autoPlay // Spelar upp videon automatiskt
        muted // Stänger av ljudet
        loop // Spelar videon i en oändlig loop
        playsInline // Tillåter videon att spelas inline (inte i helskärm)
        className="hero-video" // CSS-klass för styling
        id="hero-video" // Unikt id för videoelementet
        style={{ display: "block" }} // Ställer in stilen för videoelementet
      >
        <source
          src="/videos/STST_AW24_CAMPAIGN_VIDEO_NO_TEXT.mp4" // Källa för videofilen
          type="video/mp4" // Typ av videoformat
        />
        Your browser does not support the video tag. // Meddelande för webbläsare som inte stödjer video
      </video>
      
    );
  } else {
    return (
      // Returnerar en bild om media är false
      <img
        src="/img/cover/Stanley_Stella_AW24_Timeless_Outerwear_Mix_01.jpg" // Källa för bildfilen
        alt="Hero" // Alternativtext för bilden
        className="hero-image" // CSS-klass för styling
        id="hero-image" // Unikt id för bildelementet
      />
    );
  }
}

// Exporterar HeroDisplay-komponenten så att den kan användas i andra filer
export default HeroDisplay;


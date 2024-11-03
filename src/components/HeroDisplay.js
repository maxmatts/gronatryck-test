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
        Your browser does not support the video tag. // Meddelande för
        webbläsare som inte stödjer video
      </video>
    );
  } else {
    return (
      // Returnerar en bild om media är false
      <picture
        className="hero-image" // CSS-klass för styling
        id="hero-image"
      >
        <source
          srcSet="/img/decorative/cover/Stanley_Stella_AW24_Timeless_Outwear_Mix_01_hd.webp 600w, /img/decorative/cover/Stanley_Stella_AW24_Timeless_Outwear_Mix_01_fullhd.webp 1200w"
          type="image/webp"
        />
        <source
          srcSet="/img/decorative/cover/Stanley_Stella_AW24_Timeless_Outwear_Mix_01_hd.png 600w, /img/decorative/cover/Stanley_Stella_AW24_Timeless_Outwear_Mix_01_fullhd.png 1200w"
          type="image/png"
        />
        {/* Fallback bild om ingen av ovanstående källor kan användas */}
        <img
          src="/img/decorative/cover/Stanley_Stella_AW24_Timeless_Outwear_Mix_01_fullhd.png" // Fallback
          alt="En grupp modeller som bär Stanley Stella-märkta utomhuskläder" // Alt-text för tillgänglighet
          loading="lazy" // Laddar bilden lat för att förbättra prestanda
          className="hero-img"
          width="1920"
          height="1080"
        />
      </picture>
    );
  }
}

// Exporterar HeroDisplay-komponenten så att den kan användas i andra filer
export default HeroDisplay;

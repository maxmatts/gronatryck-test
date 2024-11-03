import React from "react";

// Exporterar standardfunktionell komponent som heter ImageThumbnail
export default function ImageThumbnail({ id, alt, path, handleClick }) {
  return (
    <div className="thumbnail-image">
      {/* Picture-elementet används för att definiera olika bildkällor för responsiv design */}
      <picture
        onClick={() => {
          // Anropar handleClick-funktionen med id när bilden klickas
          handleClick(id);
        }}
      >
        {/* Definierar webp-källor med olika storlekar för bildens responsivitet */}
        <source
          srcSet={`${path}-small.webp 600w`}
          type="image/webp"
          sizes="200px"
        />
        {/* Definierar jpeg-källor med olika storlekar för bildens responsivitet */}
        <source srcSet={`${path}-small.jpg 600w`} type="image/jpeg" />
        {/* Fallback bild om ingen av ovanstående källor kan användas */}
        <img
          src={`${path}-small.jpg`} // Fallback
          alt={alt} // Alt-text för tillgänglighet
          loading="lazy" // Laddar bilden lat för att förbättra prestanda
        />
      </picture>
    </div>
  );
}

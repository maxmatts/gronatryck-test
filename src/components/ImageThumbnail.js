import React from "react";

// Exporterar standardfunktionell komponent som heter ImageThumbnail
export default function ImageThumbnail({ id, alt, path, handleClick }) {
  return (
    <figure className="thumbnail-image">
      {/* Picture-elementet används för att definiera olika bildkällor för responsiv design */}
      <picture
        onClick={() => {
          // Anropar handleClick-funktionen med id när bilden klickas
          handleClick(id);
        }}
      >
        {/* Definierar webp-källor med olika storlekar för bildens responsivitet */}
        <source
          srcSet={`${path}-small.webp 600w, ${path}-medium.webp 1024w, ${path}.webp 1600w`}
          type="image/webp"
          sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
        />
        {/* Definierar jpeg-källor med olika storlekar för bildens responsivitet */}
        <source
          srcSet={`${path}-small.jpg 600w, ${path}-medium.jpg 1024w, ${path}.jpg 1600w`}
          type="image/jpeg"
          sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
        />
        {/* Fallback bild om ingen av ovanstående källor kan användas */}
        <img
          src={`${path}.jpg`} // Fallback
          alt={alt} // Alt-text för tillgänglighet
          loading="lazy" // Laddar bilden lat för att förbättra prestanda
        />
      </picture>
    </figure>
  );
}



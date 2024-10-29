// Importerar nödvändiga moduler och komponenter
import React, { useState, useEffect, useMemo } from "react";
import ImageThumbnail from "./ImageThumbnail";
import "../styles/productdetail.css";

// Definierar ProductGallery-komponenten som tar emot props: images
export default function ProductGallery({ images }) {
  // State för att hantera huvudbildens väg och alt-text
  const [mainImage, setMainImage] = useState({
    path: "",
    alt: "",
  });

  // Memoize combinedImages för att undvika att återskapa det vid varje rendering
  const combinedImages = useMemo(
    () => [
      {
        basePath: images.modelUrl.basePath.replace(/\s/g, "%20"), // Ersätter mellanslag i basvägen
        alt: images.modelUrl.alt, // Alt-text för modellen
      },
      ...images.variants.map((variant) => ({
        basePath: variant.basePath.replace(/\s/g, "%20"), // Ersätter mellanslag för varje variant
        alt: `${variant.colorName} färg av produkten`, // Specifik alt-text för varje variant
      })),
      {
        basePath: images.sizeGuideUrl.basePath.replace(/\s/g, "%20"), // Basväg för storleksguide
        alt: images.sizeGuideUrl.alt, // Alt-text för storleksguiden
      },
    ],
    [images] // Återkalla memo när images förändras
  );

  // Effekt för att sätta huvudbilden till storleksguidens bild när komponenten laddas
  useEffect(() => {
    if (combinedImages[2]) {
      setMainImage({
        path: combinedImages[2].basePath, // Sätter huvudbildens väg
        alt: combinedImages[2].alt, // Sätter alt-text för huvudbilden
      });
    }
  }, [combinedImages]); // Effekt körs om combinedImages förändras

  // Funktion för att ändra huvudbilden när en thumbnail klickas
  function changeMainImage(id) {
    setMainImage({
      path: combinedImages[id].basePath, // Sätter ny väg för huvudbilden
      alt: combinedImages[id].alt, // Sätter ny alt-text för huvudbilden
    });
  }

  return (
    <div className="product-gallery">
      {/* Huvudbildens figur */}
      <figure className="main-image">
        <picture>
          {/* WebP-källa för huvudbilden */}
          <source
            srcSet={`${mainImage.path}-small.webp 600w, ${mainImage.path}-medium.webp 1024w, ${mainImage.path}.webp 1600w`}
            type="image/webp"
            sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
          />
          {/* JPEG-källa för huvudbilden */}
          <source
            srcSet={`${mainImage.path}-small.jpg 600w, ${mainImage.path}-medium.jpg 1024w, ${mainImage.path}.jpg 1600w`}
            type="image/jpeg" // Här borde det vara 'image/jpeg' istället för 'image/webp'
            sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
          />
          {/* Fallback-bild */}
          <img
            src={`${mainImage.path}.jpg`} // Fallback
            alt={mainImage.alt} // Alt-text för bilden
            loading="lazy" // Laddar bilden lat
          />
        </picture>
      </figure>
      {/* Thumbnail-carousel för miniatyrbilder */}
      <div className="thumbnail-carousel">
        <div className="thumbnail-images">
          {/* Renderar varje miniatyrbild */}
          {combinedImages.map((image, index) => (
            <ImageThumbnail
              key={image.alt} // Unikt nyckelvärde för varje bild
              id={index} // Identifierare för att ändra huvudbilden
              alt={image.alt} // Alt-text för miniatyrbilden
              path={image.basePath} // Väg till miniatyrbilden
              handleClick={changeMainImage} // Funktion för att ändra huvudbilden
            />
          ))}
        </div>
      </div>
    </div>
  );
}

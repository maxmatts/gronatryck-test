import React, { useState, useEffect, useMemo } from "react";
import ImageThumbnail from "./ImageThumbnail";
import "../styles/productdetail.css";

export default function ProductGallery({ images }) {
  const [mainImage, setMainImage] = useState({
    path: "",
    alt: "",
  });

  // Memoize combinedImages to avoid recreating on every render
  const combinedImages = useMemo(
    () => [
      {
        basePath: images.modelUrl.basePath.replace(/\s/g, "%20"),
        alt: images.modelUrl.alt,
      },
      ...images.variants.map((variant) => ({
        basePath: variant.basePath.replace(/\s/g, "%20"),
        alt: `${variant.colorName} färg av produkten`,
      })),
      {
        basePath: images.sizeGuideUrl.basePath.replace(/\s/g, "%20"),
        alt: images.sizeGuideUrl.alt,
      },
    ],
    [images]
  ); 

 
  useEffect(() => {
    if (combinedImages[2]) {
      
      setMainImage({
        path: combinedImages[2].basePath,
        alt: combinedImages[2].alt,
      });
    }
  }, [combinedImages]); 

  function changeMainImage(id) {
    setMainImage({
      path: combinedImages[id].basePath,
      alt: combinedImages[id].alt,
    });
  }

  return (
    <div className="product-gallery">
      <figure className="main-image">
        <picture>
          <source
            srcSet={`${mainImage.path}-small.webp 600w, ${mainImage.path}-medium.webp 1024w, ${mainImage.path}.webp 1600w`}
            type="image/webp"
            sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
          />
          <source
            srcSet={`${mainImage.path}-small.jpg 600w, ${mainImage.path}-medium.jpg 1024w, ${mainImage.path}.jpg 1600w`}
            type="image/webp"
            sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
          />
          <img
            src={`${mainImage.path}.jpg`} // Fallback
            alt={mainImage.alt}
            loading="lazy"
          />
        </picture>
      </figure>
      <div className="thumbnail-carousel">
        <div className="thumbnail-images">
          {combinedImages.map((image, index) => (
            <ImageThumbnail
              key={image.alt}
              id={index}
              alt={image.alt}
              path={image.basePath}
              handleClick={changeMainImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

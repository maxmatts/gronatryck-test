// Import necessary modules and components
import React, { useState, useEffect, useMemo } from "react";
import ImageThumbnail from "./ImageThumbnail";
import "../styles/productdetail.css";

export default function ProductGallery({ images }) {
  const [mainImage, setMainImage] = useState({
    path: "",
    alt: "",
  });

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

  const scrollCarousel = (direction) => {
    const carousel = document.querySelector(".thumbnail-images");
    const scrollAmount = direction === 1 ? 200 : -200;
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    const carousel = document.querySelector(".thumbnail-images");
    const leftArrow = document.querySelector(".carousel-arrow.left");
    const rightArrow = document.querySelector(".carousel-arrow.right");

    if (carousel.scrollWidth <= carousel.clientWidth) {
      leftArrow.style.display = "none";
      rightArrow.style.display = "none";
    } else {
      leftArrow.style.display = "block";
      rightArrow.style.display = "block";
    }
  }, [combinedImages]);

  return (
    <div className="product-gallery">
      <figure className="main-image">
        <picture>
          <source
            srcSet={`${mainImage.path}-small.webp 600w, ${mainImage.path}-medium.webp 1024w, ${mainImage.path}.webp 1600w`}
            type="image/webp"
          />

          <source
            srcSet={`${mainImage.path}-small.jpg 600w, ${mainImage.path}-medium.jpg 1024w, ${mainImage.path}.jpg 1600w`}
            type="image/jpeg"
          />

          <img
            src={`${mainImage.path}.jpg`}
            alt={mainImage.alt}
            loading="lazy"
          />
        </picture>
      </figure>

      <div className="carousel-container">
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

        <button
          className="carousel-arrow left"
          onClick={() => scrollCarousel(-1)}
        >
          &lt;
        </button>
        <button
          className="carousel-arrow right"
          onClick={() => scrollCarousel(1)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

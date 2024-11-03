import { Link } from "react-router-dom";
import "../styles/searchbar-filter.css";
import slugify from "../utils/slugify";

// Card-komponenten används för att visa en produkt i kortformat
function Card({
  id,
  name,
  category,
  modelImage,
  firstVariantImage,
  minPrice,
  maxPrice,
  sizeVariantsCount,
  variantsCount,
  colorCodes,
}) {
  // Ersätter mellanslag i sökvägen med %20 för att skapa en korrekt URL
  const path = modelImage.basePath.replace(/\s/g, "%20");

  // Gör samma sak för den första variantbildens sökväg
  const variantPath = firstVariantImage.replace(/\s/g, "%20");

  return (
    <article className="card">
      {/* Länk till produktens detaljer med id och slugifierat namn */}
      <Link to={`/produkter/${id}/${slugify(name)}`}>
        <figure className="card-image">
          {/* Standardbild för produkten */}
          <picture className="default-image">
            <source
              srcSet={`${path}-small.webp 600w, ${path}-medium.webp 1024w`}
              type="image/webp"
            />
            <source
              srcSet={`${path}-small.jpg 600w, ${path}-medium.jpg 1024w`}
              type="image/jpeg"
            />
            <img
              src={`${path}-medium.jpg`} // Fallback-bild om inget annat kan laddas
              alt={modelImage.alt} // Beskrivande text för bilden
              loading="lazy" // Låt bilden laddas senare för att förbättra prestanda
            />
          </picture>
          {/* Hoverbild för produkten */}
          <picture className="hover-image">
            <source
              srcSet={`${variantPath}-small.jpg 600w, ${variantPath}-medium.webp 1024w`}
              type="image/webp"
            />
            <source
              srcSet={`${variantPath}-small.jpg 600w, ${variantPath}-medium.jpg 1024w`}
              type="image/jpeg"
            />
            <img
              src={`${path}-medium.jpg`} // Fallback-bild
              alt={name} // Beskrivande text för hoverbilden
              loading="lazy"
            />
          </picture>
        </figure>
      </Link>
      <div className="card-content">
        <header className="card-header">
          <p className="card-category info-text">{category}</p>
          {/* Länk till produktens namn med slugifierad URL */}
          <Link to={`/produkter/${id}/${slugify(name)}`}>
            <h2 className="card-name main-body">{name}</h2>
          </Link>
        </header>

        <div className="card-footer">
          <p className="main-body">{sizeVariantsCount} olika storlekar</p>
          <div style={{ display: "flex", alignItems: "center", gap: ".8rem" }}>
            {/* Färgrutor för produktens färger */}
            <span
              className="circle-color"
              style={{ backgroundColor: colorCodes[0] }}
            ></span>
            <span
              className="circle-color"
              style={{ backgroundColor: colorCodes[1] }}
            ></span>
            <p className="main-body">
              {" "}
              + {variantsCount - 2} {variantsCount - 2 > 1 ? "färger" : "färg"}{" "}
              till
            </p>
          </div>
        </div>

        <section className="card-info">
          <p className="card-price .subheading-2">Från {minPrice},00 SEK</p>
        </section>
      </div>
    </article>
  );
}

export default Card;

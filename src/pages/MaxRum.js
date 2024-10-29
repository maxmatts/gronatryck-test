import { useParams } from "react-router-dom";
import products from "../data/productnew";
import CardMax from "../components/CardsMax.js";
import Breadcrumb from "../components/Breadcrumb.js";
import { LuListFilter, LuRotateCcw, LuChevronDown } from "react-icons/lu";

import "../styles/card.css";
import { useState, useEffect } from "react";

export default function Max() {
  const { category } = useParams();
  const [title, setTitle] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const [allColors, setAllColors] = useState([]);

  useEffect(() => {
    // Populate unique colors for all products
    const colorSet = new Set();
    const uniqueColors = [];

    products.forEach((product) => {
      product.variants.forEach((variant) => {
        const colorKey = `${variant.colorName}-${variant.colorCode}`;
        if (!colorSet.has(colorKey)) {
          colorSet.add(colorKey);
          uniqueColors.push({
            colorName: variant.colorName || "Unknown Color",
            colorCode: variant.colorCode || "#000000",
          });
        }
      });
    });

    setAllColors(uniqueColors); // Set unique colors for all products
  }, [products]);
  /* FILTER */
  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (category && typeof category === "string") {
      setTitle(category);
      filtered = filtered.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
    } else {
      setTitle("Alla produkter");
    }

    // Filter by selected color
    if (selectedColor) {
      filtered = filtered.filter((product) =>
        product.variants.some((variant) => variant.colorCode === selectedColor)
      );
    }

    // Filter by selected size
    if (selectedSize) {
      filtered = filtered.filter((product) =>
        product.sizeVariants.includes(selectedSize)
      );
    }

    // Filter by selected brand
    if (selectedBrand) {
      filtered = filtered.filter(
        (product) => product.brand.toLowerCase() === selectedBrand.toLowerCase()
      );
    }

    // Apply sorting logic
    if (sortOption === "Lägsta pris") {
      filtered = filtered.sort(
        (a, b) =>
          Math.min(...a.priceTiers.map((tier) => tier.price)) -
          Math.min(...b.priceTiers.map((tier) => tier.price))
      );
    } else if (sortOption === "Högsta pris") {
      filtered = filtered.sort(
        (a, b) =>
          Math.max(...b.priceTiers.map((tier) => tier.price)) -
          Math.max(...a.priceTiers.map((tier) => tier.price))
      );
    }

    setFilteredProducts(filtered);
  }, [category, sortOption, selectedColor, selectedSize, selectedBrand]);

  const formattedProducts = filteredProducts.map((product) => {
    const {
      productId: id,
      name,
      category,
      images: { modelUrl }, // Model images in different formats
      variants = [],
      priceTiers,
      sizeVariants,
    } = product;

    // Extract images from the first variant
    const { small, medium, large } = modelUrl || {};

    // Find the colors from the variants
    const colors = variants.map((variant) => ({
      colorName: variant.colorName || "Unknown Color",
      colorCode: variant.colorCode || "#000000", // Default to black if undefined
    }));

    // Price calculations based on tiers
    const minPrice = Math.min(...priceTiers.map((tier) => tier.price));
    const maxPrice = Math.max(...priceTiers.map((tier) => tier.price));

    const sizeVariantsLength = sizeVariants?.length || 0;
    const variantsLength = variants?.length || 0;

    return {
      id,
      name,
      category,
      modelUrl,
      smallImageFormats: small?.formats,
      mediumImageFormats: medium?.formats,
      largeImageFormats: large?.formats,
      minPrice,
      maxPrice,
      sizeVariantsLength,
      variantsLength,
      colors, // Now we have both colorName and colorCode as an array of objects
    };
  });

  return (
    <div className="product-page" style={{ marginBlockStart: "11.5rem" }}>
      <div className="container">
        <h2 className="subheading-1">{title}</h2>
        <p>Att välja profilkläder ska vara enkelt</p>
      </div>
      <Filter
        products={formattedProducts}
        allColors={allColors} // Pass the unique color options
        setSortOption={setSortOption}
        setSelectedColor={setSelectedColor}
        setSelectedSize={setSelectedSize}
        setSelectedBrand={setSelectedBrand}
      />

      <div className="product-wrapper">
        {formattedProducts.length > 0 ? (
          formattedProducts.map((product) => (
            <CardMax
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              modelImages={product.modelUrl}
              smallImageFormats={product.smallImageFormats}
              mediumImageFormats={product.mediumImageFormats}
              largeImageFormats={product.largeImageFormats}
              minPrice={product.minPrice}
              maxPrice={product.maxPrice}
              sizeVariantsLength={product.sizeVariantsLength}
              variantsLength={product.variantsLength}
              colorCodes={product.colors.map((color) => color.colorCode)} // Pass color codes
            />
          ))
        ) : (
          <p>
            Inga produkter hittades inom den angiva kategorin eller filtreringen
          </p>
        )}
      </div>
    </div>
  );
}

function Filter({
  products,
  allColors, // Add allColors prop
  setSortOption,
  setSelectedColor,
  setSelectedSize,
  setSelectedBrand,
}) {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  console.log(products);
  const uniqueColors = [];

  // Create a set to store unique color combinations (name + code)
  const colorSet = new Set();

  products.forEach((product) => {
    product.colors.forEach((color) => {
      const colorKey = `${color.colorName}-${color.colorCode}`; // Create a unique key for each color

      // Only add the color if it's not already in the set
      if (!colorSet.has(colorKey)) {
        colorSet.add(colorKey);
        uniqueColors.push({
          colorName: color.colorName,
          colorCode: color.colorCode,
        });
      }
    });
  });

  return (
    <div className="filter-wrapper">
      <button
        className="filter-toggle-btn"
        style={{ display: "flex", alignItems: "center", gap: "16px" }}
        onClick={() => {
          setIsFilterVisible((prev) => !prev);
        }}
      >
        <LuListFilter />
        Filtrera och sortera<span className="toggle-arrow"></span>
        <LuChevronDown />
      </button>
      {isFilterVisible && (
        <div className="filter-content">
          <div className="filter-group" style={{ display: "flex" }}>
            <label className="filter-label main-body">
              Sortera:
              <select onChange={(e) => setSortOption(e.target.value)}>
                <option value="">Välj sortering</option>
                <option value="Nyast">Nyast</option>
                <option value="Lägsta pris">Lägsta pris</option>
                <option value="Högsta pris">Högsta pris</option>
                <option value="Deals">Deals</option>
              </select>
            </label>
          </div>

          {/* Color Filter */}
          <div className="filter-group">
            <label className="filter-label main-body">
              Färg:
              <select onChange={(e) => setSelectedColor(e.target.value)}>
                <option value="">Välj färg</option>
                {allColors.map((color, index) => (
                  <option
                    style={{ backgroundColor: color.colorCode }}
                    key={index}
                    value={color.colorCode}
                  >
                    {color.colorName}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Size Filter */}
          <div className="filter-group">
            <label className="filter-label main-body">
              Storlek:
              <select onChange={(e) => setSelectedSize(e.target.value)}>
                <option value="">Välj storlek</option>
                <option value="XSS">XSS</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
                <option value="3XL">3XL</option>
              </select>
            </label>
          </div>

          {/* Brand Filter */}
          <div className="filter-group">
            <label className="filter-label main-body">
              Varumärke:
              <select onChange={(e) => setSelectedBrand(e.target.value)}>
                <option value="">Välj varumärke</option>
                <option value="Stanley Stella">Stanley Stella</option>
                <option value="Green Go Co">Green Go Co</option>
              </select>
            </label>
          </div>

          <button
            className="reset"
            style={{ display: "flex", alignItems: "center", gap: "16px" }}
            onClick={() => {
              setSortOption("");
              setSelectedColor("");
              setSelectedSize("");
              setSelectedBrand("");
            }}
          >
            <LuRotateCcw />
            Återställ filter
          </button>
        </div>
      )}
    </div>
  );
}

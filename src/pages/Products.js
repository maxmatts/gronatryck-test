import React, { useState } from "react";
import products from "../data/product.js";
import Card from "../components/Cards.js";
import "../styles/card.css";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb.js";
import { LuChevronDown } from "react-icons/lu";

const getUniqueColors = (products) => {
  const colorMap = new Map();

  products.forEach((product) => {
    product.images.variants?.forEach((variant) => {
      const colorKey = `${variant.colorName.toLowerCase()}-${
        variant.colorCode
      }`;
      if (!colorMap.has(colorKey)) {
        colorMap.set(colorKey, {
          name: variant.colorName.toLowerCase(),
          code: variant.colorCode,
        });
      }
    });
  });

  const uniqueColors = Array.from(colorMap.values());

  return uniqueColors;
};

const getUniqueBrands = (products) => {
  const brands = new Set();
  products.forEach((product) => {
    if (product.brand) {
      brands.add(product.brand.toLowerCase());
    }
  });
  return Array.from(brands);
};

const getUniqueSizes = (products) => {
  const sizes = new Set();
  products.forEach((product) => {
    product.sizeVariants?.forEach((size) => sizes.add(size));
  });
  return Array.from(sizes);
};

const Products = () => {
  const { category } = useParams();
  const [title, setTitle] = useState(category || "Alla produkter");

  const [sort, setSort] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const [isColorDropdownOpen, setIsColorDropdownOpen] = useState(false);
  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false);
  const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);

  const uniqueColors = getUniqueColors(products);
  const uniqueBrands = getUniqueBrands(products);
  const uniqueSizes = getUniqueSizes(products);

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory =
        category && category !== "alla produkter"
          ? product.category.toLowerCase() === category.toLowerCase()
          : true;
      const matchesColor =
        selectedColors.length > 0
          ? product.images.variants?.some((variant) =>
              selectedColors.includes(variant.colorName.toLowerCase())
            )
          : true;

      const matchesBrand =
        selectedBrands.length > 0
          ? selectedBrands.includes(product.brand?.toLowerCase())
          : true;

      const matchesSize =
        selectedSizes.length > 0
          ? selectedSizes.some((size) => product.sizeVariants?.includes(size))
          : true;

      return matchesCategory && matchesColor && matchesBrand && matchesSize;
    })

    .sort((a, b) => {
      if (sort === "Nyast") return b.date - a.date;
      if (sort === "Lägsta pris")
        return a.priceTiers[0]?.price - b.priceTiers[0]?.price;
      if (sort === "Högsta pris")
        return b.priceTiers[0]?.price - a.priceTiers[0]?.price;
      if (sort === "Deals") return a.discount ? -1 : 1;
      return 0;
    });

  const productCards = filteredProducts.map((product) => {
    const { productId, name, category, images, sizeVariants, priceTiers } =
      product;
    const { modelUrl, variants } = images;

    const minPrice = Math.min(...priceTiers.map((tier) => tier.price));
    const maxPrice = Math.max(...priceTiers.map((tier) => tier.price));

    const firstVariantImage = variants[0]?.basePath;
    const colorCodes = variants.slice(0, 2).map((variant) => variant.colorCode);

    return {
      productId,
      name,
      category,
      modelImage: modelUrl,
      firstVariantImage,
      minPrice,
      maxPrice,
      sizeVariantsCount: sizeVariants.length,
      variantsCount: variants.length,
      colorCodes,
    };
  });

  const resetFilters = () => {
    setSort("");
    setSelectedColors([]);
    setSelectedBrands([]);
    setSelectedSizes([]);
    setIsColorDropdownOpen(false);
    setIsBrandDropdownOpen(false);
    setIsSizeDropdownOpen(false);
  };

  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleSizeChange = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const [isFilterVisible, setIsFilterVisible] = useState(false);

  return (
    <div className="product-page">
      <div className="heading-margin">
        <h2 className="subheading-1">{title}</h2>

        {/* <p className="main-body">
          
          Upptäck ett noga utvalt sortiment av profilkläder och produkter som
          kombinerar stil och kvalitet. Här hittar du allt från t-shirts och
          hoodies till accessoarer, med fokus på att du enkelt ska kunna göra
          ett medvetet val. Vi erbjuder smidiga bulkbeställningar för att
          säkerställa att ditt företag kan få en enhetlig och professionell look
          till ett förmånligt pris!
        </p> */}
      </div>

      <div className="product-wrapper">
        <Breadcrumb />
        <div className="filter-wrapper">
          <button
            className="filter-toggle-btn"
            onClick={() => setIsFilterVisible((prev) => !prev)}
          >
            Filtrea och sortera
            <span className={`toggle-arrow ${isFilterVisible ? "active" : ""}`}>
              <LuChevronDown />
            </span>
          </button>

          {isFilterVisible && (
            <div className="filter-content">
              <div className="filter-group">
                <label
                  className="filter-label main-body"
                  style={{ cursor: "pointer" }}
                >
                  Sortera:
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="">Välj sortering</option>
                    <option value="Nyast">Nyast</option>
                    <option value="Lägsta pris">Lägsta pris</option>
                    <option value="Högsta pris">Högsta pris</option>
                    <option value="Deals">Deals</option>
                  </select>
                </label>
              </div>

              <div className="filter-group">
                <button
                  className="filter-btn"
                  onClick={() => setIsColorDropdownOpen((prev) => !prev)}
                >
                  <h3 className="main-body">
                    Färg{" "}
                    {selectedColors.length > 0 && `(${selectedColors.length})`}
                  </h3>
                  <span
                    className={`arrow-icon ${
                      isColorDropdownOpen ? "active" : ""
                    }`}
                  >
                    <LuChevronDown />
                  </span>
                </button>
                {isColorDropdownOpen && (
                  <div className="dropdown-menu">
                    {uniqueColors.map((color) => (
                      <label
                        key={color.name}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <input
                          type="checkbox"
                          value={color.name}
                          checked={selectedColors.includes(color.name)}
                          onChange={() => handleColorChange(color.name)}
                          style={{ marginRight: "10px" }}
                        />
                        <span
                          style={{
                            display: "inline-block",
                            width: "20px",
                            height: "20px",
                            backgroundColor: color.code,
                            borderRadius: "50%",
                            marginRight: "8px",
                            verticalAlign: "middle",
                          }}
                        ></span>
                        {color.name.charAt(0).toUpperCase() +
                          color.name.slice(1)}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="filter-group">
                <button
                  className="filter-btn"
                  onClick={() => setIsBrandDropdownOpen((prev) => !prev)}
                >
                  <h3 className="main-body">
                    Varumärke{" "}
                    {selectedBrands.length > 0 && `(${selectedBrands.length})`}
                  </h3>
                  <span
                    className={`arrow-icon ${
                      isBrandDropdownOpen ? "active" : ""
                    }`}
                  >
                    <LuChevronDown />
                  </span>
                </button>

                {isBrandDropdownOpen && (
                  <div className="dropdown-menu">
                    {uniqueBrands.map((brand) => (
                      <label
                        key={brand}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <input
                          type="checkbox"
                          value={brand}
                          checked={selectedBrands.includes(brand)}
                          onChange={() => handleBrandChange(brand)}
                          style={{ marginRight: "10px" }}
                        />
                        {brand.charAt(0).toUpperCase() + brand.slice(1)}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="filter-group">
                <button
                  className="filter-btn"
                  onClick={() => setIsSizeDropdownOpen((prev) => !prev)}
                >
                  <h3 className="main-body">
                    Storlek{" "}
                    {selectedSizes.length > 0 && `(${selectedSizes.length})`}
                  </h3>
                  <span
                    className={`arrow-icon ${
                      isSizeDropdownOpen ? "active" : ""
                    }`}
                  >
                    <LuChevronDown />
                  </span>
                </button>

                {isSizeDropdownOpen && (
                  <div className="dropdown-menu">
                    {uniqueSizes.map((size) => (
                      <label
                        key={size}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <input
                          type="checkbox"
                          value={size}
                          checked={selectedSizes.includes(size)}
                          onChange={() => handleSizeChange(size)}
                          style={{ marginRight: "10px" }}
                        />
                        {size}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <button
                className="reset"
                onClick={resetFilters}
                style={{ marginTop: "10px" }}
              >
                Återställ filter
              </button>
            </div>
          )}
        </div>

        {productCards.length > 0 ? (
          productCards.map((card) => (
            <Card
              key={card.productId}
              id={card.productId}
              name={card.name}
              category={card.category}
              modelImage={card.modelImage}
              firstVariantImage={card.firstVariantImage}
              minPrice={card.minPrice}
              maxPrice={card.maxPrice}
              sizeVariantsCount={card.sizeVariantsCount}
              variantsCount={card.variantsCount}
              colorCodes={card.colorCodes}
            />
          ))
        ) : (
          <p>Inga produkter hittades för din sökning.</p>
        )}
      </div>
    </div>
  );
};

export default Products;

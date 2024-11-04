import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../data/product.js";
import { useCart } from "../context/CartContext";
import ProductGallery from "../components/ProductGallery.js";
import Radiobutton from "../components/RadioButton.js";
import IncrementButton from "../components/IncrementButton.js";
import { darkPrintPrice } from "../data/printPrice";
import Breadcrumb from "../components/Breadcrumb.js";
import "../styles/button.css";
import "../styles/productdetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.productId === id);
  const { addToCart } = useCart();

  // State variables
  const [printIndex, setPrintIndex] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    product.images.variants[0]?.colorName
  );
  const [sizeQuantities, setSizeQuantities] = useState({});
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [isExpanded, setIsExpanded] = useState(false); 
  const [activeTab, setActiveTab] = useState("price"); 


  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (size, quantity) => {
    const newQuantities = {
      ...sizeQuantities,
      [`${selectedColor}-${size}`]: quantity,
    };
    setSizeQuantities(newQuantities);
  };

  const calculatePricePerItem = (quantity) => {
    const { priceTiers } = product;
    for (const tier of priceTiers) {
      if (
        quantity >= tier.minQuantity &&
        (tier.maxQuantity === null || quantity <= tier.maxQuantity)
      ) {
        return tier.price;
      }
    }
    return 0;
  };

  const getPriceByTotalQuantity = (totalQuantity) => {
    console.log(printIndex);
    if (totalQuantity < 50) {
      return darkPrintPrice.amount[25][printIndex];
    } else if (totalQuantity < 100) {
      return darkPrintPrice.amount[50][printIndex];
    } else if (totalQuantity < 250) {
      return darkPrintPrice.amount[100][printIndex];
    } else if (totalQuantity < 500) {
      return darkPrintPrice.amount[250][printIndex];
    } else {
      return darkPrintPrice.amount[500][printIndex];
    }
  };

  const calculateTotalPriceByArtNr = () => {
    const totalQuantity = Object.values(sizeQuantities).reduce(
      (total, qty) => total + qty,
      0
    );
    const pricePerItem = calculatePricePerItem(totalQuantity);
    const clothprice = (pricePerItem * totalQuantity).toFixed(2);

    return { totalQuantity, clothprice, pricePerItem };
  };

  const { totalQuantity, clothprice, pricePerItem } =
    calculateTotalPriceByArtNr();
  const totalPrintPrice =
    getPriceByTotalQuantity(totalQuantity) * totalQuantity;

  let totalPrintPriceNumber = parseFloat(totalPrintPrice) || 0;
  let clothpriceNumber = parseFloat(clothprice) || 0;
  let totalPrice;

  if (totalPrintPriceNumber === 0) {
    totalPrice = clothpriceNumber;
  } else {
    totalPrice = totalPrintPriceNumber + clothpriceNumber;
  }

  const removeFromSpecification = (key) => {
    const updatedQuantities = { ...sizeQuantities };
    delete updatedQuantities[key];
    setSizeQuantities(updatedQuantities);
  };

  const handleAddToCart = (event) => {
    event.preventDefault();
    if (!selectedColor || totalQuantity === 0) {
      setConfirmationMessage("Vänligen välj en färg och kvantitet.");
      return;
    }

    if (totalQuantity < 10) {
      setConfirmationMessage("Du måste lägga till minst 10 i kvantitet."); // Provide feedback
      return;
  }

    // Iterate over size quantities and add to cart for each size/color combo
    Object.entries(sizeQuantities).forEach(([key, quantity]) => {
      if (quantity > 0) {
        const [color, size] = key.split("-");
        const cartItem = {
          productId: product.productId,
          name: product.name,
          brand: product.brand,
          selectedColor: color,
          size: size,
          totalQuantity: quantity,
          pricePerItem: calculatePricePerItem(quantity),
          clothprice: (calculatePricePerItem(quantity) * quantity).toFixed(2),
          totalPrintPrice: getPriceByTotalQuantity(totalQuantity) * quantity,
          totalPrice: (
            parseFloat(
              (calculatePricePerItem(quantity) * quantity).toFixed(2)
            ) +
            getPriceByTotalQuantity(totalQuantity) * quantity
          ).toFixed(2),
        };

        console.log("Adding to cart:", cartItem);
        addToCart(cartItem); 
      }
    });

    setConfirmationMessage("Produkten har lagts till i offerten!");
  };

  useEffect(() => {
    if (confirmationMessage) {
      const timer = setTimeout(() => {
        setConfirmationMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [confirmationMessage]);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedDescription =
    product.description.length > 150
      ? `${product.description.substring(0, 150)}...`
      : product.description;

  const printPrice = darkPrintPrice;

  const getLowestPrice = () => {
    return Math.min(...product.priceTiers.map((tier) => tier.price));
  };

  const lowestPrice = getLowestPrice();

  return (
    <div>
     
      <div className="container">
      <Breadcrumb />
        <main className="product">
          <div className="product-grid">
            <ProductGallery
              images={product.images}
              className="product-gallery"
            />

            <section className="product-info">
              <p className="brand-name">{product.brand}</p>
              <h1 className="heading-2 ">{product.name}</h1>
              <p className="product-description">
                {isExpanded
                  ? product.description.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line} <br />
                      </React.Fragment>
                    ))
                  : truncatedDescription}
              </p>
              <button onClick={toggleDescription} className="read-more-btn">
                {isExpanded ? "" : "Läs mer"}
              </button>

              <div className="certificate-container">
                {product.certificates.map((certificate, index) => (
                  <div key={index} className="certificate-item">
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={certificate.img} alt={certificate.name} />
                    </a>
                  </div>
                ))}
              </div>
              <h3 className="heading-3">Pris fr {lowestPrice} SEK:</h3>
              <form>
                {/* Color and Size Selection */}
                <fieldset>
                  <legend className="main-body">Färg:</legend>
                  {product.images.variants.map((variant, index) => (
                    <Radiobutton
                      key={index}
                      name={variant.colorName}
                      color={variant.colorCode}
                      onChange={() => handleColorChange(variant.colorName)}
                      checked={selectedColor === variant.colorName}
                    />
                  ))}
                </fieldset>

                <div className="size-container">
                  <fieldset>
                    <legend className="main-body">Storlek</legend>
                    <div className="grid-container">
                      {product.sizeVariants.map((variant, index) => {
                        const key = `${selectedColor}-${variant}`;
                        return (
                          <IncrementButton
                            key={index}
                            id={key}
                            size={variant}
                            handleChange={handleQuantityChange}
                            quantity={sizeQuantities[key] || 0}
                          />
                        );
                      })}
                    </div>
                  </fieldset>
                </div>
              </form>
            </section>
          </div>
          {/* Order Summary */}
          {totalQuantity > 0 && (
            <div className="order-container">
              <hr />
              <h4>Din beställning:</h4>
              <ul>
                {Object.entries(sizeQuantities).map(([key, quantity]) => (
                  <li key={key}>
                    <p>
                      Färg: {key}: {quantity}
                      <button
                        className="remove-btn-2"
                        onClick={() => removeFromSpecification(key)}
                      >
                        Ta bort
                      </button>
                    </p>
                  </li>
                ))}
              </ul>
              <p>
                Antal: <span>{totalQuantity}</span>
              </p>
              <p>Pris per styck {pricePerItem},00 SEK</p>
              <p>
                Totalt pris: <span>{totalPrice},00 SEK</span>
              </p>
              <div className="button-container">
                <button onClick={handleAddToCart} className="main-btn">
                  Lägg till i offert
                </button>
              </div>

              {confirmationMessage && (
                <p className="confirmation-message">{confirmationMessage}</p>
              )}

              <div className="spacing">
                <p className="main-body">
                  Vår offert är flexibel! Du kan justera dina val innan du
                  bekräftar, så att du får det du verkligen vill ha.
                </p>
              </div>
            </div>
          )}

        
          <div className="tabs">
            <button
              className={`tab ${activeTab === "price" ? "active" : ""}`}
              onClick={() => setActiveTab("price")}
            >
              Prisinformation
            </button>
            <button
              className={`tab ${activeTab === "product" ? "active" : ""}`}
              onClick={() => setActiveTab("product")}
            >
              Specifikationer
            </button>
          </div>

          
          <div className="tab-content">
            {activeTab === "price" && (
              <div className="price-info">
                <table>
                  <thead>
                    <tr>
                      <td>Antal (St)</td>
                      {product.priceTiers.map((tier, index) => (
                        <td key={index}>
                          {tier.maxQuantity !== null
                            ? `${tier.minQuantity}-${tier.maxQuantity}`
                            : `${tier.minQuantity}+`}
                        </td>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pris (SEK/st)</td>
                      {product.priceTiers.map((tier, index) => (
                        <td key={index}>{tier.price}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
                <p className="main-body spacing">
                  Obs: Tryck -och schablonkostnaderna varierar beroende på
                  plaggets färg och tryckmetod.
                </p>
              </div>
            )}

            {activeTab === "product" && (
              <div className="product-collapse">
                <table>
                  <tbody>
                    <tr>
                      <td>Artikelnummer</td>
                      <td>{product.artNr}</td>
                    </tr>
                    <tr>
                      <td>Beskrivning</td>
                      <td>{product.description}</td>
                    </tr>
                    <tr>
                      <td>Storlek</td>
                      <td>
                        Finns i storlekarna: {product.sizeVariants.join(", ")}
                      </td>
                    </tr>
                    <tr>
                      <td>Material</td>
                      <td>{product.material}</td>
                    </tr>
                    <tr>
                      <td>Materialvikt</td>
                      <td>{product.weight}</td>
                    </tr>
                    <tr>
                      <td>Egenskaper</td>
                      <td>
                        <ul>
                          {product.properties.map((property, index) => (
                            <li key={index}>{property}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Certifikat</td>
                      <td>
                        <ul>
                          {product.certificates.map((certificate, index) => (
                            <li key={index}>
                              <a
                                href={certificate.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {certificate.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductDetail;












import { useState, useMemo, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import ProgressTracker from "../components/ProgressTracker";
import "../styles/CartPage.css";
import { darkPrintPrice } from "../data/printPrice";
import products from "../data/product.js";

function CartPage() {
  const [globalComment, setGlobalComment] = useState("");
  const [globalFile, setGlobalFile] = useState(null);
  const [globalPrintType, setGlobalPrintType] = useState("");
  const { cartItems, updateCartItem, removeFromCart } = useCart();
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const [openPrintSection, setOpenPrintSection] = useState(false);
  const togglePrintSection = () => {
    setOpenPrintSection((prev) => !prev);
  };
  const handleGlobalFileUpload = (e) => setGlobalFile(e.target.files[0]);
  const handleGlobalCommentChange = (e) => setGlobalComment(e.target.value);

  const handleQuantityChange = (item, quantity) => {
    // Ensure the quantity doesn't go below 1 when decrementing
    if (quantity < 1) {
        return; // Do nothing if quantity is less than 1
    }
    
    if (quantity === 0) {
        removeFromCart(item.productId, item.selectedColor, item.size);
    } else {
        updateCartItem(item.productId, item.selectedColor, item.size, quantity);
    }
};

  const getProductDetails = (productId) => {
    return products.find((product) => product.productId === productId) || {};
  };

  const clothTotalPrice = () => {
    return cartItems
      .reduce((total, item) => {
        const product = getProductDetails(item.productId);
        const pricePerItem = getPriceByTotalQuantity(
          item.totalQuantity,
          product
        );
        return total + pricePerItem * item.totalQuantity;
      }, 0)
      .toFixed(2);
  };

  const itemTotalPrice = (quantity, product) => {
    const pricePerItem = getPriceByTotalQuantity(quantity, product);

    const totalPrice = pricePerItem * quantity;

    return totalPrice;
  };

  console.log(itemTotalPrice);

  const getPriceByTotalQuantity = (totalQuantity, product) => {
    const priceTier = product.priceTiers.find((tier) => {
      return (
        totalQuantity >= tier.minQuantity &&
        (tier.maxQuantity === null || totalQuantity <= tier.maxQuantity)
      );
    });
    return priceTier ? priceTier.price : product.priceTiers[0].price;
  };

  const totalPrintPrice = () => {
    if (!cartItems || cartItems.length === 0) return "0.00";

    const itemsTotal = cartItems.reduce((total, item) => {
      const printIndex =
        globalPrintType &&
        globalPrintType !== "" &&
        globalPrintType !== "Utan tryck"
          ? parseInt(globalPrintType.split(" ")[0]) - 1
          : null;

      const printPricePerItem =
        printIndex !== null
          ? getPrintPriceByTotalQuantity(item.totalQuantity, printIndex)
          : 0;

      const itemTotal = printPricePerItem * item.totalQuantity;
      console.log(`Item Total for ${item.name || "unknown"}: ${itemTotal}`);
      return total + itemTotal;
    }, 0);

    const stencilPrice = totalStencilPrice();
    console.log(`Stencil Price: ${stencilPrice}`);

    const totalPrice = itemsTotal + stencilPrice;
    console.log(
      `Items Total: ${itemsTotal}, Stencil Price: ${stencilPrice}, Total Price: ${totalPrice}`
    );

    if (typeof totalPrice !== "number") {
      console.error(`Expected a number but got: ${totalPrice}`);
      return "0.00";
    }

    return totalPrice.toFixed(2);
  };

  console.log(totalPrintPrice);

  const getPrintPriceByTotalQuantity = (totalQuantity, printIndex) => {
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

  const handleGlobalPrintTypeChange = (e) => {
    setGlobalPrintType(e.target.value);
  };

  const handleCheckoutClick = () => {
    if (loggedInUser) {
      const totalQuantity = getTotalQuantity();
      const totalClothPriceValue = clothTotalPrice();
      const totalPrintPriceValue = totalPrintPrice();

      localStorage.setItem("totalQuantity", totalQuantity);
      localStorage.setItem("totalClothPrice", totalClothPriceValue);
      localStorage.setItem("totalPrintPrice", totalPrintPriceValue);

      // Navigate to the checkout page
      navigate("/checkout");
    } else {
      navigate("/login", { state: { from: "/checkout" } });
    }
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.totalQuantity, 0);
  };

  const navigateToProductDetail = (productId) => {
    navigate(`/products/${productId}`);
  };

  const pricePerItem = useMemo(() => {
    if (globalPrintType) {
      const totalQuantity = getTotalQuantity();
      const printIndex = parseInt(globalPrintType.split(" ")[0]) - 1;
      return totalQuantity > 0
        ? getPrintPriceByTotalQuantity(totalQuantity, printIndex).toFixed(2)
        : 0;
    }
    return 0;
  }, [cartItems, globalPrintType]);

  const renderPrintPrices = () => {
    return (
      <table>
        <thead>
          <tr>
            <td>Antal</td>
            <td>1 färg</td>
            <td>2 färg</td>
            <td>3 färg</td>
            <td>4 färg</td>
            <td>5 färg</td>
            <td>6 färg</td>
            <td>7 färg</td>
          </tr>
        </thead>
        <tbody>
          {Object.entries(darkPrintPrice.amount).map(([quantity, prices]) => (
            <tr key={quantity}>
              <td>{quantity}</td>
              {prices.map((price, index) => (
                <td key={index}>{price} SEK</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const totalStencilPrice = () => {
    if (!globalPrintType) return "0.00";
    const printIndex = parseInt(globalPrintType.split(" ")[0]);
    return darkPrintPrice.schablon[printIndex] || 0;
  };

  useEffect(() => {
    const printPrice = totalPrintPrice();
    localStorage.setItem("totalPrintPrice", printPrice);
  }, [cartItems, globalPrintType]);

  return (
    <div className="cartpage">
      <ProgressTracker />
      <div className="cart-heading">
        <h1 className="heading-3">Varukorg ({getTotalQuantity()} varor)</h1>
      </div>
      {cartItems.length === 0 ? (
        <p>Inga varor i varukorgen</p>
      ) : (
        <div className="cart-page-container">
          <div className="cart-content">
            <ul>
              {cartItems.map((item) => {
                const product = getProductDetails(item.productId);

                return (
                  <li
                    className="cart-list"
                    key={item.productId + item.selectedColor + item.size}
                  >
                    <div className="cart-item">
                    <Link
                        to={`/produkter/${item.productId}/${product.slug}`}
                        className="cart-item-link"
                      >
                        <img
                          src={`${
                            product.images.variants.find(
                              (v) => v.colorName === item.selectedColor
                            )?.basePath
                          }.jpg`}
                          alt={product.name}
                          className="cart-item-image"
                        />
                        <div className="cart-item-details">
                          <p className="cart-item-name">{product.name}</p>
                          <p className="cart-item-color">
                            Färg: {item.selectedColor}
                          </p>
                          <p className="cart-item-size">Storlek: {item.size}</p>
                          <p className="cart-item-price">
                            Pris/st:{" "}
                            {getPriceByTotalQuantity(
                              item.totalQuantity,
                              product
                            )}{" "}
                            SEK
                          </p>
                          <p className="cart-item-total-price">
                            Totalt:{" "}
                            {itemTotalPrice(item.totalQuantity, product)},00 SEK
                          </p>
                        </div>
                      </Link>

                      {/* Remove Button Outside the Link */}
                      <button
                        className="remove-btn"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent the Link from being triggered
                          removeFromCart(
                            item.productId,
                            item.selectedColor,
                            item.size
                          );
                        }}
                      >
                        <span>x</span>
                      </button>
                    </div>

                    <div className="increment-container">
                      <div className="increment-number-input">
                        <button
                          className="increment-buttons"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleQuantityChange(item, item.totalQuantity - 1);
                          }}
                        >
                          -
                        </button>
                        <input
                          className="input-number"
                          type="number"
                          value={item.totalQuantity}
                          min="0"
                          onChange={(e) =>
                            handleQuantityChange(
                              item,
                              parseInt(e.target.value) || 0
                            )
                          }
                        />
                        <button
                          className="increment-buttons"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleQuantityChange(item, item.totalQuantity + 1);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Print Container */}
          <div className="print-container">
            <div className="cart-heading">
              <h2 className="heading-3">Tryckalternativ:</h2>
            </div>
            <div className="label-container">
              <label>
                Välj tryck:
                <select
                  onChange={handleGlobalPrintTypeChange}
                  value={globalPrintType}
                >
                  <option value="">Utan tryck</option>
                  <option value="1 färg">1 färg</option>
                  <option value="2 färg">2 färg</option>
                  <option value="3 färg">3 färg</option>
                  <option value="4 färg">4 färg</option>
                  <option value="5 färg">5 färg</option>
                  <option value="6 färg">6 färg</option>
                  <option value="7 färg">7 färg</option>
                </select>
              </label>
            </div>
            <h4 className="main-body">
              Pris/St:{" "}
              {pricePerItem.toLocaleString("sv-SE", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              SEK
            </h4>
            <h4 className="main-body">
              Schablon:{" "}
              {Number(totalStencilPrice(0)).toLocaleString("sv-SE", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              SEK
            </h4>
            <h4 className="main-body">
              Totalt tryckpris:{" "}
              {Number(totalPrintPrice()).toLocaleString("sv-SE", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              SEK
            </h4>
            <div className="file-upload-section">
              <label>
                Ladda upp fil:
                <input type="file" onChange={handleGlobalFileUpload} />
              </label>
              <label>
                Kommentar:
                <textarea
                  value={globalComment}
                  onChange={handleGlobalCommentChange}
                  rows="4"
                  placeholder="Beskriv hur du vill använda ditt tryck här..."
                />
              </label>
            </div>
            <div className="tab-content print-price">
              <p
                className="main-body"
                onClick={togglePrintSection}
                style={{ cursor: "pointer" }}
              >
                Tryckpriser
                <span className="toggle-arrow">
                  {openPrintSection ? "▲" : "▼"}
                </span>
              </p>
              {openPrintSection && renderPrintPrices()}
            </div>






  <div className="price-container">
        <h5 className="main-body">Antal varor: {getTotalQuantity()} St</h5>
        <h5 className="main-body">
          Pris för kläder:{" "}
          {clothTotalPrice()
            .toLocaleString("sv-SE", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
            .replace(".", ",")}{" "}
          SEK
        </h5>
        <h5 className="main-body">
          Pris för tryck:{" "}
          {totalPrintPrice()
            .toLocaleString("sv-SE", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
            .replace(".", ",")}{" "}
          SEK
        </h5>

        <div className="cart-heading price-heading left">
          <h2 className="heading-3">
            Totalt pris:{" "}
            {parseFloat(clothTotalPrice()) + parseFloat(totalPrintPrice())} SEK
          </h2>
        </div>
      </div>

      <div className="btn-container">
        {cartItems.length > 0 && (
          <button className="main-btn" onClick={handleCheckoutClick}>
            Nästa steg
          </button>
        )}
      </div>






            






            
          </div>
        </div>
      )}

    
    </div>
  );
}

export default CartPage;

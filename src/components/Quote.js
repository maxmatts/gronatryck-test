import React, { useEffect, useState } from 'react';
import '../styles/checkout.css'; // Import CSS

const Quote = ({ customer, cartItems }) => {
  const [savedPrintPrice, setSavedPrintPrice] = useState("0.00");
  const [totalWithPrintPrice, setTotalWithPrintPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalClothPrice, setTotalClothPrice] = useState(0);

  useEffect(() => {
    // Attempt to retrieve the saved print price from local storage
    const price = localStorage.getItem("totalPrintPrice");
    if (price) {
      setSavedPrintPrice(price); // Set the saved print price if found
    } else {
      console.warn("No print price found in local storage. Defaulting to 0.00");
    }
  }, []);

  useEffect(() => {
    // Calculate total quantity and total cloth price
    let quantity = 0;
    let clothPrice = 0;

    cartItems.forEach(item => {
      quantity += item.totalQuantity; // Sum up the total quantity
      clothPrice += item.pricePerItem * item.totalQuantity; // Calculate total cloth price
    });

    setTotalQuantity(quantity);
    setTotalClothPrice(clothPrice);

    // Convert savedPrintPrice to a float and add it to totalCost
    const printPriceNum = parseFloat(savedPrintPrice);
    const totalCostNum = clothPrice; // Use the calculated cloth price

    // Check for NaN and calculate the total
    if (!isNaN(printPriceNum) && !isNaN(totalCostNum)) {
      setTotalWithPrintPrice(totalCostNum + printPriceNum);
    } else {
      console.error("Invalid numbers for totalCost or savedPrintPrice");
    }
  }, [savedPrintPrice, cartItems]); // Update when cartItems or savedPrintPrice changes

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const quoteNumber = '001'; // Here you can generate a unique number
  const quoteDate = new Date();

  return (
    <div className="quote-summary">
      <h1 className='heading-2'>Offert</h1>
      <h3 className='subheading-3'>Kundinformation</h3>
      <div className="main-body">
        <p>Företagsnamn: {customer.companyName || 'Inget företag angivet'}</p>
        <p>Adress: {customer.street || 'Ingen adress angiven'}</p>
        <p>Telefon: {customer.phone || 'Ingen telefon angiven'}</p>
        <p>E-post: {customer.email}</p>
        <p>Organisationsnummer: {customer.organizationNumber || 'Ingen organisationsnummer angiven'}</p>
        <p>Offertnummer: {quoteNumber}</p>
        <p>Datum: {formatDate(quoteDate)}</p>
        <p>Giltig till: {formatDate(new Date(quoteDate.setDate(quoteDate.getDate() + 7)))}</p>
      </div>

      <div className='quote-container'>
        <h3 className='subheading-3'>Produkter/Tjänster:</h3>

        {cartItems.map((item) => (
          <div key={item.productId} className="item-row">
            <div className="item-name main-body">
              <strong>{item.name}</strong>
            </div>

            <div className="item-details">
              <p className="item-quantity main-body">
                <span className='detail-label'>Antal:</span> {item.totalQuantity} St
              </p>
              <p className="item-size main-body">
                <span className='detail-label'>Storlek:</span> {item.size || 'Ingen storlek angiven'}
              </p>
              <p className="item-color main-body">
                <span className='detail-label'>Färg:</span> {item.selectedColor}
              </p>
              <p className="item-price main-body">
                <span className='detail-label'>Pris:</span> {item.pricePerItem} SEK/ST
              </p>
            </div>
          </div>
        ))}

        <div className="item-name item-row main-body">
          <strong>Tryckpris</strong>
          <p>  {savedPrintPrice} SEK</p>
        </div>

        <div className="price-container">
          <h5 className="main-body">Antal varor: {totalQuantity} St</h5>
          <h5 className="main-body">Tryckpris: {savedPrintPrice} St</h5>
          <h5 className="main-body">Pris för kläder: {totalClothPrice.toFixed(2)} SEK</h5>
          <h3>Totalpris: {totalWithPrintPrice.toFixed(2)} SEK</h3>
        </div>
      </div>
    </div>
  );
};

export default Quote;

// Importerar nödvändiga moduler och CSS-stilar
import React, { useEffect, useState } from 'react';
import '../styles/checkout.css'; // Import CSS

// Definierar Quote-komponenten som tar emot customer och cartItems som props
const Quote = ({ customer, cartItems }) => {
  // Använder useState för att hantera lokal state
  const [savedPrintPrice, setSavedPrintPrice] = useState(0); // Sparat tryckpris
  const [totalWithPrintPrice, setTotalWithPrintPrice] = useState(0); // Totalt pris inklusive tryck
  const [totalQuantity, setTotalQuantity] = useState(0); // Totalt antal varor
  const [totalClothPrice, setTotalClothPrice] = useState(0); // Totalt pris för kläder

  // useEffect för att hämta sparat tryckpris från lokal lagring
  useEffect(() => {
    const price = localStorage.getItem("totalPrintPrice"); // Försök att hämta tryckpriset
    if (price) {
      setSavedPrintPrice(parseFloat(price)); // Sätter sparat tryckpris om det finns
    } else {
      console.warn("No print price found in local storage. Defaulting to 0.00"); // Varning om inget pris hittades
    }
  }, []); // Körs endast en gång vid komponentens montering

  // useEffect för att beräkna totalsummor när savedPrintPrice eller cartItems ändras
  useEffect(() => {
    let quantity = 0; // Initialiserar total mängd
    let clothPrice = 0; // Initialiserar total klädespris

    // Loopar över cartItems för att beräkna total mängd och klädespris
    cartItems.forEach(item => {
      quantity += item.totalQuantity; // Summerar total mängd
      const pricePerItem = item.pricePerItem || 0; // Använd 0 om pricePerItem är undefined
      clothPrice += pricePerItem * item.totalQuantity; // Beräknar total klädespris
    });

    setTotalQuantity(quantity); // Sätter total mängd
    setTotalClothPrice(clothPrice); // Sätter total klädespris

    // Beräkna totalt pris
    const totalCostNum = clothPrice; // Använder beräknat klädespris
    setTotalWithPrintPrice(totalCostNum + savedPrintPrice); // Beräknar totalt pris
  }, [savedPrintPrice, cartItems]); // Körs när savedPrintPrice eller cartItems ändras

  // Funktion för att formatera datum
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }; // Definierar datumformat
    return date.toLocaleDateString(undefined, options); // Returnerar formaterat datum
  };

  const quoteNumber = '001'; // Här kan ett unikt nummer genereras
  const quoteDate = new Date(); // Aktuellt datum


  useEffect(() => {
    console.log("Cart Items: ", cartItems); // Add this line to debug
}, [cartItems]);


  return (
    <div className="quote-summary">
      <h1 className='heading-2'>Offert</h1> {/* Huvudrubrik */}
      <h3 className='subheading-3'>Kundinformation</h3> {/* Under rubrik för kundinformation */}
      <div className="main-body">
        {/* Visar kundinformation med fallback-värden */}
        <p>
          För & Efternamn: {customer.firstName && customer.lastName 
            ? `${customer.firstName} ${customer.lastName}` 
            : 'Inget namn angivet'}
        </p>
        <p>Företagsnamn: {customer.companyName || 'Inget företag angivet'}</p>
        <p>Adress: {customer.street || 'Ingen adress angiven'}</p>
        <p>Telefonnummer: {customer.phoneNumber || 'Ingen telefon angiven'}</p>
        <p>E-post: {customer.email || 'Ingen e-post angiven'}</p>
        <p>Organisationsnummer: {customer.organizationNumber || 'Ingen organisationsnummer angiven'}</p>
        <p>Offertnummer: {quoteNumber}</p> {/* Visar offertenummer */}
        <p>Datum: {formatDate(quoteDate)}</p> {/* Visar datum för offerten */}
        <p>Giltig till: {formatDate(new Date(quoteDate.getTime() + 7 * 24 * 60 * 60 * 1000))}</p> {/* Visar giltighetstid */}
      </div>

      <div className='quote-container'>
        <h3 className='subheading-3'>Produkter/Tjänster:</h3> {/* Under rubrik för produkter/tjänster */}

        {/* Loopar över cartItems för att visa varje produkt/tjänst */}
        {cartItems.map((item) => (
    <div key={`${item.productId}-${item.size}`} className="item-row">
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
                <span className='detail-label'>Pris:</span> {item.pricePerItem},00 SEK/ST {/* Ensure this line is correctly using the value */}
            </p>
        </div>
    </div>
))}

<div className="item-name item-row main-body">
  <strong>Tryckpris</strong>
  <p>{savedPrintPrice.toLocaleString("sv-SE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace('.', ',')} SEK</p> {/* Formaterar tryckpriset */}
</div>

<div className="price-container">
  {/* Visar totalsummor */}
  <h5 className="main-body">Antal varor: {totalQuantity} St</h5>
  <h5 className="main-body">Tryckpris: {savedPrintPrice.toLocaleString("sv-SE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace('.', ',')} SEK</h5>
  <h5 className="main-body">Pris för kläder: {totalClothPrice.toLocaleString("sv-SE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace('.', ',')} SEK</h5>
  <h3>Totalpris: {totalWithPrintPrice.toLocaleString("sv-SE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace('.', ',')} SEK</h3> {/* Totalt pris inklusive tryck */}
</div>
      </div>
    </div>
  );
};

// Exporterar Quote-komponenten för användning i andra delar av appen
export default Quote;

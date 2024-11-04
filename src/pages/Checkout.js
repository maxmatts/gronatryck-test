// components/Checkout.js
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Quote from '../components/Quote';
import '../styles/checkout.css';
import ProgressTracker from '../components/ProgressTracker';
import { useNavigate } from "react-router-dom";

const generateOrderId = () => {
  return Math.floor(10000 + Math.random() * 90000).toString(); // Generates a random 5-digit number
};

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart(); // Destructure clearCart from useCart
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const [customerInfo, setCustomerInfo] = useState(loggedInUser || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.pricePerItem) * item.totalQuantity, 0).toFixed(2);
  };

  const totalCost = calculateTotalPrice();

  const handleCheckout = () => {
    const orderDetails = {
      customerInfo,
      items: cartItems,
      totalCost,
      orderId: generateOrderId(),
      orderDate: new Date().toLocaleDateString(),
    };
  
    const existingOrders = JSON.parse(localStorage.getItem('customerOrders')) || [];
    
    const updatedOrders = [...existingOrders, orderDetails];
    localStorage.setItem('customerOrders', JSON.stringify(updatedOrders));
    
    clearCart(); 
    navigate('/confirmation', { state: { orderDetails } });
  };

  return (
    <div className="checkout-container">
      <ProgressTracker />
      <div className="cart-heading">
        <h1 className="heading-1">Checkout </h1>
      </div>
      {loggedInUser ? (
        <>
          <h2 className='heading-3'>Kundinformation</h2>

          <form>
            <div className="input-container">
              <h6 className='input-label'>För & Efternamn</h6>
              <input
                className='input-login'
                type="text"
                name="personName"
                value={`${customerInfo.firstName} ${customerInfo.lastName}`}
                onChange={handleChange}
                placeholder="För & Efternamn"
                required
              />
            </div>

            <div className="input-container">
              <h6 className='input-label'>Företagsnamn:</h6>
              <input
                className='input-login'
                type="text"
                name="companyName"
                value={customerInfo.companyName}
                onChange={handleChange}
                placeholder="Företagsnamn"
              />
            </div>

            <div className="input-container">
              <h6 className='input-label'>Adress:</h6>
              <input
                className='input-login'
                type="text"
                name="street"
                value={customerInfo.street}
                onChange={handleChange}
                placeholder="Adress"
              />
            </div>

            <div className="input-container">
              <h6 className='input-label'>Telefon:</h6>
              <input
                className='input-login'
                type="text"
                name="phone"
                value={customerInfo.phone || ''}
                onChange={handleChange}
                placeholder="Telefon"
              />
            </div>

            <div className="input-container">
              <h6 className='input-label'>E-post:</h6>
              <input
                className='input-login'
                type="email"
                name="email"
                value={customerInfo.email}
                onChange={handleChange}
                placeholder="E-post"
                required
              />
            </div>

            <div className="input-container">
              <h6 className='input-label'>Organisationsnummer:</h6>
              <input
                className='input-login'
                type="text"
                name="organizationNumber"
                value={customerInfo.organizationNumber || ''}
                onChange={handleChange}
                placeholder="Organisationsnummer"
              />
            </div>
          </form>

          <Quote customer={customerInfo} cartItems={cartItems} totalCost={totalCost} />

          <div className='btn-container-2'>
            <button className='second-btn' onClick={() => navigate('/cart')}>Gå till varukorg</button>
            <button className='main-btn' onClick={handleCheckout}>Skicka offertförfrågan</button>
          </div>
        </>
      ) : (
        <p>Du måste vara inloggad för att se offerten.</p>
      )}
    </div>
  );
}

export default Checkout;

/*
// components/CustomerPage.js
import React, { useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../styles/CustomerPage.css";

function CustomerPage({onLogin}) {
  function isAuthenticated() {
    return localStorage.getItem("loggedInUser") ? true : false;
  }
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  return (
    <section style={{ marginBlockStart: "0rem" }}>
      
      {isLoggedIn ? <Dashboard /> : <Login onLogin={onLogin} />}
    </section>
  );
}

export default CustomerPage;

function Dashboard() {
  const navigate = useNavigate();
  return (

    
    <div className="Dashboard">

<div className="cart-heading">
      <h1 className='heading-3 header-label'>Mina sidor</h1>
      </div>
      
      <ul className="options-list ">
        <li className="nav-link">Mina Beställningar</li>
        <li className="nav-link">Gör en Retur</li>
        <li className="nav-link">Ändra Dina Uppgifter</li>
      </ul>
      <button className="learn-more-btn main-btn btn-container"
        onClick={() => {
          localStorage.removeItem("loggedInUser");
          navigate("/");
        }}
      >
        Logga ut
      </button>
    </div>
  );
}
*/
// components/CustomerPage.js
import React, { useState, useEffect } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import "../styles/CustomerPage.css";

function CustomerPage({ onLogin }) {
  function isAuthenticated() {
    return localStorage.getItem("loggedInUser") ? true : false;
  }
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  return (
    <section style={{ marginBlockStart: "0rem" }}>
      {isLoggedIn ? <Dashboard /> : <Login onLogin={onLogin} />}
    </section>
  );
}

export default CustomerPage;

function Dashboard() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false); 

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('customerOrders')) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="Dashboard">
      <div className="cart-heading">
        <h1 className="heading-3 header-label">Mina sidor</h1>
      </div>
      
      <ul className="options-list">
        <li className="nav-link" onClick={() => setShowOrders(!showOrders)}>
          Mina Beställningar
          {showOrders && <OrderHistory orders={orders} />} 
        </li>
        <li className="nav-link">Gör en Retur</li>
        <li className="nav-link">Ändra Dina Uppgifter</li>
      </ul>

      <button className="learn-more-btn main-btn btn-container"
        onClick={() => {
          localStorage.removeItem("loggedInUser");
          navigate("/");
        }}
      >
        Logga ut
      </button>
    </div>
  );
}

function OrderHistory({ orders }) {
  return (
    <div className="order-history">
      {orders.length === 0 ? (
        <p>Du har inga tidigare beställningar.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index} className="order-item">
              <p>Status: Behandlas</p>
              <h3>Order-ID: {order.orderId}</h3>
              <p>Datum: {order.orderDate}</p>
              <p>Totalkostnad: {order.totalCost} SEK</p>
              <ul>
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.name} - Antal: {item.totalQuantity} - Pris: {item.pricePerItem} SEK
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

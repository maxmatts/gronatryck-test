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
  const [showEditProfile, setShowEditProfile] = useState(false);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('customerOrders')) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div>
      <div className="Dashboard">
        <div className="cart-heading">
          <h1 className="main-heading page-heading">Mina sidor</h1>
        </div>

        <ul className="options-list">
          <li className="nav-link" onClick={() => {
            setShowOrders(!showOrders);
            setShowEditProfile(false);
          }}>
            Mina Beställningar
            {showOrders && <OrderHistory orders={orders} />}
          </li>
          <li className="nav-link" onClick={() => {
            setShowEditProfile(!showEditProfile);
            setShowOrders(false);
          }}>
            Ändra Dina Uppgifter
          </li>
          {showEditProfile && <EditProfile />}
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
              <p>Totalkostnad:  {order.totalCost} SEK</p>
              <ul>
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.name} - Antal: {item.totalQuantity} - Pris: {item.pricePerItem} ST/SEK
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

function EditProfile() {
  const [userDetails, setUserDetails] = useState(() => {
    return JSON.parse(localStorage.getItem("loggedInUser")) || {};
  });
  const [message, setMessage] = useState(""); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem("loggedInUser", JSON.stringify(userDetails));
    setMessage("Dina uppgifter har sparats!"); 
    setTimeout(() => setMessage(""), 3000); 
  };

  return (
    <div className="edit-profile">
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Förnamn:
          <input
            type="text"
            name="firstName"
            value={userDetails.firstName || ""}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Efternamn:
          <input
            type="text"
            name="lastName"
            value={userDetails.lastName || ""}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Företagsnamn:
          <input
            type="text"
            name="companyName"
            value={userDetails.companyName || ""}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Telefonnummer
          <input
            type="number"
            name="phoneNumber"
            value={userDetails.phoneNumber || ""}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Adress:
          <input
            type="text"
            name="address"
            value={userDetails.address || ""}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Stad:
          <input
            type="text"
            name="city"
            value={userDetails.city || ""}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Postnummer:
          <input
            type="text"
            name="postalCode"
            value={userDetails.postalCode || ""}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Land:
          <input
            type="text"
            name="country"
            value={userDetails.country || ""}
            onChange={handleInputChange}
          />
        </label>

        <button type="button" onClick={handleSave}>
          Spara Uppgifter
        </button>
      </form>
      {message && <p className="save-message">{message}</p>} 
    </div>
  );
}

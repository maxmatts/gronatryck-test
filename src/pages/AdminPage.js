// src/components/AdminPage.js
import React, { useEffect, useState } from 'react';
import '../styles/admin.css';

function AdminPage({ onLogout }) {
  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false); // State to control visibility of orders section

  useEffect(() => {
    const storedOrders = localStorage.getItem('customerOrders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  const toggleOrders = () => {
    setShowOrders(!showOrders);
  };

  return (
    <div className="admin-container">
      <div className="cart-heading">
        <h1 className="main-heading page-heading">Admin Panel</h1>
      </div>

      <div className="tabs">
        <button className="tab active">Dag</button>
        <button className="tab">Vecka</button>
        <button className="tab">Månad</button>
        <button className="tab">År</button>
      </div>

      <div className="admin-card-container">
        <div className="admin-card">
          <h3>Beställningar</h3>
          <div className="data">
            <span className="number">{orders.length}</span>
            <span className="percentage">+65%</span>
          </div>
        </div>

        <div className="admin-card">
          <h3>Omsättning</h3>
          <div className="data">
            <span className="number">0 SEK</span>
            <span className="percentage">+65%</span>
          </div>
        </div>

        <div className="admin-card">
          <h3>Besökare</h3>
          <div className="data">
            <span className="number">7</span>
            <span className="percentage">+0.3%</span>
          </div>
        </div>

        <div className="admin-card notes-card">
          <h3>Anteckningar</h3>
          <ul>
            <li>Inventera lagret</li>
            <li>Skicka order 123667 till annan adress enligt kundens önskemål</li>
          </ul>
        </div>
      </div>

      {/* Toggle Orders Button */}
      <button className="toggle-orders-btn" onClick={toggleOrders}>
        {showOrders ? "Dölj Ordrar" : "Visa Ordrar"}
      </button>

      {showOrders && (
        <div className="orders-list">
          <h3 className="subheading heading-3">Lista över Ordrar</h3>
          <div className="order-cards">
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <div key={index} className="order-card">
                  <h4>Order ID: {order.orderId}</h4>
                  <p><strong>Kund:</strong> {order.customerInfo.firstname} {order.customerInfo.lastname}</p>
                  <p><strong>Total Kostnad:</strong> {order.totalCost} SEK</p>
                 
                </div>
              ))
            ) : (
              <p>Inga ordrar tillgängliga.</p>
            )}
          </div>
        </div>
      )}

      <div className="logout-btn">
        <button className="main-btn" onClick={onLogout}>Logga ut</button>
      </div>
    </div>
  );
}

export default AdminPage;

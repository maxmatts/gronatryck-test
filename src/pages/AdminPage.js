// src/components/AdminPage.js
import React from 'react';
import '../styles/admin.css';

function AdminPage({ onLogout }) {
  return (
    
    <div className="admin-container">

      <div className="cart-heading">
        <h1 className='heading-3 header-label'></h1>
      </div>

    
      <div className="tabs">
        <button className="tab active">Dag</button>
        <button className="tab">Vecka</button>
        <button className="tab">Månad</button>
        <button className="tab">År</button>
      </div>



    <div className='admin-card-container'>
      <div className="admin-card">
        <h3>Beställningar</h3>
        <div className="data">
          <span className="number">3</span>
          <span className="percentage">+65%</span>
        </div>
      </div>

      <div className="admin-card">
        <h3>Omsättning</h3>
        <div className="data">
          <span className="number">15,000 SEK</span>
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


      <div className="logout-btn">
        <button className="main-btn" onClick={onLogout}>Logga ut</button>
      </div>
    </div>
  );
}

export default AdminPage;

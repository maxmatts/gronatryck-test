// src/components/AdminPage.js
import React from 'react'; // Importerar React-biblioteket
import '../styles/admin.css'; // Importerar stilmallen för admin-sidan

function AdminPage({ onLogout }) { // Tar emot en prop för logga ut-funktionalitet
  return (
    <div className="admin-container"> {/* Huvudbehållare för admin-innehållet */}

      <div className="cart-heading">
        <h1 className='heading-3 header-label'>Admin Panel</h1> {/* Rubrik för admin-sidan */}
      </div>

      {/* Tabbar för att växla mellan olika tidsperioder */}
      <div className="tabs">
        <button className="tab active">Dag</button> {/* Aktuell tab */}
        <button className="tab">Vecka</button>
        <button className="tab">Månad</button>
        <button className="tab">År</button>
      </div>

      {/* Behållare för admin-kort */}
      <div className='admin-card-container'>
        <div className="admin-card">
          <h3>Beställningar</h3> {/* Rubrik för beställningar */}
          <div className="data">
            <span className="number">3</span> {/* Visar antal beställningar */}
            <span className="percentage">+65%</span> {/* Visar procentuell förändring */}
          </div>
        </div>

        <div className="admin-card">
          <h3>Omsättning</h3> {/* Rubrik för omsättning */}
          <div className="data">
            <span className="number">15,000 SEK</span> {/* Visar omsättning */}
            <span className="percentage">+65%</span> {/* Visar procentuell förändring */}
          </div>
        </div>

        <div className="admin-card">
          <h3>Besökare</h3> {/* Rubrik för besökare */}
          <div className="data">
            <span className="number">7</span> {/* Visar antal besökare */}
            <span className="percentage">+0.3%</span> {/* Visar procentuell förändring */}
          </div>
        </div>

        {/* Anteckningskort för att visa viktiga uppgifter */}
        <div className="admin-card notes-card">
          <h3>Anteckningar</h3> {/* Rubrik för anteckningar */}
          <ul>
            <li>Inventera lagret</li> {/* Anteckning 1 */}
            <li>Skicka order 123667 till annan adress enligt kundens önskemål</li> {/* Anteckning 2 */}
          </ul>
        </div>
      </div>

      {/* Logga ut-knapp */}
      <div className="logout-btn">
        <button className="main-btn" onClick={onLogout}>Logga ut</button> {/* Anropar onLogout-funktionen vid klick */}
      </div>
    </div>
  );
}

export default AdminPage; // Exporterar AdminPage-komponenten


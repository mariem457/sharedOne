import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Centre de Transfusion Sanguine</h1>

      <div className="card-container">
        <div className="dashboard-card">
          <h2>🩸 Stocks de sang</h2>
          <p>120 unités disponibles</p>
        </div>
        <div className="dashboard-card">
          <h2>✅ Dons validés</h2>
          <p>45 dons ce mois</p>
        </div>
        <div className="dashboard-card">
          <h2>🚚 Distributions</h2>
          <p>20 livraisons effectuées</p>
        </div>
        <div className="dashboard-card">
          <h2>📅 Rendez-vous</h2>
          <p>15 rendez-vous à venir</p>
        </div>
        <div className="dashboard-card">
          <h2>🏥 Demandes</h2>
          <p>10 demandes en attente</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;




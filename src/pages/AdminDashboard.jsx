// src/pages/AdminDashboard.jsx
import React from 'react';
import BloodCard from '../components/BloodCard'; // Ensure correct import path

const AdminDashboard = () => {
  const bloodTypes = [
    { type: 'O+', units: 15, color: '#FF6B6B', icon: '🩸' },
    { type: 'O-', units: 2, color: '#FF2D2D', icon: '💉' },
    { type: 'A+', units: 8, color: '#FF8E8E', icon: '🩹' },
    { type: 'B-', units: 4, color: '#FF5252', icon: '🧪' },
    { type: 'AB+', units: 6, color: '#FF7A7A', icon: '🧬' },
  ];

  return (
    <div className="blood-dashboard">
      <header className="dashboard-header">
        <h1>
          <span className="pulse">❤️</span> Tableau de Bord Hémovigilance
        </h1>
        <div className="emergency-alert">
          <span className="blink">⚠️</span> SURVEILLANCE TEMPS RÉEL
        </div>
      </header>

      <div className="blood-grid">
        {bloodTypes.map((blood) => (
          <BloodCard 
            key={blood.type}
            type={blood.type} 
            units={blood.units}
            threshold={5}
            icon={blood.icon}
            color={blood.color}
          />
        ))}
      </div>

      <div className="dashboard-footer">
        <div className="status-indicator">
          <span className="led-green"></span> Système Opérationnel
        </div>
        <div className="last-update">
          🕒 Dernière mise à jour : {new Date().toLocaleTimeString('fr-FR')}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

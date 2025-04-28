// src/components/Demandes.jsx

import React, { useState } from 'react';
import './style.css';

function Demandes() {
  const [demandes, setDemandes] = useState([
    { hopital: 'Hôpital Charles Nicolle', groupe: 'A+', quantite: 5, date: '2025-04-16' },
    { hopital: 'Hôpital Rabta',            groupe: 'O-', quantite: 3, date: '2025-04-15' },
  ]);

  const supprimerDemande = (index) => {
    const updated = [...demandes];
    updated.splice(index, 1);
    setDemandes(updated);
  };

  return (
    <div className="main-content">
      <h2 className="page-title">🏥 Demandes des hôpitaux</h2>

      <div className="table-container">
        <table className="modern-table">
          <thead>
            <tr>
              <th>Hôpital</th>
              <th>Groupe sanguin</th>
              <th>Quantité</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {demandes.map((d, i) => (
              <tr key={i}>
                <td>{d.hopital}</td>
                <td>{d.groupe}</td>
                <td>{d.quantite}</td>
                <td>{d.date}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => supprimerDemande(i)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Demandes;


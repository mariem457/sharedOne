// src/pages/Distribution.jsx

import React, { useState } from 'react';
import './style.css';

function Distribution() {
  const [distributionData, setDistributionData] = useState([
    { hopital: 'Hôpital Charles Nicolle', groupe: 'O+', quantite: 5, date: '2025-04-14' },
    { hopital: 'Hôpital Rabta', groupe: 'A-', quantite: 3, date: '2025-04-13' },
  ]);

  const [newEntry, setNewEntry] = useState({
    hopital: '',
    groupe: '',
    quantite: '',
    date: '',
  });

  const handleAdd = () => {
    if (newEntry.hopital && newEntry.groupe && newEntry.quantite && newEntry.date) {
      setDistributionData([
        ...distributionData,
        { ...newEntry, quantite: parseInt(newEntry.quantite) },
      ]);
      setNewEntry({ hopital: '', groupe: '', quantite: '', date: '' });
    }
  };

  const handleDelete = (index) => {
    const updated = distributionData.filter((_, i) => i !== index);
    setDistributionData(updated);
  };

  return (
    <div className="main-content">
      <h2 className="page-title">🚚 Distribution de sang aux hôpitaux</h2>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          className="input-filtre"
          placeholder="Hôpital"
          value={newEntry.hopital}
          onChange={(e) => setNewEntry({ ...newEntry, hopital: e.target.value })}
        />
        <input
          type="text"
          className="input-filtre"
          placeholder="Groupe sanguin"
          value={newEntry.groupe}
          onChange={(e) => setNewEntry({ ...newEntry, groupe: e.target.value })}
        />
        <input
          type="number"
          className="input-filtre"
          placeholder="Quantité (unités)"
          value={newEntry.quantite}
          onChange={(e) => setNewEntry({ ...newEntry, quantite: e.target.value })}
        />
        <input
          type="date"
          className="input-filtre"
          value={newEntry.date}
          onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
        />
        <button
          onClick={handleAdd}
          style={{
            padding: '6px 12px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginLeft: '0.5rem',
            transition: 'background-color 0.3s ease',
          }}
        >
          Ajouter
        </button>
      </div>

      <div className="table-container">
        <table className="modern-table">
          <thead>
            <tr>
              <th>Hôpital</th>
              <th>Groupe sanguin</th>
              <th>Quantité (unités)</th>
              <th>Date d'envoi</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {distributionData.map((item, index) => (
              <tr key={index}>
                <td>{item.hopital}</td>
                <td>{item.groupe}</td>
                <td>{item.quantite}</td>
                <td>{item.date}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(index)}
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

export default Distribution;

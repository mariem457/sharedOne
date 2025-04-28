// src/pages/Dons.jsx

import React, { useState } from 'react';
import '../style.css';

function Dons() {
  const [donsData, setDonsData] = useState([
    { nom: 'Ali Ben Salem',    groupe: 'A+', date: '2025-04-15', valide: false },
    { nom: 'Sana Trabelsi',    groupe: 'O-', date: '2025-04-14', valide: false },
    { nom: 'Youssef Kefi',     groupe: 'B+', date: '2025-04-13', valide: false },
  ]);

  const [newDon, setNewDon] = useState({ nom: '', groupe: '', date: '' });

  const handleAdd = () => {
    if (newDon.nom && newDon.groupe && newDon.date) {
      setDonsData([...donsData, { ...newDon, valide: false }]);
      setNewDon({ nom: '', groupe: '', date: '' });
    }
  };

  const handleDelete = (index) => {
    setDonsData(donsData.filter((_, i) => i !== index));
  };

  const validerDon = (index) => {
    const updated = [...donsData];
    updated[index].valide = true;
    setDonsData(updated);
  };

  return (
    <div className="main-content">
      <h2 className="page-title">✅ Validation des dons</h2>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          className="input-filtre"
          placeholder="Nom du donneur"
          value={newDon.nom}
          onChange={(e) => setNewDon({ ...newDon, nom: e.target.value })}
        />
        <input
          type="text"
          className="input-filtre"
          placeholder="Groupe"
          value={newDon.groupe}
          onChange={(e) => setNewDon({ ...newDon, groupe: e.target.value })}
        />
        <input
          type="date"
          className="input-filtre"
          value={newDon.date}
          onChange={(e) => setNewDon({ ...newDon, date: e.target.value })}
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
              <th>Donneur</th>
              <th>Groupe sanguin</th>
              <th>Date du don</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {donsData.map((don, index) => (
              <tr key={index}>
                <td>{don.nom}</td>
                <td>{don.groupe}</td>
                <td>{don.date}</td>
                <td>
                  {don.valide
                    ? <span style={{ color: '#28a745', fontWeight: 'bold' }}>Validé</span>
                    : <span style={{ color: '#e67e22', fontWeight: 'bold' }}>En attente</span>
                  }
                </td>
                <td>
                  {!don.valide && (
                    <button
                      style={{
                        padding: '6px 12px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        marginRight: '8px',
                        transition: 'background-color 0.3s ease',
                      }}
                      onClick={() => validerDon(index)}
                    >
                      Valider
                    </button>
                  )}
                  <button className="delete-btn" onClick={() => handleDelete(index)}>
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

export default Dons;


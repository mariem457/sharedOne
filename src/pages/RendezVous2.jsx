import React, { useState } from 'react';
import './style.css';

function RendezVous() {
  const [rdvs, setRdvs] = useState([
    { nom: 'Mohamed', groupe: 'A+', date: '2025-04-20', heure: '10:00' },
    { nom: 'Leila', groupe: 'B-', date: '2025-04-21', heure: '14:30' }
  ]);

  const [filtre, setFiltre] = useState('');

  const supprimerRdv = (index) => {
    const copie = [...rdvs];
    copie.splice(index, 1);
    setRdvs(copie);
  };

  return (
    <div className="main-content">
      <h2 className="page-title">📅 Rendez-vous des donneurs</h2>

      <input
        type="text"
        className="input-filtre"
        placeholder="Filtrer par groupe (ex: A+)"
        value={filtre}
        onChange={e => setFiltre(e.target.value)}
      />

      <div className="table-container">
        <table className="modern-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Groupe sanguin</th>
              <th>Date</th>
              <th>Heure</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rdvs
              .filter(rdv => rdv.groupe.includes(filtre.toUpperCase()))
              .map((rdv, index) => (
                <tr key={index}>
                  <td>{rdv.nom}</td>
                  <td>{rdv.groupe}</td>
                  <td>{rdv.date}</td>
                  <td>{rdv.heure}</td>
                  <td>
                    <button className="delete-btn" onClick={() => supprimerRdv(index)}>
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

export default RendezVous;





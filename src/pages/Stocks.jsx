import React, { useState } from 'react';
import './style.css';

function Stocks() {
  const [stocks, setStocks] = useState([
    { groupe: 'A+', quantite: 12, updated: '2025-04-19' },
    { groupe: 'B-', quantite: 8,  updated: '2025-04-18' },
    { groupe: 'O+', quantite: 15, updated: '2025-04-17' },
  ]);

  const [nouveauStock, setNouveauStock] = useState({
    groupe: '',
    quantite: '',
    updated: '',
  });

  const supprimerStock = (index) => {
    const copie = [...stocks];
    copie.splice(index, 1);
    setStocks(copie);
  };

  const ajouterStock = () => {
    if (
      nouveauStock.groupe.trim() !== '' &&
      nouveauStock.quantite !== '' &&
      nouveauStock.updated !== ''
    ) {
      setStocks([...stocks, nouveauStock]);
      setNouveauStock({ groupe: '', quantite: '', updated: '' });
    }
  };

  return (
    <div className="main-content">
  <h2 className="page-title">🧪 Stocks de sang</h2>

  {/* Formulaire simple sans carte */}
  <div className="add-stock-form-simple">
    <input
      className="input-filtre"
      type="text"
      placeholder="Groupe (ex: A+)"
      value={nouveauStock.groupe}
      onChange={(e) => setNouveauStock({ ...nouveauStock, groupe: e.target.value })}
    />
    <input
      className="input-filtre"
      type="number"
      placeholder="Quantité"
      value={nouveauStock.quantite}
      onChange={(e) => setNouveauStock({ ...nouveauStock, quantite: e.target.value })}
    />
    <input
      className="input-filtre"
      type="date"
      value={nouveauStock.updated}
      onChange={(e) => setNouveauStock({ ...nouveauStock, updated: e.target.value })}
    />
    <button className="add-btn" onClick={ajouterStock}>Ajouter</button>
  </div>

  {/* Tableau stylisé comme d’habitude */}
  <div className="table-container">
    <table className="modern-table">
      <thead>
        <tr>
          <th>Groupe sanguin</th>
          <th>Quantité disponible</th>
          <th>Dernière mise à jour</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((s, i) => (
          <tr key={i}>
            <td>{s.groupe}</td>
            <td>{s.quantite}</td>
            <td>{s.updated}</td>
            <td>
              <button className="delete-btn" onClick={() => supprimerStock(i)}>Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
}

export default Stocks;



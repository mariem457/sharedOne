import React from 'react';

const ViewInfos = ({ langue }) => {
  // Données affichage (API plus tard)
  const user = {
    nom: "Takwa Bhss",
    email: "takwabhss@gmail.com",
    groupeSanguin: "O+",
    telephone: "00000000",
    ville: "Djerba"
  };

  return (
    <div className="view-infos">
      <h2>
        {langue === 'fr' ? 'Mes informations' : 'My Information'}
      </h2>
      <table className="info-table">
        <tbody>
          <tr>
            <td>👤 {langue === 'fr' ? 'Nom' : 'Name'}</td>
            <td>{user.nom}</td>
          </tr>
          <tr>
            <td>📧 {langue === 'fr' ? 'Email' : 'Email'}</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>🩸 {langue === 'fr' ? 'Groupe sanguin' : 'Blood Group'}</td>
            <td>{user.groupeSanguin}</td>
          </tr>
          <tr>
            <td>📞 {langue === 'fr' ? 'Téléphone' : 'Phone'}</td>
            <td>{user.telephone}</td>
          </tr>
          <tr>
            <td>📍 {langue === 'fr' ? 'Ville' : 'City'}</td>
            <td>{user.ville}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewInfos;

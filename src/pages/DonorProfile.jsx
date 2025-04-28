import React from "react";

const DonorProfile = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <h2>Profil Donneur</h2>
        <span className="blood-icon">🩸</span>
      </div>
      <div className="profile-info">
        <div className="info-text">
          <p><strong>Mail :</strong> takwabhs@gmail.com</p>
          <p><strong>Groupe sanguin :</strong> O+</p>
          <p><strong>Dons :</strong> 3</p>
          <p><strong>Téléphone :</strong> 00000000</p>
          <p><strong>Ville :</strong> Djerba</p>
        </div>
        <div className="profile-img">
          <img src="https://via.placeholder.com/100" alt="Donneur" />
        </div>
      </div>
    </div>
  );
};

export default DonorProfile;

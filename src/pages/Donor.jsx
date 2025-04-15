import React from 'react';
import { useNavigate } from 'react-router-dom';

const Donor = () => {
  const navigate = useNavigate();
  const phone = localStorage.getItem("phone");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("phone");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Bienvenue, Donneur 🩸</h1>
      <p>Merci pour votre générosité !</p>

      <div style={styles.cardContainer}>
        <div style={styles.card} onClick={() => alert("Affichage des infos personnelles")}>
          📄 <br /> Infos personnelles
        </div>
        <div style={styles.card} onClick={() => alert("Redirection vers la prise de rendez-vous")}>
          📅 <br /> Prendre rendez-vous
        </div>
        <div style={styles.card} onClick={() => alert("Historique des dons")}>
          📊 <br /> Mes dons
        </div>
        <div style={styles.card} onClick={handleLogout}>
          🚪 <br /> Déconnexion
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
    background: "#f8f8f8",
    minHeight: "100vh",
  },
  header: {
    fontSize: "2rem",
    color: "#b30000",
  },
  cardContainer: {
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
  },
  card: {
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "1.5rem",
    width: "180px",
    height: "130px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#333",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.2s",
  },
};

export default Donor;

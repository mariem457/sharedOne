import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RendezVous.css';

const RendezVous = () => {
  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "5px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px"
  };

  const [formData, setFormData] = useState({
    date: '',
    heure: '',
    lieu: '',
    type: 'Sang total'
  });

  const [dateError, setDateError] = useState('');
  const [rendezVousList, setRendezVousList] = useState([]);

  useEffect(() => {
    const fetchRendezVous = async () => {
      try {
        const response = await axios.get("http://localhost:5131/api/RendezVous");
        setRendezVousList(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération :", error);
      }
    };

    fetchRendezVous();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Validation immédiate si date modifiée
    if (name === "date") {
      const today = new Date();
      const chosenDate = new Date(value);
      if (chosenDate < new Date(today.setHours(0, 0, 0, 0))) {
        setDateError("❌ La date ne peut pas être dans le passé.");
      } else {
        setDateError("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const today = new Date();
    const chosenDate = new Date(formData.date);
    if (chosenDate < new Date(today.setHours(0, 0, 0, 0))) {
      setDateError("❌ La date ne peut pas être dans le passé.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5131/api/RendezVous",
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      alert("✅ Rendez-vous enregistré avec succès !");
      const updatedList = await axios.get("http://localhost:5131/api/RendezVous");
      setRendezVousList(updatedList.data);
      setFormData({ date: '', heure: '', lieu: '', type: 'Sang total' });
    } catch (err) {
      console.error("Erreur complète:", err);
      alert("Erreur: " + (err.response?.data || err.message));
    }
  };

  return (
    <div
      className="arriere-plan2"
      style={{
        backgroundImage: "url('/background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className='darkcouche'>
        <h1 style={{ color: 'white', textAlign: "center" }}>Page Rendez-Vous</h1>
        <div className='arriere-plan rv_arriere'>
          <div style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}>
            <h1 style={{
              color: "#8B0000",
              marginBottom: "20px",
              fontFamily: "Arial, sans-serif",
              position: "absolute",
            }}>
              Prendre un rendez-vous
            </h1>

            <form
              onSubmit={handleSubmit}
              style={{
                position: "absolute",
                bottom: 90,
                backgroundColor: "rgba(219, 216, 216, 0.7)",
                padding: "30px",
                borderRadius: "20px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                width: "90%",
                maxWidth: "400px"
              }}
            >
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split("T")[0]} // empêche la sélection de dates passées
                style={inputStyle}
              />
              {dateError && (
                <p style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>{dateError}</p>
              )}

              <input
                type="time"
                name="heure"
                value={formData.heure}
                onChange={handleChange}
                required
                style={inputStyle}
              />
             <select
  name="lieu"
  value={formData.lieu}
  onChange={handleChange}
  required
  style={inputStyle}
>
  <option value="">-- Sélectionner un lieu --</option>
  <option value="Le centre national de Tunis">Le centre national de Tunis</option>
  <option value="Le centre régional de Sousse">Le centre régional de Sousse</option>
  <option value="Le centre régional de Sfax">Le centre régional de Sfax</option>
  <option value="Le centre régional de Jendouba">Le centre régional de Jendouba</option>
  <option value="Le centre régional de Gabès">Le centre régional de Gabès</option>
  <option value="Le centre régional de Gafsa">Le centre régional de Gafsa</option>
  <option value="Les banques de sang">Les banques de sang</option>
</select>

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                style={inputStyle}
              >
                <option>Sang total</option>
                <option>Plasma</option>
                <option>Plaquettes</option>
              </select>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#8B0000",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  marginTop: "10px"
                }}
              >
                Confirmer
              </button>
            </form>

            {/* Liste des rendez-vous */}
            <div style={{
              position: "absolute",
              bottom: -200,
              marginTop: "30px",
              color: "white",
              textAlign: "center"
            }}>
              
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RendezVous;

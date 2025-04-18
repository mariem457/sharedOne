import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutDonation.css';

const AboutDonation = () => {
  const navigate = useNavigate();

  const donationFacts = [
    {
      title: "Pourquoi donner son sang?",
      content: "Le sang ne peut être fabriqué artificiellement. Le don de sang est donc indispensable pour sauver des vies chaque jour."
    },
    {
      title: "Qui peut donner?",
      content: "Toute personne en bonne santé, âgée de 18 à 70 ans et pesant plus de 50kg peut donner son sang."
    },
    {
      title: "Combien de temps ça prend?",
      content: "Un don de sang prend environ 45 minutes, dont seulement 10 minutes pour le prélèvement."
    },
    {
      title: "À quelle fréquence?",
      content: "Les hommes peuvent donner jusqu'à 6 fois par an, les femmes jusqu'à 4 fois, avec un intervalle de 8 semaines minimum."
    }
  ];

  const donationProcess = [
    "Inscription et questionnaire médical",
    "Entretien avec un médecin",
    "Prélèvement du sang (environ 450ml)",
    "Collation offerte après le don"
  ];

  return (
    <div className="about-donation">
      <div className="hero-section">
        <h1>Le Don de Sang: Un Acte Solidaire</h1>
        <p>Découvrez pourquoi et comment votre don fait la différence</p>
      </div>

      <div className="content-section">
        <div className="facts-container">
          <h2>Informations Essentielles</h2>
          <div className="facts-grid">
            {donationFacts.map((fact, index) => (
              <div key={index} className="fact-card">
                <h3>{fact.title}</h3>
                <p>{fact.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="process-container">
          <h2>Comment se déroule un don?</h2>
          <ul className="process-steps">
            {donationProcess.map((step, index) => (
              <li key={index}>
                <span className="step-number">{index + 1}</span>
                <span className="step-text">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="benefits-container">
          <h2>Les Bienfaits du Don</h2>
          <div className="benefits-list">
            <div className="benefit">
              <h3>Pour les receveurs</h3>
              <ul>
                <li>Sauve des vies lors d'opérations chirurgicales</li>
                <li>Aide les patients atteints de cancer</li>
                <li>Permet de traiter les hémorragies</li>
              </ul>
            </div>
            <div className="benefit">
              <h3>Pour les donneurs</h3>
              <ul>
                <li>Bilan médical gratuit</li>
                <li>Satisfaction d'aider son prochain</li>
                <li>Stimulation de la production de sang</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Prêt à faire la différence?</h2>
          <button 
            className="donate-now-btn"
            onClick={() => navigate('/donation-appointment')}
          >
            Prendre rendez-vous
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutDonation;
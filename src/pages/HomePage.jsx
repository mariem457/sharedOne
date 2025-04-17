import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importation de useNavigate
import './HomePage.css';
import im2 from './image2.jpg';
import insc from './inscription.jpg';
import rend from './rendez-vous.jpg';
import don from './don.jpg';
import cube from './cube.png';
import logo from './logo.jpg'

const HomePage = () => {
  const navigate = useNavigate(); // Création du hook navigate

  const handleNavigate = (path) => {
    navigate(path); // Redirection vers la page spécifiée
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo"> <img src={logo} alt="logo" /></div>
        <div className='hhh'>
          <ul>
           
            <li>
              <a
                href="#"
                onClick={() => handleNavigate('/about')} // Redirection sur le lien À propos
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleNavigate('/contact')} // Redirection sur le lien Contact
              >
                Contact
              </a>
            </li> 
           
            <button 
              className="nav-button" 
              onClick={() => handleNavigate('/signup')} // Redirection sur le bouton S'inscrire
            >
              S'inscrire
            </button>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>
            Sauvez des vies, <br /> donnez votre sang
          </h1>
          <p>
            Chaque don de sang peut sauver jusqu’à trois vies. Rejoignez-nous
            dans cette noble cause et faites la différence aujourd’hui.
          </p>
          <button className="cta-button" onClick={() => handleNavigate('/signup')}>S'inscrire</button> {/* Redirection sur le bouton S'inscrire */}
        </div>
      </div>
      
      <div className="blood-donation-container">
        <div className="description-box">
          <h1>Pourquoi le don de sang est essentiel pour notre société</h1>
        </div>  
        <div className="description-box">
          <p>
            Le don de sang sauve des vies et est crucial pour les patients ayant besoin de transfusions. 
            Chaque don peut aider plusieurs personnes, en particulier lors d'urgences médicales. 
            En donnant votre sang, vous participez activement à la santé de votre communauté.
          </p>
        </div>
      </div>

      <div className='card3'>
        <div className="card">
          <img src={cube} alt="cube" />
          <h2>Un acte de solidarité et de générosité</h2>
          <p>Donner du sang est un geste altruiste qui renforce les liens communautaires.</p>
          <button className="action-button icon-button">
            En savoir plus <span className="arrow">&gt;</span>
          </button>
        </div>

        <div className="card"> 
          <img src={cube} alt="cube" />
          <h2>Une ressource précieuse en cas d'urgence</h2>
          <p>Les hôpitaux dépendent des dons de sang pour traiter les patients en urgence.</p>
          <button className="action-button icon-button">
            Agir maintenant <span className="arrow">&gt;</span>
          </button>
        </div>

        <div className="card">
          <img src={cube} alt="cube" />
          <h2>Un besoin constant de dons de sang</h2>
          <p>Les besoins en sang sont permanents et doivent être satisfaits régulièrement.</p>
          <button className="action-button icon-button">
            Participez <span className="arrow">&gt;</span>
          </button>
        </div>
      </div>

      <div className="donation-stats-container">
        <div className='stats-content'>
          <div className='h21'>
            <h2 >Impact</h2>
          </div>
          <div className='h12'>
            <h1>Chiffres clés sur le don de sang</h1>
          </div>
          <p className="intro-text">
            Chaque don de sang compte et peut sauver des vies. Découvrez l'impact significatif de votre générosité.
          </p>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">1000</div>
              <div className="stat-label">Dons effectués cette année</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">5000</div>
              <div className="stat-label">Vies sauvées grâce à vos dons</div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="action-button">En savoir plus</button>
            <button className="action-button icon-button">
              Partager <span className="arrow">&gt;</span>
            </button>
          </div>
        </div>

        <div className='image-container'>
          <img src={im2} alt="Illustration don de sang" />
        </div>
      </div>

      <div className="how-to-donate">
        <div className='partie1'>
          <h1 className="title">Découvrez comment donner votre sang facilement</h1>
          <p className="description">
            Donner du sang est un acte de solidarité essentiel. Notre plateforme simplifie le processus pour les donneurs,
            les centres de transfusion et les hôpitaux. Suivez ces étapes simples pour contribuer à sauver des vies.
          </p>
        </div>

        <div className="steps">
          {/* Étape 1 */}
          <div className="step">
            <div className="step-card">
              <img src={insc} alt="Inscription" className="step-img" />
            </div>
            <h2 className="step-title">Étape 1 : Inscription rapide et facile</h2>
            <p className="step-desc">Inscrivez-vous en quelques clics pour commencer.</p>
          </div>

          {/* Étape 2 */}
          <div className="step">
            <div className="step-card">
              <img src={rend} alt="Rendez-vous" className="step-img" />
            </div>
            <h2 className="step-title">Étape 2 : Planifiez votre rendez-vous</h2>
            <p className="step-desc">Choisissez un créneau horaire qui vous convient.</p>
          </div>

          {/* Étape 3 */}
          <div className="step">
            <div className="step-card">
              <img src={don} alt="Faire un don" className="step-img" />
            </div>
            <h2 className="step-title">Étape 3 : Faites votre don de sang</h2>
            <p className="step-desc">Rendez-vous au centre de transfusion pour donner.</p>
          </div>
        </div>
        <div className="butt">
          <button className="action-button">commencer</button>
          <button className="action-button icon-button">
            en savoir plus <span className="arrow">&gt;</span>
          </button>
        </div>
      </div>

      <div className="footer">
  <div className="footer-section logo-section">
    <img src={logo} alt="Logo" />
  </div>

  <div className="footer-section">
    <h4>Liens utiles</h4>
    <ul>
      <li><a href="/a-propos">À propos</a></li>
      <li><a href="/evenements">Événements</a></li>
    </ul>
  </div>

  <div className="footer-section">
    <h4>Ressources</h4>
    <ul>
      <li><a href="/faq">FAQ</a></li>
      <li><a href="/temoignages">Témoignages</a></li>
    </ul>
  </div>

  <div className="footer-section">
    <h4>Abonnez-vous</h4>
    <ul>
      <li><a href="/reseaux-sociaux">Réseaux sociaux</a></li>
      <li><a href="/signup">S'inscrire</a></li>
    </ul>
  </div>
</div>

    </div>
  );
};

export default HomePage;





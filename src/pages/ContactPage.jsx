import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Importation de useNavigate et Link
import './ContactPage.css';
import im2 from './image2.jpg';
import logo from './logo.jpg';

const ContactPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/signup');
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo"><img src={logo} alt="logo" /></div>
        <div className="hhh">
          <ul>
            <li><Link to="/about">À propos</Link></li>
            <button className="nav-button" onClick={handleNavigate}>S'inscrire</button>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Nous contacter</h1>
          <p>
            Vous avez des questions ? Nous sommes là pour vous aider. Contactez-nous pour plus d'informations sur le don de sang.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="contact-info-container">
        <div className="contact-description">
          <h1>Contactez-nous pour toute information supplémentaire</h1>
          <p>
            Notre équipe est disponible pour répondre à toutes vos questions concernant le processus de don de sang. 
            N'hésitez pas à nous contacter via les canaux ci-dessous.
          </p>
        </div>

        <div className="contact-details">
          <div className="contact-card">
            <h2>Email</h2>
            <p>contact@donneesang.com</p>
          </div>

          <div className="contact-card">
            <h2>Téléphone</h2>
            <p>+216 123 456 789</p>
          </div>

          <div className="contact-card">
            <h2>Adresse</h2>
            <p>123 Rue de la Solidarité, Tunis, Tunisie</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <h2>Envoyez-nous un message</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" placeholder="Votre nom" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Votre email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Votre message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Envoyer</button>
        </form>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-section logo-section">
          <img src={logo} alt="Logo" />
        </div>

        <div className="footer-section">
          <h4>Liens utiles</h4>
          <ul>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/evenements">Événements</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Ressources</h4>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/temoignages">Témoignages</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Abonnez-vous</h4>
          <ul>
            <li><Link to="/reseaux-sociaux">Réseaux sociaux</Link></li>
            <li><Link to="/signup">S'inscrire</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

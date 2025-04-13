import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importation de useNavigate
import './ContactPage.css';
import im2 from './image2.jpg';


const ContactPage = () => {
  const navigate = useNavigate(); // Création du hook navigate

  const handleNavigate = () => {
    navigate('/signup'); // Redirection vers la page Signup
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Logo</div>
        <div className="hhh">
          <ul>
            <li><a href="Services">Services</a></li>
            <li><a href="À propos">À propos</a></li>
            
            <button className="nav-button" onClick={handleNavigate}>Rejoindre</button>
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
            <label for="name">Nom</label>
            <input type="text" id="name" placeholder="Votre nom" required />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Votre email" required />
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea id="message" placeholder="Votre message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Envoyer</button>
        </form>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="logo">Logo</div>

        <div className='pa1'>
          <div className='lien-utils'>
            <p>Liens utiles</p>
            <ul>
              <li><a href="a propos">A propos</a></li>
              <li><a href="contact">Contactez nous</a></li>
              <li><a href="services">Nos services</a></li>
              <li><a href="blog">Blog</a></li>
              <li><a href="evenements">Evenements</a></li>
            </ul>
          </div>
        </div>

        <div className='pa2'>
          <div className='lien-utils'>
            <p>Ressources</p>
            <ul>
              <li><a href="faq">FAQ</a></li>
              <li><a href="temoignages">Témoignages</a></li>
              <li><a href="partenaires">Partenaires</a></li>
              <li><a href="soutien">Soutien</a></li>
              <li><a href="carrieres">Carriéres</a></li>
            </ul>
          </div>
        </div>

        <div className='pa3'>
          <div className='lien-utils'>
            <p>Abonnez-vous</p>
            <ul>
              <li><a href="nouvelles">Nouvelles</a></li>
              <li><a href="mises-a-jour">Mises à jour</a></li>
              <li><a href="offres-speciaux">Offres spéciales</a></li>
              <li><a href="reseaux-sociaux">Réseaux Sociaux</a></li>
              <li><a href="inscription">S'inscrire</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

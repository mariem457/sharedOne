import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Logique de connexion (à implémenter, par exemple via une API)
    console.log('Email:', email);
    console.log('Password:', password);

    // Après une connexion réussie, rediriger l'utilisateur
    navigate('/'); // Rediriger vers la page d'accueil après la connexion
  };

  const handleNavigateSignup = () => {
    navigate('/signup'); // Rediriger vers la page d'inscription
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Logo</div>
        <div className="hhh">
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/apropos">À propos</a></li>
            <li><a href="/contact">Contact</a></li>
            {/* Bouton pour revenir à l'accueil */}
            <button className="nav-button" onClick={() => navigate('/')}>Retour à l'accueil</button>
          </ul>
        </div>
      </nav>

      {/* Formulaire de connexion */}
      <div className="form-container">
        <div className="form-box">
          <h2>Connexion</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Votre mot de passe"
                required
              />
            </div>

            <button type="submit" className="cta-button">Se connecter</button>
          </form>

          {/* Lien vers la page d'inscription */}
          <div className="signup-link">
  <button className="signup-button" onClick={handleNavigateSignup}>S'inscrire</button>
  
 
 
 

  </div>
  </div>
  </div>

      {/* Image et Footer */}
      <div className="image-container">
        {/* Ajoutez des images ici si nécessaire */}
      </div>

      {/* Footer */}
      
      <div className='footer'>
        <div className="logo">Logo</div>

        <div className='pa1'>
          <div className='lien-utils'>
            <p>Liens utiles</p>
            <ul>
              <li><a href="a propos">A propos</a></li>
              <li><a href="a propos">Contactez nous</a></li>
              <li><a href="a propos">Nos services</a></li>
              <li><a href="a propos">Blog</a></li>
              <li><a href="a propos">Evenements</a></li>
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

export default LoginPage;

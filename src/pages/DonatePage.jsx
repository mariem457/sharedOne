import React, { useState } from 'react';
import { useNavigate , Link} from 'react-router-dom';
import './DonatePage.css';
import logo from './logo.jpg'

const SignupPage = () => {
  const navigate = useNavigate();
  
 //nous permet de suivre q'est ce que l'utilisteur tape

  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Password: '',
    ConfirmePassword: '',
    Role: 'Donor' //valeur par défaut 
  });
// ki nhib nbadil fi les champs hiya ta3mil mise a jour lil les champs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleNavigateLogin = () => {
    navigate('/login');
  };
//
  const handleSubmit = async (e) => { ////Empêche le rechargement automatique de la page
    e.preventDefault();

    if (formData.Password !== formData.ConfirmePassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }
//Envoie les données au backend via une requête POST
    try {
      const response = await fetch('http://localhost:5216/api/donors/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Name: formData.Name,
          Email: formData.Email,
          Phone: formData.Phone,
          Password: formData.Password,
          ConfirmePassword: formData.ConfirmePassword,
          Role: formData.Role 
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert('Inscription réussie');
        navigate('/thankyou'); 
      } else {
        alert("Erreur lors de l'inscription : " + (data.title || 'Erreur inconnue'));
      }
    } catch (error) {
      alert('Erreur de réseau ou serveur injoignable : ' + error.message);
    }
  };

  return (
    <div>
    
      <nav className="navbar">
        <div className="logo"><img src={logo} alt="logo" /></div>
        <div className="hhh">
          <ul>
            
          <li><Link to="/about">À propos</Link></li>
            <li><Link to ="/contact">Contact</Link></li>
            <button className="nav-button" onClick={handleNavigateHome}>Retour à l'accueil</button>
          </ul>
        </div>
      </nav>

      
      <div className="form-container">
        <div className="form-box">
          <h2>Formulaire d'inscription</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Nom complet</label>
              <input
                type="text"
                id="name"
                name="Name"
                placeholder="Votre nom"
                value={formData.Name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="Email"
                placeholder="Votre email"
                value={formData.Email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="Phone">Numéro de téléphone</label>
              <input
                type="tel"
                id="phone"
                name="Phone"
                placeholder="Votre numéro"
                value={formData.Phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                name="Password"
                placeholder="Votre mot de passe"
                value={formData.Password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="confirmePassword">Confirmer le mot de passe</label>
              <input
                type="password"
                id="confirmePassword"
                name="ConfirmePassword"
                placeholder="Confirmer le mot de passe"
                value={formData.ConfirmePassword}
                onChange={handleInputChange}
                required
              />
            </div>

        
            <div className="form-field">
              <label htmlFor="role">Rôle</label>
              <select
                name="Role"
                id="role"
                value={formData.Role}
                onChange={handleInputChange}
              >
                <option value="Donor">Donneur</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <button type="submit" className="cta-button">S'inscrire</button>
          </form>

          <div className="login-link">
            <p>Vous avez déjà un compte ? <button className="login-button" onClick={handleNavigateLogin}>Se connecter</button></p>
          </div>
        </div>
      </div>
      
      <div className="footer">
  <div className="footer-section logo-section">
    <img src={logo} alt="Logo" />
  </div>

  <div className="footer-section">
    <h4>Liens utiles</h4>
    <ul>
        <li><Link to="/about">À propos</Link></li>
        <li>< Link to="/evenements">Événements</Link></li>
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

export default SignupPage;

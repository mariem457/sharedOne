import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DonatePage.css';

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Password: '',
    ConfirmePassword: '',
    Role: 'Donor' // Valeur par défaut du rôle
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.Password !== formData.ConfirmePassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }

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
          Role: formData.Role // Ajout du rôle dans la requête
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert('Inscription réussie');
        navigate('/thankyou'); // Navigate vers la page de remerciement
      } else {
        alert("Erreur lors de l'inscription : " + (data.title || 'Erreur inconnue'));
      }
    } catch (error) {
      alert('Erreur de réseau ou serveur injoignable : ' + error.message);
    }
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
            <button className="nav-button" onClick={handleNavigateHome}>Retour à l'accueil</button>
          </ul>
        </div>
      </nav>

      {/* Formulaire d'inscription */}
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

            {/* Sélection du rôle */}
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
      </div>
    </div>
  );
};

export default SignupPage;

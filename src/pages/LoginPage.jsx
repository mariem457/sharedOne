import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; //axios : pour envoyer des requêtes HTTP (ici pour la connexion)
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      // Effectuer la requête POST pour l'authentification
      const response = await axios.post('http://localhost:5216/api/donors/login', {
        phone,
        password,
      });

      const { token, role } = response.data; // Récupère le token et le rôle

      console.log('Response Data:', response.data);  // Debug : vérifier la réponse

      // Vérifier si le rôle est bien présent
      if (!role) {
        throw new Error('Role missing in the response');
      }

      // Stocker le token et le rôle dans localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      // Debug : Vérifie la réponse et redirige
      console.log('Token:', token);
      console.log('Role:', role);

      // Rediriger selon le rôle
      if (role === 'Admin') {
        // Rediriger vers la page admin si le rôle est Admin
        navigate('/admin-dashboard');
      } else if (role === 'Donor') {
        // Rediriger vers la page des donneurs si le rôle est Donor
        navigate('/donor');
      } else {
        setError('Role inconnu. Redirection échouée.');
      }
    } catch (err) {
      console.error('Login Error:', err);
      setError(err.response?.data || 'Erreur lors de la connexion.');
    }
  };

  const handleNavigateSignup = () => {
    navigate('/signup');
  };
  const handleNavigateForgotPassword = () => {
    navigate('/forgot');
  };

  return (
    <div>

      

      <div className="form-container">
        <div className="form-box">
          <h2>Connexion</h2>
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          <form onSubmit={handleLoginSubmit}>
            <div className="form-field">
              <label htmlFor="phone">Numéro de téléphone</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Votre numéro de téléphone"
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
          <div className="auth-buttons">
                    <button className="auth-button" onClick={handleNavigateSignup}>
                      S'inscrire
                    </button>
                    <button className="auth-button" onClick={handleNavigateForgotPassword}>
                      Mot de passe oublié ?
                    </button>
                  </div>

        </div>
      </div>

      {/* Footer (si nécessaire) */}
    </div>
  );
};

export default LoginPage;





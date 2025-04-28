import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import DonorDashboard from './DonorDashboard';
const LoginPage = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Role selected:', role); // Vérifie ici la valeur du rôle

    
    try {
      // Simuler la logique d'authentification avec téléphone et mot de passe
      if (!phone || !password) {
        setError('Numéro de téléphone et mot de passe requis');

        console.log('Navigation vers la page de test...');
  navigate('/home');
        return;
      }

      // Sauvegarder le rôle dans localStorage
      localStorage.setItem('userRole', role);

      // Redirection en fonction du rôle
      if (role === 'Admin') {
        navigate('/admin-dashboard');
      } else if (role === 'Donor') {
        navigate('/donor-dashboard'); // Redirection vers DonorDashboard
      } else if (role === 'Center') {
        navigate('/center-dashboard');
      } else {
        alert("Rôle inconnu. Redirection échouée.");
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
    <div className="form-container">
      <div className="form-box">
        <h2>Connexion</h2>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
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
          <div className="form-field">
            <label htmlFor="role">Choisissez votre rôle :</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Sélectionner un rôle</option>
              <option value="Admin">Admin</option>
              <option value="Donor">Donneur</option>
              <option value="Center">Centre de Don</option>
            </select>
          </div>
          <button type="submit" className="login-cta-button">Se connecter</button>
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
  );
};

export default LoginPage;

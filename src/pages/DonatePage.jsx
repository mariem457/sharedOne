import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './DonatePage.css';
import logo from './logo.jpg';

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Password: '',
    ConfirmePassword: '',
    Role: 'Donor',
    BirthDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNavigateHome = () => navigate('/');
  const handleNavigateLogin = () => navigate('/login');

  const validateForm = () => {
    const phoneRegex = /^\d+$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

    if (!phoneRegex.test(formData.Phone)) {
      alert("Le numéro de téléphone ne doit contenir que des chiffres.");
      return false;
    }

    if (!passwordRegex.test(formData.Password)) {
      alert("Le mot de passe doit contenir au moins 8 caractères, une lettre, un chiffre et un symbole.");
      return false;
    }

    if (formData.Password !== formData.ConfirmePassword) {
      alert('Les mots de passe ne correspondent pas.');
      return false;
    }

    const birthDate = new Date(formData.BirthDate);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (
      age < 18 ||
      (age === 18 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))
    ) {
      alert("Vous devez avoir au moins 18 ans pour vous inscrire.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch('http://localhost:5216/api/donors/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const text = await response.text();
      const data = (() => {
        try {
          return JSON.parse(text);
        } catch {
          return { title: text };
        }
      })();

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
            <li><Link to="/contact">Contact</Link></li>
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
              <input type="text" id="name" name="Name" value={formData.Name} onChange={handleInputChange} required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="Email" value={formData.Email} onChange={handleInputChange} required />
            </div>
            <div className="form-field">
              <label htmlFor="Phone">Numéro de téléphone</label>
              <input type="tel" id="phone" name="Phone" value={formData.Phone} onChange={handleInputChange} required />
            </div>
            <div className="form-field">
              <label htmlFor="birthDate">Date de naissance</label>
              <input type="date" id="birthDate" name="BirthDate" value={formData.BirthDate} onChange={handleInputChange} required />
            </div>
            <div className="form-field">
              <label htmlFor="password">Mot de passe</label>
              <input type="password" id="password" name="Password" value={formData.Password} onChange={handleInputChange} required />
            </div>
            <div className="form-field">
              <label htmlFor="confirmePassword">Confirmer le mot de passe</label>
              <input type="password" id="confirmePassword" name="ConfirmePassword" value={formData.ConfirmePassword} onChange={handleInputChange} required />
            </div>
            <div className="form-field">
              <label htmlFor="role">Rôle</label>
              <select name="Role" id="role" value={formData.Role} onChange={handleInputChange}>
                <option value="Donor">Donneur</option>
                <option value="Admin">Admin</option>
                <option value="Center">Centre de transfusion</option>
              </select>
            </div>
            <button type="submit" className="cta-button">S'inscrire</button>
          </form>

          <div className="login-link">
            <p>Vous avez déjà un compte ? <button className="login-button" onClick={handleNavigateLogin}>Se connecter</button></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

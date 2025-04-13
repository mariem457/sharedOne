import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ThankYouPage.css';

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div className="thankyou-container">
      <h1>Merci pour votre inscription !</h1>
      <p>Nous vous avons envoyé un e-mail de confirmation. Vous pouvez maintenant vous connecter.</p>
      <button onClick={() => navigate('/login')} className="cta-button">
        Aller à la connexion
      </button>
    </div>
  );
};

export default ThankYouPage;


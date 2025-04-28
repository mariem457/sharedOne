import React,{ useState } from 'react';
import ChangePassword from './ChangePassword';
import ViewInfos from './ViewInfos';
import LanguageSettings from './Langue';
import './Parametres.css';

const Parametres = () => {
  const [langue, setLangue] = useState('fr'); 

  return (
    <div className="parametres-wrapper">
      <h2 className="section-title">{langue === 'fr' ? 'parametres' : 'settings'}</h2>

      <div className="param-section">
        <div className="param-header">
          <span role="img" aria-label="password">🔐</span>
          <h3>{langue === 'fr' ? 'Changer le mot de passe' : 'Change Password'}</h3>
        </div>
        <ChangePassword />
      </div>

      <div className="param-section">
        <div className="param-header">
          <span role="img" aria-label="account">👤</span>
          <h3>{langue === 'fr' ? 'Information du compte' : 'Account Information'}</h3>
        </div>
        <ViewInfos />
      </div>

      <div className="param-section">
        <div className="param-header">
          <span role="img" aria-label="language">🌍</span>
          <h3> {langue === 'fr' ? 'Langue' : 'Language'}</h3>
        </div>
        <LanguageSettings langue={langue} setLangue={setLangue} />
      </div>
    </div>
  );
};

export default Parametres;

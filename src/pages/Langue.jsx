import React from 'react';

const LanguageSettings = ({ langue, setLangue }) => {
  const changerLangue = (e) => {
    setLangue(e.target.value);
  };

  return (
    <div>
      <select value={langue} onChange={changerLangue}>
        <option value="fr">Français</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LanguageSettings;

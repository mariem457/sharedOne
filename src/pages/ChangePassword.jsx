import React, { useState } from 'react';


const ChangePassword = () => {
  const [currentPwd, setCurrentPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPwd !== confirmPwd) {
      setMessage("❌ Les nouveaux mots de passe ne correspondent pas.");
    } else {
      // Ici, on pourrait envoyer à l'API
      setMessage("✅ Mot de passe modifié avec succès !");
      setCurrentPwd('');
      setNewPwd('');
      setConfirmPwd('');
    }
  };

  return (
    <div className="change-password">
      <h2>Changer le mot de passe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Ancien mot de passe :
          <input
            type="password"
            value={currentPwd}
            onChange={(e) => setCurrentPwd(e.target.value)}
            required
          />
        </label>
        <label>
          Nouveau mot de passe :
          <input
            type="password"
            value={newPwd}
            onChange={(e) => setNewPwd(e.target.value)}
            required
          />
        </label>
        <label>
          Confirmer le nouveau mot de passe :
          <input
            type="password"
            value={confirmPwd}
            onChange={(e) => setConfirmPwd(e.target.value)}
            required
          />
        </label>
        <button type="submit">Enregistrer</button>
      </form>
      {message && <p className="password-message">{message}</p>}
    </div>
  );
};

export default ChangePassword;

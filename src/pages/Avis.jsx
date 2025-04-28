import React from 'react';

const Avis = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Laisser un avis</h2>
      <textarea placeholder="Écris ton avis ici..." style={styles.textarea} />
      <button style={styles.button}>Envoyer</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  title: {
    color: '#8B0000',
    marginBottom: '20px',
  },
  textarea: {
    width: '100%',
    height: '150px',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#8B0000',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Avis;

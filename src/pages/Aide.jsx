import React from 'react';

const Aide = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Besoin d'aide ?</h2>
      <ul style={styles.list}>
        <li>📅 Comment prendre un rendez-vous ?</li>
        <li>🩸 Quels sont les critères pour donner du sang ?</li>
        <li>📍 Où se trouvent les centres de don ?</li>
        <li>🔐 Comment modifier mes informations ?</li>
      </ul>
      <p style={styles.text}>
        Si vous avez besoin d'assistance, contactez-nous par email : <strong>support@dondugsang.tn</strong>
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#fff',
    minHeight: '100vh',
  },
  title: {
    color: '#8B0000',
    marginBottom: '20px',
  },
  list: {
    lineHeight: '2',
    marginBottom: '30px',
  },
  text: {
    fontSize: '16px',
    color: '#333',
  },
};

export default Aide;

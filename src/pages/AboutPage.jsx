import React from 'react';
import './AboutPage.css'; // Ajoute ta feuille de style personnalisée

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>À propos de notre plateforme</h1>
      </header>

      <section className="about-content">
        <h2>Notre Mission</h2>
        <p>
          Nous avons créé cette plateforme dans le but de simplifier le processus de don de sang et d’optimiser l’approvisionnement
          en sang pour les hôpitaux et les centres de transfusion. Notre objectif est de sauver des vies en facilitant l'accès aux
          dons de sang.
        </p>

        <h2>Pourquoi le don de sang est important ?</h2>
        <p>
          Le don de sang est essentiel pour la santé publique. Chaque jour, des milliers de personnes ont besoin de transfusions
          sanguines, que ce soit pour des opérations chirurgicales, des traitements contre le cancer, ou des accidents graves. Sans
          dons réguliers, ces vies sont en danger.
        </p>

        <h2>Notre Engagement</h2>
        <p>
          Nous nous engageons à fournir une plateforme simple, sécurisée et transparente pour que les donneurs puissent facilement
          s'inscrire, planifier leur rendez-vous et suivre l'impact de leur geste. Nous nous efforçons également de maintenir une
          communication constante avec les hôpitaux et les centres de transfusion afin de répondre à leurs besoins en sang.
        </p>
      </section>

      <footer className="about-footer">
        <p>&copy; 2025 Plateforme de gestion du don de sang. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default AboutPage;

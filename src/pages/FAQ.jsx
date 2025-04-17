import React, { useState } from 'react';
import './Faq.css';
import ChatBot from './ChatBot';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "Comment puis-je m'inscrire pour donner du sang ?",
      answer: "Vous pouvez vous inscrire via notre formulaire en ligne ou contacter le centre de don le plus proche."
    },
    {
      question: "À quelle fréquence puis-je donner du sang ?",
      answer: "En général, toutes les 8 semaines pour les hommes et 12 semaines pour les femmes."
    },
    {
      question: "Le don de sang est-il sûr ?",
      answer: "Oui, tout le matériel utilisé est stérile et à usage unique."
    },
    {
      question: "Que faire après un don ?",
      answer: "Buvez beaucoup d’eau, reposez-vous, et évitez les activités physiques intenses pour le reste de la journée."
    }
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Foire Aux Questions (FAQ)</h2>
      <div className="faq-list">
        {questions.map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              {item.question}
              <span>{activeIndex === index ? '−' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
      
      <ChatBot />
    </div>
  );
}

export default FAQ;

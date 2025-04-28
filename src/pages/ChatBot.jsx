import React, { useState } from 'react';
import './ChatBot.css';

function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Bonjour ! Comment puis-je vous aider ?' }
  ]);

  const faq = {
    "comment m'inscrire pour donner du sang ?": "Vous pouvez vous inscrire via notre formulaire en ligne ou contacter le centre de don le plus proche.",
    "comment m'inscrire": "Vous pouvez vous inscrire via notre formulaire en ligne ou contacter le centre de don le plus proche.",
    "comment s'inscrire": "Vous pouvez vous inscrire via notre formulaire en ligne ou contacter le centre de don le plus proche.",
    "s'inscrire": "Vous pouvez vous inscrire via notre formulaire en ligne ou contacter le centre de don le plus proche.",
    "inscription": "Vous pouvez vous inscrire via notre formulaire en ligne ou contacter le centre de don le plus proche.",
    "aide moi a s'inscrire": "Vous pouvez vous inscrire via notre formulaire en ligne ou contacter le centre de don le plus proche.",
    "comment inscription": "Vous pouvez vous inscrire via notre formulaire en ligne ou contacter le centre de don le plus proche.",
    "a quelle fréquence puis-je donner du sang ?": "En général, toutes les 8 semaines pour les hommes et 12 semaines pour les femmes.",
    "apres quelle durée puis je donner du sang": "En général, toutes les 8 semaines pour les hommes et 12 semaines pour les femmes.",
    "durée necessaire pour redonner du sang": "En général, toutes les 8 semaines pour les hommes et 12 semaines pour les femmes.",
    "durée entre dons et dons": "En général, toutes les 8 semaines pour les hommes et 12 semaines pour les femmes.",
    "le don de sang est-il sûr": "Oui, tout le matériel utilisé est stérile et à usage unique.",
    "que faire apres un don": "Buvez beaucoup d’eau, reposez-vous, et évitez les activités physiques intenses pour le reste de la journée."
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const normalizedInput = input.trim().toLowerCase();
    const userMessage = { role: 'user', content: input };
    const responseMessage = {
      role: 'assistant',
      content: faq[normalizedInput] || "Désolé, je n'ai pas compris votre question."
    };

    setMessages(prevMessages => [...prevMessages, userMessage, responseMessage]);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Posez votre question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={sendMessage}>Envoyer</button>
      </div>
    </div>
  );
}

export default Chatbot;


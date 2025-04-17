import React, { useState } from 'react';
import axios from 'axios';
import './ChatBot.css';

function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Bonjour ! Comment puis-je vous aider ?' }
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'Tu es un assistant pour un site de don de sang. Réponds précisément aux questions liées aux dons, inscriptions, conditions, etc.' },
            ...newMessages
          ],
        },
        {
          headers: {
            'Authorization': `Bearer sk-...JoQA`, // remplace avec ta clé
            'Content-Type': 'application/json',
          },
        }
      );

      const reply = response.data.choices[0].message.content;
      setMessages([...newMessages, { role: 'assistant', content: reply }]);
    } catch (error) {
      console.error('Erreur OpenAI :', error.response ? error.response.data : error.message);
      setMessages([...newMessages, { role: 'assistant', content: "Désolé, une erreur s'est produite." }]);
    }
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

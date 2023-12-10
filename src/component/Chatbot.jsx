import React, { useState, useEffect} from 'react';
import './Chatbot.css';

const Chatbot = () => {

    const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [responses, setResponses] = useState({
    'hi': 'Hello there!',
    'hello': 'Hi, how can I assist you?',
    'iloveyou': 'iloveyoutoo❤️',
    'yo': 'yoyoyoyoyo👈👈',
    'how are you?': 'im good how about you?',
    'im fine': 'Good to know❤️',
    'Goodmorning': 'Goodmorning too❤️',
    'goodmorning': 'Goodmorning too❤️',
    'Goodnight': 'Goodnight too❤️',
    'goodnight': 'Goodnight too❤️',
    
  });

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const userMessage = e.target.message.value.toLowerCase(); // Convert to lowercase
    setMessages([...messages, { text: userMessage, sender: 'user' }]);

    const botResponse = responses[userMessage] || 'I am just a demo chatbot!'; // Default response
    setTimeout(() => {
      setMessages([
        ...messages,
        { text: botResponse, sender: 'bot' },
      ]);
    }, 500);

    e.target.reset();
  };

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].sender === 'user') {
      const userMessage = messages[messages.length - 1].text.toLowerCase();
      const botResponse = responses[userMessage] || 'I am just a demo chatbot!'; // Default response
      setTimeout(() => {
        setMessages([
          ...messages,
          { text: botResponse, sender: 'bot' },
        ]);
      }, 500);
    }
  }, [messages, responses]);

  
  return (


    <div className="chatbot">
      {isOpen ? (
        <div className="chatbot-open">
          <div className="chatbot-header">
            <span>Direct Message</span>
            <button onClick={toggleChat}>&times;</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${
                  message.sender === 'bot' ? 'bot-message' : 'user-message'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleMessageSubmit} className="chatbot-input">
            <input type="text" name="message" placeholder="Type a message..." />
            <button className="buttonsend" type="submit">Send</button>
          </form>
        </div>
      ) : (
        <div className="chatbot-closed" onClick={toggleChat}>
          DM
        </div>
      )}
    </div>
  );
};


export default Chatbot;
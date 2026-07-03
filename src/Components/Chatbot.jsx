import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  // 1️⃣ Fresh chat on load
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! 👋 I’m your travel assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages([...messages, userMsg]);
    setInput("");

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();
      const botMsg = {
        sender: "bot",
        text: data.reply || "⚠️ Something went wrong. Try again later."
      };

      setMessages(prev => [...prev, botMsg]);

    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        { sender: "bot", text: "⚠️ Server error. Try again later." }
      ]);
    }
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={toggleChat}>
        💬
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">Travel Assistant</div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <form className="chatbot-input" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about destinations, hotels, budget..."
            />
            <button type="submit">➡️</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

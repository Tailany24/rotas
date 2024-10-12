// Contact.js
import React, { useState } from 'react';
import './index.css'; // Certifique-se de que o CSS está sendo importado

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados
    alert(`Mensagem enviada por: ${name}\nEmail: ${email}\nMensagem: ${message}`);
    // Limpa os campos após o envio
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      {/* Efeito de TV acima do formulário */}
      <div className="tv-effect">
        <div className="noise"></div>
      </div>
      <div className="tv-effect">
        <div className="noise"></div>
      </div>

      {/* Container do Formulário de Contato */}
      <div className="contact-form-container">
        <h1>Entre em Contato!</h1>
        <p>Estamos aqui para ouvir você! Preencha o formulário abaixo.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Seu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Sua Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Enviar Mensagem 🎬</button>
        </form>
        
      </div>
      {/* Efeito de TV acima do formulário */}
      <div className="tv-effect">
        <div className="noise"></div>
      </div>
      <div className="tv-effect">
        <div className="noise"></div>
      </div>
    </div>
    
  );
};

export default ContactForm;

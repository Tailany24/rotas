import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu
  const menuRef = useRef(null); // Referência para o menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alterna a visibilidade do menu
  };

  // Função para fechar o menu quando clicar fora
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false); // Fecha o menu se o clique não for no menu
    }
  };

  useEffect(() => {
    // Adiciona o listener de clique ao documento
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Remove o listener ao desmontar o componente
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav className="navbar" ref={menuRef}>
        <div className="navbar-brand">
        <img src="/img/preto-e-branco.png" alt="Logo" className="navbar-logo" /> {/* Adicionando a imagem */}
        Filmes
          <div className="navbar-toggle" onClick={toggleMenu}>
            &#9776; {/* Ícone de hamburger ao lado do nome */}
          </div>
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>Sobre</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contato</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;


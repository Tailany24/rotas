import React from 'react';
import ReactDOM from 'react-dom/client'; // Esta é a nova maneira de usar ReactDOM na versão mais recente
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // A nova abordagem para renderizar na versão 18
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);



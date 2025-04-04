import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n'; // Importar i18n antes de renderizar para garantir que está inicializado
import { getCurrentLanguage } from './i18n';

// Log para debug
console.log('Idioma inicial detectado:', getCurrentLanguage());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

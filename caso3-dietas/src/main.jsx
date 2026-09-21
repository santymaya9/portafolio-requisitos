/**
 * @artifact COD-MAIN
 * @tipo Código
 * @nombre Punto de entrada de la aplicación
 * @version 0.1.0
 * @estado Implementado
 * @autor Santiago Maya Horta
 * @cierre 2026-09-20
 * @relacionados COD-APP, COD-THEME
 * @infra Infraestructura de la interfaz: no implementa requisitos de negocio
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App.jsx';
import { theme, GlobalStyle } from './theme.js';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// PWA: registra el service worker solo en producción.
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
}

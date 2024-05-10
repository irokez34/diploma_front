import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/fonts.css';
import './styles/reset.css';
import { GlobalStyle } from './styles/globalStyle.js';
import { App } from './components/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HttpsRedirect from 'react-https-redirect';
import './styles/App.css';

ReactDOM.render(
  <HttpsRedirect>
    <App />
  </HttpsRedirect>,
  document.getElementById('root')
);
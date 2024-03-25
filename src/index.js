import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import { hydrate, render } from 'react-dom';

const container = document.getElementById('root')
const root = ReactDOM.createRoot(document.getElementById('root'));

if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    container,
    <HelmetProvider >
    <React.StrictMode>
  <App />
</React.StrictMode>
</HelmetProvider>
  );
} else {
  root.render(
    <HelmetProvider >
    <React.StrictMode>
  <App />
</React.StrictMode>
</HelmetProvider>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

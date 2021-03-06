import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  "./styles/encabezado.css";
import "./styles/dashboard.css";
import "./styles/seleccionCiudadCandidato.css";
import "./styles/btnsRedSocial.css";
import "./styles/modal.css";
import "./styles/chartCandidate.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

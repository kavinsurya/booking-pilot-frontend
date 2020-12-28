import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import  Navigation  from "./components/routes";


ReactDOM.render(
  <React.StrictMode>
    <Navigation />
  
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

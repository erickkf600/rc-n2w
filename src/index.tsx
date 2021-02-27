import React from 'react';
import ReactDOM from 'react-dom';
import InWord from './component'
ReactDOM.render(
  <React.StrictMode>
  <h1>Teste</h1>
  {InWord({value:'3', lang: 'pt-br'})}
  </React.StrictMode>,
  document.getElementById('root')
);


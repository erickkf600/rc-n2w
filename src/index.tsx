import React from 'react';
import ReactDOM from 'react-dom';
import InWord from './component/InWord'
ReactDOM.render(
  <React.StrictMode>
  <h1>Teste</h1>
  {InWord('3', 'pt-br')}
  </React.StrictMode>,
  document.getElementById('root')
);


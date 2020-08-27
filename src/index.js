import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import './stylesheets/reset.scss';
import './stylesheets/main.scss';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.querySelector('#root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './app';
import './index.scss';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root')
);

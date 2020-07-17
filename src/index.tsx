import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import App from './pages/Home';

import 'simplebar/dist/simplebar.min.css';

ReactGA.initialize('UA-172963192-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

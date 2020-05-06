import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
// Creates const called render that references react-dom's render function.
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

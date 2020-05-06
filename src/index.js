import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
// Creates const called render that references react-dom's render function.
import { render } from 'react-dom';
import App from './components/App';

render(<App />, document.getElementById('root'));

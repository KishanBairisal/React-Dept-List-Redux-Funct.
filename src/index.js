import React from 'react';
import './index.css';
import App from './App';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store';

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root'))
reportWebVitals();

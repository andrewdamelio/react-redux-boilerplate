import './styles/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncReduxAndRouter } from 'redux-simple-router';
import { Router } from 'react-router';
import history from './store/config/history';
import routes from './store/config/router';
import configureStore from './store/configureStore';

const initialState = {};
const store = configureStore(initialState);
syncReduxAndRouter(history, store);


ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      { routes }
    </Router>
  </Provider>,
  document.getElementById('root')
);

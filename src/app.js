import './styles/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncReduxAndRouter } from 'redux-simple-router';
import { Router } from 'react-router';
import history from './store/config/history';
import routes from './store/config/router';
import configureStore from './store/configureStore';

// Warning: You’re bringing DevTools into the production bundle.
import DevTools from './containers/DevTools';


const initialState = {};
const store = configureStore(initialState);
syncReduxAndRouter(history, store);

ReactDOM.render(
  <Provider store={ store }>
    <div>
      <Router history={ history }>
        { routes }
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);

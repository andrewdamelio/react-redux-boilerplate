import './styles/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncHistory } from 'react-router-redux';
import reducer from './reducers';
import history from './store/history';
import routes from './store/router';
import DevTools from './containers/DevTools';
import thunkMiddleware from 'redux-thunk';
import logger from './store/logger';


const initialState = {};

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(history);

const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware,
    logger,
    reduxRouterMiddleware,
  ),
  DevTools.instrument(),
)(createStore);

const store = createStoreWithMiddleware(reducer, initialState);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers'));
  });
}

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);


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

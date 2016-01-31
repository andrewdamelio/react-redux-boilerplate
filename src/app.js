import 'babel-polyfill';

import './styles/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import history from './store/history';
import routes from './store/router';
import DevTools from './containers/DevTools';
import configureStore from './store/configureStore';

const initialState = {};
const store = configureStore(initialState);

const injectDevTools = ()=> {
  if (__DEV__) {
    return (
      <DevTools />
    );
  }
  return null;
};

ReactDOM.render(
  <Provider store={ store }>
    <div>
      <Router history={ history }>
        { routes }
      </Router>
      { injectDevTools() }
    </div>
  </Provider>,
  document.getElementById('root')
);

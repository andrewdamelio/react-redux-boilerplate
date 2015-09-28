import { devTools } from 'redux-devtools';
import { reduxReactRouter } from 'redux-router';
import thunkMiddleware from 'redux-thunk';
import createHashHistory from 'history/lib/createHashHistory';
import logger from './config/logger';
import rootReducer from '../reducers';

import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

const history = createHashHistory();

export default function configureStore(initialState, routes) {
  const store = compose(
    reduxReactRouter({routes, history}),
    applyMiddleware(thunkMiddleware, logger),
    devTools(),
  )(createStore)(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

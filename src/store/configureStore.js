import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistory } from 'react-router-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from '../middleware/promiseMiddleware';
import logger from './logger';
import DevTools from '../containers/DevTools';
import history from './history';
import rootReducer from '../reducers';


const reduxRouter = syncHistory(history);

export default function configureStore(initialState) {
  let createStoreWithMiddleware;

  if (__DEV__) {
    createStoreWithMiddleware = compose(
      applyMiddleware(promiseMiddleware, thunk, reduxRouter, logger),
      DevTools.instrument(),
    )(createStore);
  } else {
    createStoreWithMiddleware = compose(
      applyMiddleware(promiseMiddleware, thunk, reduxRouter),
    )(createStore);
  }

  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  // Required for replaying actions from devtools to work
  reduxRouter.listenForReplays(store);

  return store;
}

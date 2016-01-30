import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistory } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import DevTools from '../containers/DevTools';
import logger from './logger';
import history from './history';
import rootReducer from '../reducers';

const reduxRouterMiddleware = syncHistory(history);

export default function configureStore(initialState) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(
      thunkMiddleware,
      logger,
      reduxRouterMiddleware,
    ),
    DevTools.instrument(),
  )(createStore);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  // Required for replaying actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store);

  return store;
}

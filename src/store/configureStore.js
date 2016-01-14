import thunkMiddleware from 'redux-thunk';
import logger from './config/logger';
import rootReducer from '../reducers';
import DevTools from '..//containers/DevTools';

import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

export default function configureStore(initialState) {
  const store = compose(
    applyMiddleware(thunkMiddleware, logger),
    DevTools.instrument(),
  )(createStore)(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers'));
    });
  }

  return store;
}

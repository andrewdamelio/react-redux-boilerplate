import { combineReducers } from 'redux';
import { routerStateReducer  } from 'redux-router';
import counter from './counter';

const rootReducer = combineReducers({
  counter,
  router: routerStateReducer,
});

export default rootReducer;

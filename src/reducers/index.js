import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import counter from './counter';
import loading from './loading';

const rootReducer = combineReducers({
  counter,
  loading,
  routing: routeReducer,
});

export default rootReducer;

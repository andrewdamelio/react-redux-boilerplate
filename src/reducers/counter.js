import { handleActions } from 'redux-actions';
import { INCREMENT, DECREMENT } from '../constants';
import { Map } from 'immutable';

const counterReducer = handleActions({
  [INCREMENT]: (state) => state.update('value', (value) => value + 1),
  [DECREMENT]: (state) => state.update('value', (value) => value - 1),
}, Map({ value: 0 }));

export default counterReducer;

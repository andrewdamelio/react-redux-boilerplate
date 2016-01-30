import { fromJS } from 'immutable';

/* Constants */

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';


/* Reducer */

const initialState = fromJS({
  value: 0,
});

function counterReducer(state = initialState, action = {}) {
  switch (action.type) {

  case INCREMENT:
    return state.update('value', (value) => value + 1);

  case DECREMENT:
    return state.update('value', (value) => value - 1);

  default:
    return state;
  }
}

export default counterReducer;


/* Actions */

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

// Thunk Example
export function incrementIfEven() {
  return (dispatch, getState) => {
    if (getState().counter.get('value') % 2 === 0) {
      return dispatch(increment());
    }
  };
}

import { INCREMENT, DECREMENT } from '../constants';

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

export function incrementIfEven() {
  return (dispatch, getState) => {
    if (getState().counter.get('value') % 2 === 0) {
      return dispatch(increment());
    }
  };
}

import createLogger from 'redux-logger';
import { Iterable } from 'immutable';

export default createLogger({
  collapsed: true,
  /**
   * [Log state as JavaScript data structures instead
   *  of immutable data structures]
   */
  transformer: (state) => {
    return Object.keys(state).reduce((newState, key) => {
      const val = state[key];
      newState[key] =  Iterable.isIterable(val) ? val.toJS() : val;
      return newState;
    }, {});
  },
});

import createLogger from 'redux-logger';
import { immutableToJS } from '../../utils/utilities';

export default createLogger({
  collapsed: true,
  stateTransformer: (state) => {
    return immutableToJS(state);
  },
});

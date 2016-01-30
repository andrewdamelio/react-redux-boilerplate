import assert from 'assert';
import loadingReducer from '../../reducers/loading';

const SHOW_LOADING_MODAL = 'SHOW_LOADING_MODAL';
const HIDE_LOADING_MODAL = 'HIDE_LOADING_MODAL';

let state = loadingReducer(undefined, {});

describe('loading reducer', () => {
  describe('inital state', () => {
    it('should default to false', () => {
      assert.strictEqual(state, false);
    });
  });

  describe('on SHOW_LOADING_MODAL', () => {
    it('should set state to true', () => {
      state = fireAction(SHOW_LOADING_MODAL, state);
      assert.strictEqual(state, true);
    });
  });

  describe('on HIDE_LOADING_MODAL', () => {
    it('should set state to false', () => {
      state = fireAction(HIDE_LOADING_MODAL, state);
      assert.strictEqual(state, false);
    });
  });
});

function fireAction(actionType, currentState) {
  return loadingReducer(currentState, {
    type: actionType,
  });
}

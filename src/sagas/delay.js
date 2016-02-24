import { take, put, call } from 'redux-saga/effects';
import { hideLoadingModal  } from '../reducers/loading';

const HALF_SECOND = 500;

const wait = ms => (
  new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  })
);

function* delay(getState) {
  // Wake up when SHOW_LOADING_MODAL is dispatched
  while (yield take('SHOW_LOADING_MODAL')) {
    if (getState().loading) {
      // call delay
      yield call(wait, HALF_SECOND);

      // dispatch HIDE_LOADING_MODAL
      yield put(hideLoadingModal());
    }
  }
}

export default delay;

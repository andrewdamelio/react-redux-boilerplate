export const SHOW_LOADING_MODAL = 'SHOW_LOADING_MODAL';
export const HIDE_LOADING_MODAL = 'HIDE_LOADING_MODAL';

const initialState = false;

function loadingReducer(state = initialState, action = {}) {
  switch (action.type) {

  case SHOW_LOADING_MODAL:
    return true;

  case HIDE_LOADING_MODAL:
    return false;

  default:
    return state;
  }
}

export default loadingReducer;

export function showLoadingModal() {
  return { type: SHOW_LOADING_MODAL };
}

export function hideLoadingModal() {
  return { type: HIDE_LOADING_MODAL };
}

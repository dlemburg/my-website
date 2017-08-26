import * as actionTypes from '../actionTypes';

export function openToast(message) {
  return {
    type: actionTypes.OPEN_TOAST,
    message
  }
}

export function closeToast() {
  return {
    type: actionTypes.CLOSE_TOAST,
  }
}
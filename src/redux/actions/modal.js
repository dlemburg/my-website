import * as actionTypes from '../actionTypes';

export function openModal(modalInfo) {
  return {
    type: actionTypes.OPEN_MODAL,
    modalInfo
  }
}

export function closeModal() {
  return {
    type: actionTypes.CLOSE_MODAL,
  }
}

import * as actionTypes from '../actionTypes';

export function openPopover(popoverInfo) {
  return {
    type: actionTypes.OPEN_POPOVER,
    popoverInfo
  }
}

export function closePopover() {
  return {
    type: actionTypes.CLOSE_POPOVER,
  }
}
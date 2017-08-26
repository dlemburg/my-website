import * as actionTypes from '../actionTypes';

const initialToastState = {
    isOpen: false,
    message: ""
};

export const toastReducer = (state = initialToastState, action = {}) => {
    switch (action.type) {
        case actionTypes.OPEN_TOAST:
            return Object.assign({}, {isOpen: true, message: action.message});
            break;
        case actionTypes.CLOSE_TOAST:
            return Object.assign({}, initialToastState);
        default: return state;
    }
};
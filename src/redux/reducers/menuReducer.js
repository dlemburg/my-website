import * as actionTypes from '../actionTypes';

const initialMenuState = {
    isOpen: false
};

export const menuReducer = (state = initialMenuState, action = {}) => {
    switch (action.type) {
        case actionTypes.OPEN_MENU:
            return Object.assign({}, {isOpen: true});
            break;
        case actionTypes.CLOSE_MENU:
            return Object.assign({}, initialMenuState);
        default: return state;
    }
};
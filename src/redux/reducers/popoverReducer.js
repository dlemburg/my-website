import * as actionTypes from '../actionTypes';

const initialPopoverState = {
    isOpen: false,
    id: 0,
    title: "",
    template: null,
    onDismiss: null
};

export const popoverReducer = (state = initialPopoverState, action = {}) => {
    switch (action.type) {
        case actionTypes.OPEN_POPOVER:
            return Object.assign({}, action.popoverInfo, {isOpen: true});
            break;
        case actionTypes.CLOSE_POPOVER:
            return Object.assign({}, initialPopoverState);
        default: return state;
    }
};
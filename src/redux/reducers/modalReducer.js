import * as actionTypes from '../actionTypes';

const initialModalState = {
    isOpen: false,
    id: 0,
    title: "",
    buttons: [],
    template: null,
    shouldDismissOnBodyClick: true,

};

export const modalReducer = (state = initialModalState, action = {}) => {
    switch (action.type) {
        case actionTypes.OPEN_MODAL:
            return Object.assign({}, action.modalInfo, {isOpen: true});
            break;
        case actionTypes.CLOSE_MODAL:
            return Object.assign({}, initialModalState);
        default: return state;
    }
};
import { combineReducers } from 'redux';
import { modalReducer } from './reducers/modalReducer';
import { popoverReducer } from './reducers/popoverReducer';
import { menuReducer } from './reducers/menuReducer';
import { toastReducer } from './reducers/toastReducer';

const reducers = combineReducers({
    modal: modalReducer,
    popover: popoverReducer,
    menu: menuReducer,
    toast: toastReducer
});

export default reducers;
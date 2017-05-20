import { combineReducers } from 'redux';
import authReducer from './auth.js';
import modalReducer from './modal.js';

const reducer = combineReducers({
    auth: authReducer,
    modal: modalReducer
});

export default reducer;
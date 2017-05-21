import { combineReducers } from 'redux';
import authReducer from './auth.js';
import modalReducer from './modal.js';
import classroomReducer from './classrooms.js';

const reducer = combineReducers({
    auth: authReducer,
    modal: modalReducer,
    classrooms: classroomReducer
});

export default reducer;
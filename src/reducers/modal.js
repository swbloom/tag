import initialState from '../initial-state.js';

export default function modalReducer(state = initialState.modal, action) {
    switch (action.type) {
        case 'SHOW_MODAL':
            return {
                modalType: action.modalType,
                modalProps: action.modalProps
            }

        case 'HIDE_MODAL':
            return initialState.modal

        default:
            return state
    }
}

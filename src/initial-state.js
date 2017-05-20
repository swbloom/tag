const initialState = {
    auth: {
        status: 'ANONYMOUS',
        email: null,
        displayName: null,
        photoURL: null,
        uid: null
    },
    modal: {
        modalType: null,
        modalProps: {}
    }
}

export default initialState;
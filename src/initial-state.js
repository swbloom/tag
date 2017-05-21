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
    },
    classrooms: {
        'default': {
            content: 'This is a default classroom.',
            timeStamp: Date.now() - 600,
            uid: 'unknown'
        } 
    }
}

export default initialState;
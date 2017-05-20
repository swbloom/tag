import React from 'react';

const CreateClassroom = ({ showModal }) => {
    return (
        <button onClick={() => showModal({modalType: 'CREATE_CLASSROOM'})}>Create Classroom</button>
    )
}

export default CreateClassroom;
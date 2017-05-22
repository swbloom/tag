import React from 'react';

const JoinClassroom = ({ showModal }) => (
    <button onClick={() => showModal({modalType: 'JOIN_CLASSROOM'})}>Join Classroom</button>
)

export default JoinClassroom;
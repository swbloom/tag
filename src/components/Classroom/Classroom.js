import React from 'react';
import NewQuestion from '../NewQuestion/NewQuestion.js';
import Questions from '../Questions/Questions.js';

const Classroom = ({ classroom, classroomId, auth }) => {
    return (
        <div>
            <h3>{classroom.content}</h3>
            <Questions classroomId={classroomId} />
            <NewQuestion classroomId={classroomId} user={auth.displayName} userPhoto={auth.photoURL} />
        </div>
    )
}


export default Classroom;
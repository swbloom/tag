import React from 'react';

const Classroom = ({ classroom }) => {
    console.log(classroom);
    return (
        <div>
            <h3>{classroom.content}</h3>
            {/*<Questions classroomId={classroom.key} />*/}
            {/*<NewQuestion classroomId={classroom.key} />*/}
        </div>
    )
}


export default Classroom;
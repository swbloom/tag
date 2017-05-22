import { database } from '../services/firebase.js';

const classroomsRef = database.ref('classrooms');


export const joinClassroom = ({uid, displayName, classroomId}) => {
    return (dispatch) => {
        const classroomRef = database.ref(`classrooms/${classroomId}`);
        let students;
        classroomRef.once('value', (snapshot) => {
            let classroom = snapshot.val();
            students = classroom.students || {};
            students[uid] = displayName;
        }).then(() => {
            console.log(students);
            classroomRef.child('students').set(students);
        });
    }
}

export const addClassroom = (key = Date.now(), { content, uid }) => {
    return {
        type: 'ADD_CLASSROOM',
        content,
        key,
        timeStamp: Date.now(),
        uid
    };
};

export const deleteClassroom = (key) => {
    return {
        type: 'DELETE_CLASSROOM',
        key
    };
};

export const createClassroom =  ({content, uid}) => {
    return (dispatch) => {
        const classroom = {
            timeStamp: Date.now(),
            content,
            uid
        }
        classroomsRef.push(classroom);     
    };
}

export const destroyClassroom = (key) => {
    return (dispatch) => {
        classroomsRef.child(key).remove().then(() => {
            dispatch(deleteClassroom(key));
        });
    }
}

export const startListeningForClassrooms = () => {
    return (dispatch) => {
        classroomsRef.on('child_added', (snapshot) => {
            dispatch(addClassroom(snapshot.key, snapshot.val()));
        });

        classroomsRef.on('child_removed', (snapshot) => {
            dispatch(deleteClassroom(snapshot.key));
        });
    }
}
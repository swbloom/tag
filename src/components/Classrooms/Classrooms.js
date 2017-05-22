import React from 'react';
import map from 'lodash/map';
import { Link, Route } from 'react-router-dom';
import ClassroomContainer from '../../containers/ClassroomContainer.js';

const Classrooms = ({ classrooms }) => {
    return (
        <div>
            <ul className='classrooms'>
                {map(classrooms, (classroom, key) => <li key={key}><Link to={`/classrooms/${key}`}>{classroom.content}</Link></li>)}
            </ul>
            <Route path='/classrooms/:classroomId' component={ClassroomContainer} />
        </div>
    )
}

export default Classrooms;
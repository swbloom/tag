import React from 'react';
import map from 'lodash/map';
import { Link } from 'react-router-dom';

const Classrooms = ({ classrooms }) => {
    return (
        <div>
            <ul className='classrooms'>
                {map(classrooms, (classroom, key) => 
                    <li key={key}>
                        <Link to={`/classrooms/${key}`}>{classroom.content}
                        </Link>
                    </li>)}
            </ul>
        </div>
    )
}

export default Classrooms;
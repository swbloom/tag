import { connect } from 'react-redux';
import Classroom from '../components/Classroom/Classroom.js';
import pick from 'lodash/pick';

const mapStateToProps = ({ classrooms }, { match }) => {
    const { classroomId } = match.params;
    const classroom = classrooms[classroomId] || { content: 'Loading...' };
    return { classroom };
}

export default connect(mapStateToProps)(Classroom); 

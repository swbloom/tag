import { connect } from 'react-redux';
import Classroom from '../components/Classroom/Classroom.js';

const mapStateToProps = ({ classrooms, auth }, { match }) => {
    const { classroomId } = match.params;
    const classroom = classrooms[classroomId] || { content: 'Loading...' };
    return { classroom, auth, classroomId };
}

export default connect(mapStateToProps)(Classroom); 

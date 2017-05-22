import React from 'react';
import { hideModal } from '../../actions/modal.js';
import { connect } from 'react-redux';
import { joinClassroom } from '../../actions/classrooms.js'

class JoinClassroomModal extends React.Component {
    constructor() {
        super();
        this.state = {
            classroomId: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                Join Classroom Modal
                <form onSubmit={(e) => this.props.handleSubmit(e, this.props.auth.uid, this.props.auth.displayName, this.state.classroomId)}>
                    <input name="classroomId" type="text" onChange={this.handleChange} value={this.state.classroomName} placeholder='Enter the classroom key' />
                    <button>Join Classroom</button>
                </form>
                <button onClick={() => this.props.hideModal()}>Hide Modal</button>                
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth };
} 

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () => {
            dispatch(hideModal());
        },
        handleSubmit: (e, uid, displayName, classroomId) => {
            e.preventDefault();
            dispatch(joinClassroom({uid, displayName, classroomId}));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(JoinClassroomModal);
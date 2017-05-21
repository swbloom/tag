import React from 'react';
import { hideModal } from '../../actions/modal.js';
import { connect } from 'react-redux';
import { createClassroom } from '../../actions/classrooms.js'

class CreateClassroomModal extends React.Component {
    constructor() {
        super();
        this.state = {
            classroomName: ''
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
                Create Classroom Modal
                <form onSubmit={(e) => this.props.handleSubmit(e, this.state.classroomName, this.props.auth.displayName)}>
                    <input name="classroomName" type="text" onChange={this.handleChange} value={this.state.classroomName} placeholder='Enter the classroom name' />
                    <button>Create Classroom</button>
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
        handleSubmit: (e, content, uid) => {
            e.preventDefault();
            dispatch(createClassroom({content, uid}));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateClassroomModal);
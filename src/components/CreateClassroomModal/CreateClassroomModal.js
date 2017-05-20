import React from 'react';
import { hideModal } from '../../actions/modal.js';
import { connect } from 'react-redux';

const CreateClassroomModal = ({ hideModal }) => {

    return (<div>
        Create Classroom Modal
        <button onClick={() => hideModal()}>Hide Modal</button>
    </div>)
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () => {
            dispatch(hideModal());
        }
    }
}


export default connect(null, mapDispatchToProps)(CreateClassroomModal);
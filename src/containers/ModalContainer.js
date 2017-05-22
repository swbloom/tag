import React from 'react';
import { connect } from 'react-redux';
import CreateClassroomModal from '../components/CreateClassroomModal/CreateClassroomModal.js';
import JoinClassroomModal from '../components/JoinClassroomModal/JoinClassroomModal.js';

const MODAL_COMPONENTS = {
    CREATE_CLASSROOM: CreateClassroomModal,
    JOIN_CLASSROOM: JoinClassroomModal
}

const ModalContainer = ({ modalType, modalProps }) => {
    if (!modalType) {
        return <span />
    }

    const SpecificModal = MODAL_COMPONENTS[modalType]
    return <SpecificModal {...modalProps} />
}


export default connect(state => state.modal)(ModalContainer);


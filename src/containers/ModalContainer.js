import React from 'react';
import { connect } from 'react-redux';
import CreateClassroomModal from '../components/CreateClassroomModal/CreateClassroomModal.js';

const MODAL_COMPONENTS = {
    CREATE_CLASSROOM: CreateClassroomModal
}

const ModalContainer = ({ modalType, modalProps }) => {
    if (!modalType) {
        return <span />
    }

    const SpecificModal = MODAL_COMPONENTS[modalType]
    return <SpecificModal {...modalProps} />
}


export default connect(state => state.modal)(ModalContainer);


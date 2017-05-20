export const showModal = (modalDetails) => {
    console.log('modal details', modalDetails);
    return {
        type: 'SHOW_MODAL',
        modalType: modalDetails.modalType,
        modalProps: modalDetails.modalProps
    }
}

export const hideModal = () => {
    return {
        type: 'HIDE_MODAL'
    }
}
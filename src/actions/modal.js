export const showModal = (modalDetails) => {
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
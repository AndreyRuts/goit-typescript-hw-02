import s from './ImageModal.module.css';
import Modal from 'react-modal';

const ImageModal = ({ modalIsOpen, closeModal, src, alt }) => {
    
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className={s.modal}
            overlayClassName={s.overlay}
            appElement={document.getElementById("root")}
        >
            <img className={s.modalImage} src={src} alt={alt} />
        </Modal>
    );
}

export default ImageModal;
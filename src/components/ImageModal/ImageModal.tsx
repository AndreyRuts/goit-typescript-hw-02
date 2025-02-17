import s from './ImageModal.module.css';
import Modal from 'react-modal';

interface IModalProps{
    modalIsOpen: boolean;
    closeModal: () => void;
    src: string;
    alt: string;
}

const ImageModal: React.FC<IModalProps> = ({ modalIsOpen, closeModal, src, alt }) => {
    
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className={s.modal}
            overlayClassName={s.overlay}
            appElement={document.getElementById("root") as HTMLElement}
        >
            <img className={s.modalImage} src={src} alt={alt} />
        </Modal>
    );
}

export default ImageModal;
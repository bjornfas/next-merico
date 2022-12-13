

//Styles
import styles from "../styles/modules/Modal.module.scss";

const Modal = ({...props}) => {

    const {username, password, email, openModal, setOpenModal} = props;

    const onCloseModal = (e) => {
        const target = e.target;
        if (target.getAttribute("data-close") === "close") {
            setOpenModal(false);
        }
    };

    return (
        <div 
        data-close="close"
        className={`${styles.overlay} ${ openModal ? "show" : "animated"}`}
        onClick={onCloseModal}
        >
            <div className={styles.modal}>
                <div className={styles.modal__title}>
                    Data sent successfully!
                </div>
                <div className={styles.modal__list}>
                    <div className={styles.modal__item}>
                        <span className={styles.modal__span}>Username:</span> {username}
                    </div>
                    <div className={styles.modal__item}>
                        <span className={styles.modal__span}>Password:</span> {password}
                    </div>
                    <div className={styles.modal__item}>
                        <span className={styles.modal__span}>Email:</span> {email}
                    </div>
                </div>
                <div data-close="close" className={styles.modal__close}></div>
            </div>
        </div>
    )
}

export default Modal;

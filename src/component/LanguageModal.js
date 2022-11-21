import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Close from '../assets/img/close.png';



const LanguageModal = (props) => {
    return (
        <React.Fragment>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                                <div className="modal-header-sec">
                                            <div className="modal-h1">Choose your language</div>
                                            <img src={Close} alt="close img" onClick={props.onHide} className="closeModal" />
                                </div>
                                <div className="modal-body-sec">
                                            <button className="lang-btn active">English</button>
                                            <button className="lang-btn">Bahasa Melayu</button>
                                            <button className="lang-btn">中國人</button>
                                            <button className="lang-btn">한국인</button>
                                </div>
                </Modal.Body>   
            </Modal>
        </React.Fragment>
    )
}

export default LanguageModal;
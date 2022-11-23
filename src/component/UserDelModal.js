import React from "react";
import Modal from 'react-bootstrap/Modal';
import Close from '../assets/img/close.png';



const UserDelModal = (props) => {
    return (
        <React.Fragment>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="userdelModal"
            >
                <Modal.Body>
                                <div className="modal-header-sec">
                                            <div className="modal-h1">Do you really want to delete?</div>
                                            <img src={Close} alt="close img" onClick={props.onHide} className="closeModal" />
                                </div>
                                <div className="modal-body-sec">
                                                <button className="outlineBtn">YES</button>
                                                <button className="btn primary-btn max-196" onClick={props.onHide}>NO</button>
                                </div>
                </Modal.Body>   
            </Modal>
        </React.Fragment>
    )
}

export default UserDelModal;
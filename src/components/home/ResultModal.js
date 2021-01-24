import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ResultModal(props) {
    const handleClose = () => props.update(false);

    const handleRestart = () => window.location.reload();;

    return (
        <div>
            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Well done on finishing the game of draughts. I hope you had fun playing</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleRestart}>
                        Restart
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
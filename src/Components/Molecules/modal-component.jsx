import React, { Component } from "react";
import { Modal, Button, ButtonToolbar, Card } from "react-bootstrap"
import MyVerticallyCenteredModal from "../Atoms/centered-modal-component";

class Modals extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { textModal } = this.props

        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">                        
                        <Card.Img variant="top" src={textModal.img} />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{textModal.heading}</h4>
                    <p>
                        {textModal.desc}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default Modals
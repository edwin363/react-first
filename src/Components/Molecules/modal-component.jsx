import React, { Component } from "react";
import { Modal, Button, ButtonToolbar, Card } from "react-bootstrap"
import MyVerticallyCenteredModal from "../Atoms/centered-modal-component";

class Modals extends Component {
    constructor(props) {
        super(props)
    }

    render() {        
        const { textModal, url } = this.props;
        let image;
        if(textModal.img == null && url != null){
            image = <Card.Img variant="top" src={url} />
        }else{
            image = <Card.Img variant="top" src={textModal.img} />
        }

        return (
            <>
                <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">                        
                        {image}                                               
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{textModal.title}</h4>
                    <p>
                        {textModal.information}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }
}

export default Modals
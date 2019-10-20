import React, { Component } from 'react';
import { Carousel, Card, Button, ButtonToolbar } from "react-bootstrap";
import Modals from './modal-component';

class CarouselCard extends Component {
    constructor(props) {
        super(props)

        this.state = ({            
            addModalShow: false
        })
    }

    render() {
        let addModalClose = () => this.setState({addModalShow: false})
        const {classColor, textColor, imgUrl, bodyText, title, textModal} = this.props
        return (
            <Card bg={classColor} className={textColor}>
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {bodyText}
                    </Card.Text>                    
                    <ButtonToolbar>
                        <Button variant="primary"
                            onClick={() => this.setState({addModalShow: true})}
                        >
                            Leer mas...
                        </Button>
                        <Modals show={this.state.addModalShow} onHide={addModalClose} textModal={textModal}/>
                    </ButtonToolbar>
                </Card.Body>
            </Card>
            
        )
    }
}

export default CarouselCard
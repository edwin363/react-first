import React, { Component } from "react";
import { Carousel, Button, Container, Row, Col } from "react-bootstrap";
import News from "../Organisms/news-component";
import Menu from "../Molecules/menu-component";
import axios from "axios";
import { SERVER } from "../../app.config";
import Carousels from "../Molecules/carousel-component";
import CarouselCard from "../Molecules/carouselCard-component";

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            home: [],
            information: "El Programa de Becas BECATEL para Educacion superior se genera como una..."
        }
    }

    /*componentDidMount(){
        axios.get(`${SERVER}/home`)
        .then(res => {
            const home = res.data
            this.setState({
                home: home
            })
            
        })
    }*/
    /**
     *  <>
                <Menu/>
                {this.state.home.map(h => 
                    <News key={h.id} title={h.title} information={h.information}/>
                )}
            </>
     */


    render() {
        return (
            <>
                <Menu />
                <br />
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Carousels/>
                        </Col>                      
                    </Row>
                    <br/>
                    <Row>
                        <Col lg={4} sm={12}>
                            <CarouselCard 
                            classColor="dark" 
                            textColor="text-white" 
                            title="¿Quienes somos?"
                            bodyText={this.state.information.substring(0, 6)}
                            imgUrl="https://footage.framepool.com/shotimg/qf/236513015-deberes-para-el-hogar-campus-estudiar-biblioteca.jpg"/>
                        </Col>
                        <Col lg={4} sm={12}>
                            <CarouselCard 
                            classColor="light" 
                            textColor="text-dark" 
                            title="Objetivos"
                            bodyText={this.state.information.substring(0, 6)}
                            imgUrl="https://wikingenieria.com/wp-content/uploads/2018/09/no-se-que-carrera-elegir.png"/>
                        </Col>
                        <Col lg={4} sm={12}>
                            <CarouselCard 
                            classColor="dark" 
                            textColor="text-white " 
                            title="Requisitos"
                            bodyText={this.state.information.substring(0, 6)}
                            imgUrl="https://noticierouniversal.com/wp-content/uploads/2018/10/1177967c791522103428_standard_desktop_fullhd.png"/>
                        </Col>
                    </Row>                
                </Container>
                <br/>
            </>
        )
    }
}

export default Home
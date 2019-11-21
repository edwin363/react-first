import React, { Component } from "react";
import { Carousel, Button, Container, Row, Col } from "react-bootstrap";
import News from "../Organisms/news-component";
import Menu from "../Molecules/menu-component";
import axios from "axios";
import { SERVER } from "../../app.config";
import Carousels from "../Molecules/carousel-component";
import CarouselCard from "../Molecules/carouselCard-component";
import { modalCardOne, modalCardTwo, modalCardThree } from "../../Information/informationPage";

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            home: []
        }
    }

    componentDidMount() {
        axios.get(`${SERVER}/home`)
            .then(res => {
                const home = res.data
                this.setState({
                    home: home
                })

            })
    }

    render() {
        return (
            <>
                <Menu />
                <br />
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Carousels />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={3} sm={12}>
                            <CarouselCard
                                key="1"
                                classColor="dark"
                                textColor="text-white"
                                title="¿Quienes somos?"
                                bodyText={modalCardOne.information.substring(0, 40) + "..."}
                                textModal={modalCardOne}
                                imgUrl="https://footage.framepool.com/shotimg/qf/236513015-deberes-para-el-hogar-campus-estudiar-biblioteca.jpg" />
                        </Col>
                        <Col lg={3} sm={12}>
                            <CarouselCard
                                key="2"
                                classColor="light"
                                textColor="text-dark"
                                title="Objetivos"
                                bodyText={modalCardTwo.information.substring(0, 50) + "..."}
                                textModal={modalCardTwo}
                                imgUrl="https://wikingenieria.com/wp-content/uploads/2018/09/no-se-que-carrera-elegir.png" />
                        </Col>
                        <Col lg={3} sm={12}>
                            <CarouselCard
                                key="3"
                                classColor="dark"
                                textColor="text-white "
                                title="Requisitos"
                                bodyText={modalCardThree.information.substring(0, 50) + "..."}
                                textModal={modalCardThree}
                                imgUrl="https://noticierouniversal.com/wp-content/uploads/2018/10/1177967c791522103428_standard_desktop_fullhd.png" />
                        </Col>
                        <Col lg={3} sm={12}>
                            {
                                this.state.home.map(h =>
                                    <CarouselCard
                                        key="4"
                                        classColor="light"
                                        textColor="text-dark"
                                        title="Noticias"
                                        bodyText={h.information.substring(0, 50) + "..."}
                                        textModal={h}
                                        url="https://www.envirocopper.com.au/sites/envirocopper/media/banners/news.jpg"
                                        imgUrl="http://erasmusplus.org.ge/files/news/news-1.jpg" />
                                )}
                        </Col>
                    </Row>
                </Container>
                <br />
            </>
        )
    }
}

export default Home
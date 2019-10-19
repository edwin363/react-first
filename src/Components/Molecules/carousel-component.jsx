import React from "react";
import { Carousel, Image } from "react-bootstrap";

const Carousels = () => (
    <Carousel>
        <Carousel.Item>
            <Image
                className="d-block w-100"
                src="https://www.rree.usm.cl/wp-content/uploads/2019/05/DSCN9439-800x400.jpg"
                alt="hola1"
            />
            <Carousel.Caption>
                <h3 className="text-white bg-dark">Estudiantes salvadoreños</h3>
                <p className="text-body bg-white">¡...En su primera clase en el extrangero...!</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image
                className="d-block w-100"
                src="https://www.guillermocinta.com/wp-content/uploads/2019/06/boletin_2682-1_1-800x400.jpeg"
                alt="hola1"
            />
            <Carousel.Caption>
                <h3 className="text-white bg-dark">¡Nos apoyan personas importantes!</h3>
                <p className="text-body bg-white">Atrevete a conocerlos...!</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image
                className="d-block w-100"
                src="https://canal1.com.co/wp-content/uploads/2018/03/portafolio-de-est%C3%ADmulos-idartes-estudiantes-becas-alcaldia-de-bogota-800x400.jpg"
                alt="hola1"
            />
            <Carousel.Caption>
                <h3 className="text-white bg-dark">¿Te aceptaron en la beca?</h3>
                <p className="text-body bg-white">¡...Que es peras para aplicar...!</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
)

export default Carousels
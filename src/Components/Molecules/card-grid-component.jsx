import React, { Component } from "react";
import Card from "../Atoms/card-component";
import Menu from "./menu-component";
import axios from "axios";
import { Carousel, Image } from "react-bootstrap";
//import { SERVICE } from "../../app.config";

class CardGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scholarships: [],
      linkText: ""
    }
  }

  /*componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/scholarship`).then(resp => {
      this.setState({
        scholarships: resp.data
      });
      console.log(this.state.scholarships)
    });
    f(window.location.pathname == '/becas'){
      this.setState({
        linkText: "No puedes aplicar"
      })
    }
    else{
      this.setState({
        linkText: "Aplicar"
      })
    }
  }*/

  /**
   * {this.state.scholarships.map(scholar => (
              <Card
                title={scholar.id}
                subtitle={scholar.title}
                link="No puedes aplicar"
                state={scholar.state}
                quotas={scholar.quotas}
              />
            ))}
   */

  render() {
    return (
      <>
        <Menu />
        <Carousel>
        <Carousel.Item>
            <Image
                className="d-block w-100"
                src="http://www.dazzeldigital.com/wp-content/uploads/2014/08/contact-us-banner-img.jpg"
                alt="hola1"
                
            />
            <Carousel.Caption>
                <h3 className="text-white bg-dark">Aqui pueder ver las becas existentes</h3>
                <p className="text-body bg-white">¡...Que es peras para aplicar...!</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        <br />
        <div className="container">
          <div className="row">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          </div>
        </div>
        <br/>
      </>
    );
  }
}

export default CardGrid;

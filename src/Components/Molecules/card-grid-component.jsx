import React, { Component } from "react";
import Card from "../Atoms/card-component";
import Menu from "./menu-component";
import axios from "axios";
//import { SERVICE } from "../../app.config";

class CardGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scholarships: []
    };
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/scholarship`).then(resp => {
      this.setState({
        scholarships: resp.data
      });
    });
  }

  render() {
    return (
      <>
        <Menu />
        <br />
        <div className="container">
          <div className="row">
            {this.state.scholarships.map(scholar => (
              <Card
                title={scholar.id}
                subtitle={scholar.title}
                link="No puedes aplicar"
                state={scholar.state}
                quotas={scholar.quotas}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default CardGrid;

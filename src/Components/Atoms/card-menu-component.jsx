import React, { Component } from "react";
import { Link } from "react-router-dom";

class CardMenu extends Component {
  constructor(props) {
    super(props)
    
  }

/*goToScholarships = () => {
    const {user} = this.props
    this.props.history.push(`/dashboard/scholarships/${user.user}`);
}*/

  render() {
    const {user} = this.props
    return (
      <>
        <div className="row">
          <div className="col-4">
            <div className="card text-white bg-primary mb-3">
              <img
                src="https://www.splitshire.com/wp-content/uploads/2014/11/SplitShire-03692-1800x1200.jpg"
                className="card-img"
                alt="BECAS"
              />
              <div className="card-img-overlay">
                <div className="row">
                  <Link className="btn btn-outline-primary" to={`/dashboard/scholarships`}>
                    Nueva beca
                  </Link>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Becas FANTEL</h5>
                <p className="card-text">
                  Aqui podra crear nuevas oportunidades para los jovenes
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card text-white bg-success mb-3">
              <img
                src="https://bemaxacademy.com/wp-content/uploads/2016/02/SplitShire_blur10-e1450366325188-1800x1200.jpg"
                className="card-img"
                alt="BECAS"
              />
              <div className="card-img-overlay">
                <div className="row">
                  <button type="button" className="btn btn-outline-success">
                    Becas creadas
                  </button>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Becas creadas FANTEL</h5>
                <p className="card-text">
                  Aqui podra ver el detalle de las becas creadas y sus
                  aplicantes
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card text-white bg-danger mb-3">
              <img
                src="data:image/jpeg;base64,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"
                className="card-img"
                alt="BECAS"
              />
              <div className="card-img-overlay">
                <div className="row">
                  <button type="button" className="btn btn-outline-danger">
                    Contratos
                  </button>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Contratos de becas FANTEL</h5>
                <p className="card-text">
                  Aqui podra crear contratos para las becas muy importante al
                  crear una beca
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CardMenu;

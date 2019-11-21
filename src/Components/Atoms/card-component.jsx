import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap"


function aplicant(){
  
}

const Card = ({ title, subtitle, link, state, quotas }) => (
  <div className="col-4">
    <div className="card border-secondary">
      <div className="card-header">{title}</div>
      <div className="card-body text-secondary">
        <h5 className="card-title">{subtitle}</h5>
        <p className="card-text">
          <h5>Estado de la beca: {state}</h5>
          <h6>Los cupos son: {quotas}</h6>
        </p>        
        <Button variant="primary" onClick={aplicant}>
          {link}
        </Button>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.string
};

Card.defaultProps = {
  title: "1",
  subtitle: "Universidad UDB",
  link: "No puede aplicar",
  quotas: 23,
  state: "Activa"
};

export default Card;

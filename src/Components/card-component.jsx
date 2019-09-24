import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, subtitle, link, contract, quotas, scholar }) => (
  <div className="col-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          {(contract, quotas, scholar)}
        </p>
        <a href="#" className="card-link">
          {link}
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
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
  title: "No hay titulo",
  subtitle: "No hay sub-titulo",
  link: "No hay link"
};

export default Card;

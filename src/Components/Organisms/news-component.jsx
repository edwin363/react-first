import React from "react";
import Card from "../Atoms/card-component";

const News = ({ title, information }) => (
  <div className="container">
      <br/>
    <div className="card text-center">
      <div className="card-header">Noticias</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{information}</p>
      </div>
      <div className="card-footer text-muted">Fin del comunicado</div>
    </div>
  </div>
);

export default News;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./form-component";
import cardGrid from "./card-grid-component"
import Login from "./login-component";
import Main from "./main-component";

const Menu = () => (
  <Router>
    <div className="container">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/registro">
            Registrate
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/becas">
            Becas
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/quienesosmos">
            ¿Quienes somos?
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/nosotros">
            Nosotros
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">
            Login
          </a>
        </li>
      </ul>
    </div>

    <hr />

    <Route exact path="/" component={Main} />
    <Route path="/login" component={Login} />
    <Route path="/becas" component={cardGrid} />
    <Route path="/registro" component={Form} />
    
  </Router>
);

export default Menu;
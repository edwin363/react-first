import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import Item from "../Atoms/items-menu-component";

const Menu = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/">
      <img
        src={logo}
        width="100"
        height="60"
        className="d-inline-block align-top"
        alt="Logo"
      />
    </Link>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <Item url="/" nameItem="Inicio"/>
        <Item url="/registro" nameItem="Registrate"/>
        <Item url="/becas" nameItem="Becas"/>
        <Item url="/quienesosmos" nameItem="¿Quienes somos?"/>
        <Item url="/nosotros" nameItem="Nosotros"/>
        <Item url="/login" nameItem="Login"/>
        <Item url="/prueba" nameItem="prueba"/>
      </ul>
    </div>
  </nav>
);

export default Menu;
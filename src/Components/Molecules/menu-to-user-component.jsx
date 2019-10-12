import React from "react"
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import Item from "../Atoms/items-menu-component";

const MenuToUser = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/dashboard:user">
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
        <Item url="/dashboard:user" nameItem="Inicio"/>
        <Item nameItem="Perfil"/>
        <Item url="/" nameItem="Cerrar sesion"/>
      </ul>
    </div>
  </nav>
)

export default MenuToUser
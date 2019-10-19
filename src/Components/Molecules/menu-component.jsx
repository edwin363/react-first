import React from "react";
import { Link } from "react-router-dom";
import logo from "../../final_logo.png";
import Item from "../Atoms/items-menu-component";
import { Navbar } from "react-bootstrap";

const Menu = () => (
    <Navbar bg="dark" variant="dark" className="col-sm-12 col-lg-12">
      <Navbar.Brand>
      <img
        src={logo}
        width="80"
        height="60"
        className="d-inline-block align-top"
        alt="Logo"
      />
      </Navbar.Brand>
      <Item url="/" nameItem="Inicio"/>
    </Navbar>
);

export default Menu;
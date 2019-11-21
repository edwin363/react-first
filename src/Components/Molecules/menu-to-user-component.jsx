import React from "react"
import { Link } from "react-router-dom";
import logo from "../../final_logo.png";
import Item from "../Atoms/items-menu-component";
import { Navbar, Form, Button, FormControl, Nav } from "react-bootstrap";

const MenuToUser = () => (
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
    <Nav className="mr-auto">
        <Item url="/dashboard/inicio" nameItem="Inicio"/>
        <Item nameItem="Perfil"/>        
    </Nav>
    <Form inline>
      <Link to="/login">
        <Button variant="outline-info">Sign out</Button>
      </Link>
    </Form>
  </Navbar>
)

export default MenuToUser
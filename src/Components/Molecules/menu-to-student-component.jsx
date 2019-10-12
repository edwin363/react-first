import React, {Component} from "react";
import { Link } from "react-router-dom"
import logo from "../../logo.png";
import Item from "../Atoms/items-menu-component";

class MenutoStudent extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/students">
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
                        <Item url='/students' nameItem="Inicio"/>
                        <Item url='/students/profile' nameItem="Perfil"/>
                        <Item url='/students/beca' nameItem="Becas"/>
                        <Item url="/" nameItem="cerrar sesion"/>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default MenutoStudent
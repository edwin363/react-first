import React from "react"
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const Item = ({ url, nameItem }) => (
    <Navbar.Brand>
        <Link to={`${url}`} className="text-light">{nameItem}</Link>
    </Navbar.Brand>
)

export default Item
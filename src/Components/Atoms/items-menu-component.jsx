import React from "react"
import { Link } from "react-router-dom";

const Item = ({ url, nameItem }) => (
    <li className="nav-item">
        <div className="nav-link">
            <Link to={`${url}`}>{nameItem}</Link>
        </div>
    </li>
)

export default Item
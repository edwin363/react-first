import React, { Component } from "react"
import MenuToUser from "../Molecules/menu-to-user-component"
import CardMenu from "../Atoms/card-menu-component"


class Scholarships extends Component {
    constructor(props) {
        super(props)

        /*this.state = {
            user: this.props.match.params
        }*/
    }

    render() {
        return (
            <div>
                <MenuToUser />
                <br />
                <div className="container">
                    <CardMenu/>
                </div>
            </div>
        )
    }
}

export default Scholarships

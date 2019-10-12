import React, { Component } from "react";
import MenutoStudent from "../Molecules/menu-to-student-component";

class Profile extends Component{
    constructor(props){
        super(props)

    }

    render(){

        return (
            <>
                <MenutoStudent/>
            <br/>
                <div className="container">
                    <div className="card">
                        <div className="card-card-body">
                            <div className="row">
                                <div className="form-group col-6">
                                    <label htmlFor="">Nombres:</label>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>          
            </>
        )
    }
}

export default Profile
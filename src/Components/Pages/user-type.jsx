import React, {Component} from "react";
import CarduserType from "../Molecules/userType";
import axios from "axios";

class UserType extends Component{
    constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/usertypes')
        .then(response => response)
    }

    render(){
        const { users } = this.state
        return(
            <div className="container">
                <h1>Tipo usuarios</h1>
                <div>
                    {
                        users.map(uT => (
                            <CarduserType
                                key={uT.id}
                                user_type={uT.user_type}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default UserType
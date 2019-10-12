import React, { Component } from "react";
import News from "../Organisms/news-component";
import MenuToStudent from "../Molecules/menu-to-student-component";
import { SERVER } from "../../app.config";
import Axios from "axios";

class HomeToStudent extends Component{

    constructor(props){
        super(props)

        this.state = {
            home: []
        }
    }

    componentDidMount(){
        Axios.get(`${SERVER}/home`)
        .then(res => {
            const home = res.data
            this.setState({
                home: home
            })
            
        })
    }

    render(){
        return (
            <>
                <MenuToStudent/>
                {this.state.home.map(h => 
                    <News key={h.id} title={h.title} information={h.information}/>
                )}
            </>
        )
    }
}

export default HomeToStudent
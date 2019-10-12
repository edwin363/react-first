import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import News from "../Organisms/news-component";
import Menu from "../Molecules/menu-component";
import axios from "axios";
import { SERVER } from "../../app.config";

class Home extends Component{
    
    constructor(props){
        super(props)
        
        this.state = {
            home: []
        }
    }

    /*componentDidMount(){
        axios.get(`${SERVER}/home`)
        .then(res => {
            const home = res.data
            this.setState({
                home: home
            })
            
        })
    }*/
    /**
     *  <>
                <Menu/>
                {this.state.home.map(h => 
                    <News key={h.id} title={h.title} information={h.information}/>
                )}
            </>
     */


    render(){
        return(
           <>
            
           </>
        )
    }
}

export default Home
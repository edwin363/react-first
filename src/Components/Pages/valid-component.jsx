import React, {Component} from "react";
import { Alert, Navbar, Form } from "react-bootstrap";
import { SERVER } from "../../app.config";
import logo from "../../final_logo.png";
import axios from "axios";

class Valid extends Component {
    constructor(props){
        super(props)

        this.state = {
            codigo: 0
        };
    }

    handleChange = key => {
        return e =>
          this.setState(
            {
              [key]: e.target.value
            },
            () => {
              console.log(this.state);
            }
          );
      };

      gmailValidate = e => {
        const id = this.state.codigo
        axios.post(`${SERVER}/mail`, id).then(res => {
            console.log(res)
            if(res.status == 200 && res.data == 'becario'){
                this.props.history.push('/dashboard/inicio');
            }
            if(res.status == 200 && res.data == 'estudiante'){
                this.props.history.push('/students');
            }
        })
      }

    render(){
        return(
            <>
                <Navbar bg="dark" className="col-sm-12 col-lg-12">
                    <Navbar.Brand>
                    <img
                        src={logo}
                        width="80"
                        height="60"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                    </Navbar.Brand>
                </Navbar>
                <br/>
                <br/>
                <div className="container">                               
                <Alert variant="success">
                    <h1 className="text-center">Ingrese el codigo</h1>
                    <h3 className="text-center">Hola! porfavor preciona el boton...</h3>
                </Alert>
                <br/>
                <Form.Group controlId="formBasicEmail">                    
                    <Form.Control type="number" placeholder="Codigo" className="text-center" min="0" onChange={this.handleChange("codigo")}/>                    
                </Form.Group>
                <br/>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.gmailValidate}>Validar cuenta...</button>
            </div>
            </>
            
        )
    }
}

export default Valid

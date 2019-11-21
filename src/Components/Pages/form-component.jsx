import React, { Component } from "react";
import Menu from "../Molecules/menu-component";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { SERVER } from "../../app.config";
import { arrayExpression } from "@babel/types";
import { Form, Col, Button } from "react-bootstrap";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      email: "",
      password: "",
      subPassword: "",
      response: "",
      validated: false,
      setValidated: false,
      location: "",
      role_id: 0
    };
  }

  componentDidMount(){
    /*vaxios.get(`${SERVER}/roles`)
    .then(res => {
      const rol = res.data.slice(1);
      console.log(rol)
      this.setState({
        roles: rol 
      })
    })*/
    this.setState({
      location: window.location.pathname
    })
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

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password === this.state.subPassword) {
      const rol = (this.state.location == '/dashboard/registro')? 2 : 3;
      const users = {
        user: this.state.user,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.subPassword,
        role_id: rol
      }
      const route = (rol == 2)? '/dashboard/inicio':'/students';
           
        console.log(users);  
        axios.post(`${SERVER}/signup`, users).then(res => {
          console.log(res.data)
            if(res.status == 200){
                //this.props.history.push('/valid');
                return <Redirect to={route}/>
            }            
        })
    }
    else {
      this.setState({
        setValidated: true
      })
      console.log("no es igual")
    }
  }

  render() {    
    let menu
    if(this.state.location == '/dashboard/registro'){
      menu = ''
    }else{
      menu = <Menu />
    }
    return (
      <>
        {menu}
        <br />
        <div className="container">
          <div className="text-black-50">
            <h1>Registro</h1>            
            <div className="card">
              <div className="card-body">
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                      <Form.Label>Usuario:</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Usuario"
                        onChange={this.handleChange("user")}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please choose a username.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                      <Form.Label>E-mail:</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="E-mail"
                        onChange={this.handleChange("email")}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please choose a username.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                      <Form.Label>Contraseña:</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Contraseña"
                        onChange={this.handleChange("password")}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please choose a username.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                      <Form.Label>Confirmar la contraseña:</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Contraseña"
                        onChange={this.handleChange("subPassword")}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please choose a username.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Group>
                    <Form.Check
                      required
                      label="Acepto los terminos y condiciones"
                      feedback="You must agree before submitting."
                    />
                  </Form.Group>                  
                </Form>
                <div className="row">
                  <div className="col-2">
                    <Button type="submit" onClick={this.handleSubmit}>
                      Registrarme
                    </Button>
                  </div>
                  <div className="col-2">
                    <button type="submit"
                      className="btn btn-warning">
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Forms;

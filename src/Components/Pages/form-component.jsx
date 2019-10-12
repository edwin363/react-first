import React, { Component } from "react";
import Menu from "../Molecules/menu-component";
import axios from "axios";
import { SERVER } from "../../app.config";
import { arrayExpression } from "@babel/types";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      email: "",
      password: "",
      subPassword: "",
      response: "",
      roles: [],
      idRol: 0
    };
  }

  componentDidMount(){
    axios.get(`${SERVER}/roles`)
    .then(res => {
      const rol = res.data.slice(1);
      console.log(rol)
      this.setState({
        roles: rol 
      })
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
      if(this.state.password === this.state.subPassword){
        const users = {
            user: this.state.user,
            email: this.state.email,
            idRol: this.state.idRol,
            password: this.state.password,
            subPassword: this.state.subPassword
        }
  
        axios.post(`${SERVER}/users`, users).then(res => {
          console.log(res)
            if(res.status == 200){
                this.props.history.push('/login');
            }            
        })
      }
      else{
        console.log("no es igual")
      }
  }

  render() {
    return (
      <>
        <Menu />
        <br />
        <div className="container">
          <div className="text-black-50">
            <h1>Registro</h1>
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="form-group col-6">
                      <label htmlFor="">Usted es:</label>
                      <select className="form-control form-control-sm" onChange={this.handleChange("idRol")}>
                        <option>Selecc..</option>
                        {
                          this.state.roles.map(rolObj => (
                            <option key={rolObj.id} value={rolObj.id}>
                              {rolObj.name}
                            </option>
                          ))
                        }
                      </select>
                      <br></br>
                      <label>Usuario:</label>
                      <input
                        type="text"
                        onChange={this.handleChange("user")}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group col-6">
                      <label>E-mail:</label>
                      <input
                        type="email"
                        onChange={this.handleChange("email")}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group col-6">
                      <label>Contraseña:</label>
                      <input
                        type="password"
                        onChange={this.handleChange("password")}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group col-6">
                      <label>Confirme su contraseña:</label>
                      <input
                        type="password"
                        onChange={this.handleChange("subPassword")}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                </form>
                <div className="row">                                      
                    <div className="col-2">
                        <button type="submit" 
                        className="btn btn-info" 
                        onClick={this.handleSubmit}>
                            Registrarme
                        </button>                            
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
export default Form;

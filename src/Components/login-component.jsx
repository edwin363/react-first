import React, { Component } from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "../logo.png";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <form action="/dashboard">
          <div className="row">
            <div className="col-5">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">Login</h1>
                  <div className="form-group">
                    <label>Usuario:</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Contraseña:</label>
                    <input type="password" className="form-control" />
                  </div>
                  <input 
                    type="submit"
                    className="btn btn-outline-success btn"
                    value="Login"
                  />
                  <input
                      type="submit"
                      className="btn btn-outline-danger"
                      value="Cancel"
                    />
                </div>
              </div>
            </div>
            <div className="col-6">
              <img src={logo} className="img-fluid" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

import React, { Component } from "react";
import logo from "../../logo.png";
import Menu from "./menu-component";
import axios from "axios";
import { Link } from "react-router-dom";
import { SERVER } from "../../app.config";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      password: ""
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

  handleSubmit = e => {
    e.preventDefault();

    const users = {
      user: this.state.user,
      password: this.state.password
    };

    axios.post(`${SERVER}/login`, users).then(res => {
      console.log(res);
      if(res.status === 200 && res.data === "becario"){
        this.props.history.push(`/dashboard/${this.state.user}`);
      }
      if(res.status === 200 && res.data === "estudiante"){
        this.props.history.push(`/students`);
      }
    });
  };

  render() {
    return (
      <>
        <Menu></Menu>
        <div className="container">
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-6">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">Login</h1>
                  <form onSubmit={this.handleSubmit} method="post">
                    <div className="form-group">
                      <label>Usuario:</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={this.handleChange("user")}
                      />
                    </div>
                    <div className="form-group">
                      <label>Contraseña:</label>
                      <input
                        type="password"
                        className="form-control"
                        onChange={this.handleChange("password")}
                      />
                    </div>

                    <div className="row">
                      <div className="col-2">
                        <input
                          type="submit"
                          className="btn btn-outline-success btn"
                          value="Login"
                        />
                      </div>
                      <div className="col-2">
                        <input
                          type="submit"
                          className="btn btn-outline-danger"
                          value="Cancel"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <button type="button" className="btn btn-link">
                  <Link to="/registro">Registrate</Link>
                </button>
              </div>
            </div>
            <div className="col-6">
              <img src={logo} className="img-fluid" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;

import React, { Component, useState } from "react";
import logo from "../../logo2.png";
import Menu from "./menu-component";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { SERVER } from "../../app.config";
import { useAuth } from "../../Context/auth";
//import { errorMessage } from "../../../utilities/messages";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      location: "",
      checkPoint: false,
      message: "",
      isLoggedIn: false,
      setLoggedIn: false,
    };
    //const [userName, setUserName] = useState("");
    //const [password, setPassword] = useState("");
    //const { setAuthTokens } = useAuth();
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

  handleToChangeCheck = (boolean) => {
    if(this.state.checkPoint != boolean){
        this.setState({
          checkPoint: true
        })
    }
  }

  handleSubmit = e => {
    let setAuthTokens = useAuth()
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
      remember_me: this.state.checkPoint
    };
    console.log(user)
    axios.post(`${SERVER}/login`, user).then(res => {
      console.log(res.data);
      if(res.status === 200 && res.data === "becario" && this.state.location === '/dashboard/login'){
        //this.props.history.push('/dashboard/inicio');
        setAuthTokens(res.data);
        this.setState({
          setLoggedIn: true
        })
        return <Redirect to="/dashboard/inicio" />
      }      
      if(res.status === 200 && res.data === "estudiante"){
        //this.props.history.push('/students');
        setAuthTokens(res.data)
        this.setState({
          setLoggedIn: true
        })
        return <Redirect to="/students" />
      }
    });
  };

  componentDidMount(){
    this.setState({
      location: window.location.pathname
    })
  }

  render() {
    let menu
    if(this.state.location == '/dashboard/login'){
      menu = ''
    }else{
      menu = <Menu />
    }
    return (
      <>
        {menu}
        <div className="container">
          <br />
          <br />
          <br />
          {this.state.message}
          <div className="row">
            <div className="col-6">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">Login</h1>
                  <form>
                    <div className="form-group">
                      <label>Correo:</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={this.handleChange("email")}
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
                    <div className="form-group">
                    <input 
                      type="checkbox" 
                      id="cbox2" 
                      value="second_checkbox"
                      onClick={this.handleToChangeCheck(true)}
                      /> 
                    <label for="cbox2">recordame</label>
                    </div>
                  </form>
                  <div className="row">
                      <div className="col-2">
                        <input
                          type="submit"
                          className="btn btn-outline-success btn"
                          value="Login"
                          onClick={this.handleSubmit}
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

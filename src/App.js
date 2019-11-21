import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/styles.scss';
//import Menu from './Components/Molecules/menu-component';
import Login from './Components/Molecules/login-component';
import cardGrid from './Components/Molecules/card-grid-component';
import Forms from './Components/Pages/form-component';
import Home from './Components/Pages/Home';
import Valid from './Components/Pages/valid-component';
//import UserType from './Components/Pages/user-type';
import Scholarships from './Components/Pages/scholarships-component';
import AppToUser from './Components/Templates/app-user-component';
import HomeToStudent from './Components/Pages/homeToStudent-component';
import CardStudentGrid from './Components/Molecules/cardStudent-grid-component';
import Profile from './Components/Pages/profile-component';
import Card from './Components/Atoms/card-component';
import { Form } from 'react-bootstrap';
import { AuthContext } from "./Context/auth";
import PrivateRoute from "./PrivateRoute";

/**
 * <Route path="/login" component={Login} />
        <Route path="/becas" component={cardGrid} />
        <Route path="/registro" component={Form} />
        <Route path="/dashboard/:user" exact component={Scholarships}/>
        <Route path="/dashboard/scholarships/:user" component={AppToUser}/>
        <Route path="/students" exact component={HomeToStudent}/>
        <Route path="/students/beca" component={CardStudentGrid}/>
        <Route path="/card" component={Card}/>
        <Route path="/students/profile" component={Profile}/>
 */

const App = (props) => {

  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

    return(
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/becas" component={cardGrid} />
          <Route path="/login" component={Login}/>
          <Route path="/registro" component={Forms}/>
          <Route path="/dashboard/login" component={Login}/>
          <Route path="/dashboard/registro" component={Forms}/>
          <Route path="/dashboard/inicio" component={Scholarships}/>
          <PrivateRoute path="/students" component={HomeToStudent}/>          
          <PrivateRoute path="/dashboard/scholarships" component={AppToUser}/>
          <PrivateRoute path="/students" component={cardGrid}/>  
          <Route component = {() =>(
            <div className="container">
              <h1>Error 404</h1>
              <span>Página no encontrada</span>
            </div>
          )} />
      </Switch>
    </Router>
    </AuthContext.Provider>
    )
  
}

export default App;

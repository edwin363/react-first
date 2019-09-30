import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/styles.scss';
//import Menu from './Components/Molecules/menu-component';
import Login from './Components/Molecules/login-component';
import cardGrid from './Components/Molecules/card-grid-component';
import Form from './Components/Pages/form-component';
import Home from './Components/Pages/Home';
import UserType from './Components/Pages/user-type';
import Scholarships from './Components/Pages/scholarships-component';
import AppToUser from './Components/Templates/app-user-component';
import HomeToStudent from './Components/Pages/homeToStudent-component';


const App = () => (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/becas" component={cardGrid} />
        <Route path="/prueba" component={UserType}/>
        <Route path="/registro" component={Form} />
        <Route path="/dashboard/:user" exact component={Scholarships}/>
        <Route path="/dashboard/scholarships/:user" component={AppToUser}/>
        <Route path="/students" component={HomeToStudent}/>
        <Route component = {() =>(
          <div className="container">
            <h1>Error 404</h1>
            <span>Página no encontrada</span>
          </div>
        )} />
      </Switch>
    </Router>
)

export default App;

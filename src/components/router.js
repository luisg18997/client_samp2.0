import React, { Component} from 'react';
import  { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import login from './user/';
import school from './school/';
import budget from './budget/';
import humanResources from './human_Resources/';
import admin from './admin/';

class routerPrincipal extends Component {
  render() {
    return (
        <div>
        <Router>
        <div>
         <ul className="navbar-nav mr-auto">
              <li className="nav-link" role="button" aria-haspopup="true" aria-expanded="false">
              <Link to={'/'}>home</Link>
              </li>
              <li className="nav-link" role="button" aria-haspopup="true" aria-expanded="false">
              <Link to={'/Escuela'}>Escuela</Link>
              </li>
              <li className="nav-link" role="button" aria-haspopup="true" aria-expanded="false">
              <Link to={'/Presupuesto'}>Presupuesto</Link>
              </li>
              <li className="nav-link" role="button" aria-haspopup="true" aria-expanded="false">
              <Link to={'/RRHH'}>RRHH</Link>
              </li>
               <li  className="nav-link" role="button" aria-haspopup="true" aria-expanded="false">
              <Link to={'/admin'}>admin</Link>
              </li>
          </ul> 
            <Switch>
                <Route exact path="/" Component={login} />
                <Route  path="/Escuela" Component={school} />
                <Route  path="/Presupuesto" Component={budget} />
                <Route  path="/RRHH" Component={humanResources} />
                <Route  path="/admin" Component={admin} />
              </Switch>
              </div>
        </Router>
        </div>
    )
  }
}


export default routerPrincipal;
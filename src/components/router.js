import React, { Component} from 'react';
import  { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import login from './user/';
import school from './school/';
import budget from './budget/';
import humanResources from './human_Resources/';
import admin from './admin/';

class routerPrincipal extends Component {
  render () {
    return (
      <div>
        <div>
              <ul className="navbar-nav mr-auto">
              <li className="nav-link" role="button" aria-haspopup="true" aria-expanded="false">
            <Link to='/'>
              home
            </Link>
              </li>
              <li>
                <Link>
            </Link>
              </li>
              <li>
                <Link>
            </Link>
              </li>
              <li>
                <Link>
            </Link>
              </li>
              </ul>
          
      </div>
        <Router>
            <div>
                <Route exact path="/" Component={login} />
                <Route path="/Escuela" Component={school} />
                <Route path="/Presupuesto" Component={budget} />
                <Route path="/RRHH" Component={humanResources} />
                <Route path="/admin" Component={admin} />
            </div>
        </Router>
      </div>
    )
  }
}


export default routerPrincipal;
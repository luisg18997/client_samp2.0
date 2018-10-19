import react { Component} from 'react';
import  { BrowserRouter as Router, Route } from 'react-router-dom';

import login from './user/';
import school from './school/';
import budget from './budget/';
import humanResources from './human_Resources/';
import admin from './admin/';

class routerPrincipal extends Component {
  render () {
    return (
      <div>
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

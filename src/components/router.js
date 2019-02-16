import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import login from './user/login';
import school from './school';
import budget from './budget';
import humanResources from './human_Resources';
import admin from './admin';
import UserRegister from './user/registroUsuario';
import ClaveOlvidada from './user/olvidoClave';
import PreguntaSeg from './user/PreguntaSegList';
import BusquedaCambioClave from './user/busquedaCambioClave';


class routerPrincipal extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={login} />
            <Route path="/Escuela" component={school} />
            <Route path="/Presupuesto" component={budget} />
            <Route path="/RRHH" component={humanResources} />
            <Route path="/Admin" component={admin} />
            <Route path="/Registro" component={UserRegister} />
            <Route path="/CambioClave" component={ClaveOlvidada} />
            <Route path="/PreguntaSeguridad" component={PreguntaSeg} />
            <Route path="/OlvidoClave" component={BusquedaCambioClave} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default routerPrincipal;

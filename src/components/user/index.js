import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login';
import UserRegister from './registroUsuario';
import ClaveOlvidada from './olvidoClave';
import PreguntaSeg from './PreguntaSegList';
import BusquedaCambioClave from './busquedaCambioClave';

class user extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/Registro" component={UserRegister} />
            <Route path="/CambioClave" component={ClaveOlvidada} />
            <Route path="/PreguntaSeguridad" component={PreguntaSeg} />
            <Route path="/OlvidoClave" component={BusquedaCambioClave} />
          </div>
        </Router>
      </div>
    );
  }
}
export default user;

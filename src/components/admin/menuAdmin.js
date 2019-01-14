import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import MainAdmin from './mainAdmin';
import NewUserByAdmin from './NewUserByAdmin';
import UserStatusList from './userStatusList';
import UserValidateList from './userValidateList';

class MenuAdmin extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="menu_gral">
            <ul>
              <li>
                <Link to="/Admin">Home </Link>
              </li>
              <li>
                Usuarios
                <ul>
                  <li>
                    <Link to="/Admin/Usuario/Nuevo">Agregar</Link>
                  </li>
                  <li>
                    <Link to="/Admin/Usuarios/Status">Status</Link>
                  </li>
                  <li>
                    <Link to="/Admin/Usuarios/Validar">Validar</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <Switch>
              <Route exact path="/Admin" component={MainAdmin} />
              <Route path="/Admin/Usuarios/Status" component={UserStatusList} />
              <Route path="/Admin/Usuario/Nuevo" component={NewUserByAdmin} />
              <Route path="/Admin/Usuarios/Validar" component={UserValidateList} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


export default MenuAdmin;

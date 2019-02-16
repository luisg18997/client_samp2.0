import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import MainSchool from './mainSchool';
import FormOfice from './oficio';
import listOficio from './listOficio';
import MovPersonal from './movPersonal';
import ListEmpleado from './listEmpleado';

class MenuSchool extends Component {
  render() {
    return (
      <div>
        <Router>


          <div className="menu_gral">

            <ul>
              <li ><Link to="/Escuela">Escuela</Link></li>
              <li>
                <label style={{'color':' #54b4eb'}} >Planilla de oficio</label>
                <ul>
                  <li><Link to="/Escuela/Oficio/Nuevo">Nuevo</Link></li>
                  <li><Link to="/Escuela/Empleado/Listado">Existente</Link></li>
                </ul>
              </li>
              <li><Link to="/Escuela/Oficio/Listado">Movimiento de Personal</Link></li>
            </ul>
            <Switch>
              <Route path="/Escuela" component={MainSchool} />
              <Route path="/Escuela/Oficio/Nuevo" component={FormOfice} />
              <Route path="/Escuela/Empleado/Listado" component={ListEmpleado} />
              <Route path="/Escuela/Oficio/Listado" component={listOficio} />
              <Route path="/Escuela/MovPersonal" component={MovPersonal} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


export default MenuSchool;

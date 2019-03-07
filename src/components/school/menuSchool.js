import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import MainSchool from './mainSchool';
import FormOfice from './oficio';
import listOficio from './listOficio';
import MovPersonal from './movPersonal';
import ListEmpleado from './listEmpleado';
import ListOficioAprobado from './listOficioAprobado';
import ListOficioRechazado from './listOficioRechazado';

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
                  <li><Link to="/Escuela/Oficio/Aprobado/Listado">Listado de Aprobados</Link></li>
                  <li><Link to="/Escuela/Oficio/Rechazado/Listado">Listado de Rechazados</Link></li>
                </ul>
              </li>
              <li>
                <label style={{'color':' #54b4eb'}} >Movimiento de Personal</label>
                <ul>
                  <li><Link to="/Escuela/Oficio/Listado">Nuevo</Link></li>
                  <li>Listado de Aprobados</li>
                  <li>Listado de Rechazados</li>
                </ul>
              </li>
              <li>Status de Planillas</li>
            </ul>
            <Switch>
              <Route exact path="/Escuela" component={MainSchool} />
              <Route path="/Escuela/Oficio/Nuevo" component={FormOfice} />
              <Route path="/Escuela/Empleado/Listado" component={ListEmpleado} />
              <Route path="/Escuela/Oficio/Listado" component={listOficio} />
              <Route path="/Escuela/Oficio/Aprobado/Listado" component={ListOficioAprobado} />
              <Route path="/Escuela/Oficio/Rechazado/Listado" component={ListOficioRechazado} />
              <Route path="/Escuela/MovPersonal" component={MovPersonal} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


export default MenuSchool;

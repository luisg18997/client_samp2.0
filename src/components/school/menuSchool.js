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
import ListMovPersonalAprobado from './listMovPersonalAprobado';
import ListOficioRechazado from './listOficioRechazado';
import ListStatusPlanillas from './listPlanillasStatus';

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
                  <li><Link to="/Escuela/Oficio/Aprobados">Listado de Aprobados</Link></li>
                  <li><Link to="/Escuela/Oficio/Rechazados">Listado de Rechazados</Link></li>
                </ul>
              </li>
              <li>
                <label style={{'color':' #54b4eb'}} >Movimiento de Personal</label>
                <ul>
                  <li><Link to="/Escuela/Oficio/Listado">Nuevo</Link></li>
                  <li><Link to="/Escuela/MovPersonal/Aprobados">Listado de Aprobados</Link></li>
                  <li><Link to="/Escuela/MovPersonal/Rechazados">Listado de Rechazados</Link></li>
                </ul>
              </li>
              <li><Link to="/Escuela/Planillas/status">Status de Planillas</Link></li>
            </ul>
            <Switch>
              <Route exact path="/Escuela" component={MainSchool} />
              <Route path="/Escuela/Oficio/Nuevo" component={FormOfice} />
              <Route path="/Escuela/Empleado/Listado" component={ListEmpleado} />
              <Route path="/Escuela/Oficio/Listado" component={listOficio} />
              <Route path="/Escuela/Oficio/Aprobados" component={ListOficioAprobado} />
              <Route path="/Escuela/Oficio/Rechazados" component={ListOficioRechazado} />
              <Route path="/Escuela/MovPersonal/" component={MovPersonal} />
              <Route path="/Escuela/MovPersonal/Aprobados" component={ListMovPersonalAprobado} />
              <Route  path="/Escuela/Planillas/status" component={ListStatusPlanillas} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


export default MenuSchool;

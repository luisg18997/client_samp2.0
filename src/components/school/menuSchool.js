import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Authorization from '../redirectPrincipal';
import MainSchool from './mainSchool';
import FormOfice from './oficio';
import listOficio from './listOficio';
import MovPersonal from './movPersonal';
import ListEmpleado from './listEmpleado';
import ListOficioAprobado from './listOficioAprobado';
import ListMovPersonalAprobado from './listMovPersonalAprobado';
import ListMovPersonalRechazado from './listMovPersonalRechazado';
import ListOficioRechazado from './listOficioRechazado';
import ListStatusPlanillas from './listPlanillasStatus';
import ListPlanillas from './ListadoPlanillas';
import OficioRev from './oficioRev';
import MovPersonalRev from './movPersonalRev';
import OficioPDF from './oficioPDF';
import MovPersonalPDF from './movPersonalPDF';

class MenuSchool extends Component {
  constructor(){
    super();
    this.auth = new Authorization();
    this.state = {
      rol: ""
    }
  }

  async componentWillMount() {
    if (await this.auth.loggedIn()) {
      const result = await this.auth.ObtainData();
      const user = result.data;
      console.log(user);
        this.setState({
          rol : user.rol.id
        })
      }
      console.log(this.state.rol);
  }

  render() {
    const {rol} = this.state;
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
                  <li><Link to="/Escuela/Empleados">Existente</Link></li>
                  <li><Link to="/Escuela/Oficio/Aprobados">Listado de Aprobados</Link></li>
                  <li><Link to="/Escuela/Oficio/Rechazados">Listado de Rechazados</Link></li>
                </ul>
              </li>
              <li>
                <label style={{'color':' #54b4eb'}} >Movimiento de Personal</label>
                <ul>
                  <li><Link to="/Escuela/Oficios">Nuevo</Link></li>
                  <li><Link to="/Escuela/MovPersonal/Aprobados">Listado de Aprobados</Link></li>
                  <li><Link to="/Escuela/MovPersonal/Rechazados">Listado de Rechazados</Link></li>
                </ul>
              </li>
              <li><Link to="/Escuela/Planillas/status">Status de Planillas</Link></li>
              {rol === 3?
              <li><Link to="/Escuela/ListadoPlanillas">Listado Planillas</Link></li>
              :<span></span>}
            </ul>
            <Switch>
              <Route exact path="/Escuela" component={MainSchool} />
              <Route path="/Escuela/Oficio/Nuevo" component={FormOfice} />
              <Route path="/Escuela/Empleados" component={ListEmpleado} />
              <Route path="/Escuela/Oficios" component={listOficio} />
              <Route path="/Escuela/Oficio/Aprobados" component={ListOficioAprobado} />
              <Route path="/Escuela/Oficio/Rechazados" component={ListOficioRechazado} />
              <Route path="/Escuela/MovPersonal/Nuevo" component={MovPersonal} />
              <Route path="/Escuela/MovPersonal/Correcion" component={MovPersonal} />
              <Route path="/Escuela/MovPersonal/Aprobados" component={ListMovPersonalAprobado} />
              <Route path="/Escuela/MovPersonal/Rechazados" component={ListMovPersonalRechazado} />
              <Route path="/Escuela/Planillas/status" component={ListStatusPlanillas} />
              <Route path="/Escuela/ListadoPlanillas" component={ListPlanillas} />
              <Route path="/Escuela/Oficio/revision" component={OficioRev} />
              <Route path="/Escuela/MovPersonal/revision" component={MovPersonalRev} />
              <Route path="/Escuela/Oficio/PDF" component={OficioPDF} />
              <Route path="/Escuela/MovPersonal/PDF" component={MovPersonalPDF} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


export default MenuSchool;

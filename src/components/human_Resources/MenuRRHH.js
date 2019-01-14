import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import mainRRHH from './mainRRHH';
import ListPlanillas from './ListadoPlanillas';
import OficioRev from './oficioRev';

class MenuRRHH extends Component {
  render() {
    return (
      <div>
        <Router>


          <div className="menu_gral">

            <ul>
              <li><Link to="/RRHH">Principal</Link></li>

              <li>
                {' '}
                <Link to="/RRHH/ListadoPlanillas">Listado Planillas</Link>
              </li>


            </ul>
            <Switch>
              <Route exact path="/RRHH" component={mainRRHH} />
              <Route path="/RRHH/ListadoPlanillas" component={ListPlanillas} />
              <Route path="/RRHH/Oficio/revision" component={OficioRev} />
            </Switch>

          </div>
        </Router>
      </div>
    );
  }
}


export default MenuRRHH;

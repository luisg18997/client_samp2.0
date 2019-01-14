import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import mainBudget from './mainBudget';
import listado from './ListadoPlanillas';
import OficioRev from './oficioRev';

class MenuBudget extends Component {
  render() {
    return (
      <div>
        <Router>


          <div className="menu_gral">

            <ul>
              <li><Link to="/Presupuesto">Presupuesto</Link></li>

              <li>
                {' '}
                <Link to="/Presupuesto/ListadoPlanillas">Listado Planillas</Link>
              </li>


            </ul>
            <Switch>
              <Route exact path="/Presupuesto" component={mainBudget} />
              <Route path="/Presupuesto/ListadoPlanillas" component={listado} />
              <Route path="/Presupuesto/Oficio/revision" component={OficioRev} />
            </Switch>

          </div>
        </Router>
      </div>
    );
  }
}


export default MenuBudget;

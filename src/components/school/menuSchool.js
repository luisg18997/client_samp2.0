import React, {Component} from 'react';
import  { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import MainSchool from './mainSchool';
import FormOfice from './oficio';
import listOficio from './listOficio';
import MovPersonal from './movPersonal';

class MenuSchool extends Component {
  render() {
    return(
       <div>
        <Router>


<div className="menu_gral">

 <ul>
       <li    style={{ background: '#0a6d84'}}><Link to='/Escuela' >Escuela</Link></li>

     <li> <label>Planilla de oficio</label>
 <ul>
       <li><Link to="/Escuela/Oficio/Nuevo">Nuevo</Link></li>
            <li>Existente</li>




         </ul>     </li>

       <li><Link to ="/Escuela/Oficio/Listado">Movimiento de Personal</Link></li>

  </ul>
            <Switch>
            <Route exact path='/Escuela' component={MainSchool}/>
            <Route path='/Escuela/Oficio/Nuevo' component={FormOfice}/>
            <Route path='/Escuela/Oficio/Listado' component={listOficio}/>
            <Route path='/Escuela/MovPersonal' component={MovPersonal}/>
            </Switch>
        </div>
        </Router>
      </div>
    )
  }
}


export default MenuSchool;

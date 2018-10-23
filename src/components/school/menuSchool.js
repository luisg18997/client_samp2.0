import React, {Component} from 'react';
import  { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import MainSchool from './mainSchool';
import FormOfice from './oficio';

class MenuSchool extends Component {
  render() {
    return(
      <div>
      	<Router>
      		<div>
      			<ul>
      				<li>
      					<Link to='/Escuela'>Inicio</Link>
      				</li>
      				<li>
      					Planilla
      					<ul>
      					<li>
      						Oficio
      						<ul>
      							<li>
      								<Link to="/Oficio/Nuevo">Nuevo</Link>
      							</li>	
      						</ul>
      					</li>
      					<li>
      					</li>
      					</ul>
      				</li>
      				<li>
      					
      				</li>
      				<li>
      					
      				</li>	
      			</ul>
      			<Switch>
      			<Route exact path='/Escuela' component={MainSchool}/>
      			<Route path='/Oficio/Nuevo' component={FormOfice}/>
      			</Switch>
      		</div>
      	</Router>
      </div>
    )
  }
}

export default MenuSchool;

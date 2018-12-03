import React, { Component} from 'react';
import  { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';

import MainAdmin from './mainAdmin';
import UpdateUser from './UpdateUser';


class MenuAdmin extends Component {
	render(){
		return(
				<Router>
					<div>
						<ul>
							<li>
								<Link to='/Admin'>Home </Link>
							</li>
							<li> Usuarios
								<ul>
									<li>
										Agregar
									</li>
									<li>
										<Link to='/Admin/UsuarioActualizar'>Actualizar</Link>
									</li>
									<li>
										Validar
									</li>
								</ul>
							</li>
						</ul>
					<Switch>
						<Route exact path='/Admin'  component={MainAdmin} />
						<Route path='/Admin/UsuarioActualizar' component={UpdateUser} />
					</Switch>
					</div>
				</Router>
		)
	}
}

export default MenuAdmin;
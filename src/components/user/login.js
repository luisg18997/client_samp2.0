import React, { Component} from 'react';

class login extends Component {
	render(){
		return(
			<div>
				<from>
					<input type='email' name='email' id="email" placeholder="ingrese su correo" required />
					<input type='password' name='password' id='password' placeholder="ingrese su clave" required />
					<button></button>
				</from>
			</div>
		)
	}
}
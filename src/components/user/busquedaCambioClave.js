import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdbreact';
import {Label, LabelRequired} from '../util/forms';
import {
	getUserForChangePassword
} from '../../connect_api/user/userAPI';
import {validateEmail} from '../util/validations';

class BusquedaCambioClave extends Component {
	constructor(){
		super();
		this.state= {
			email:"",
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
		console.log(this.state);
	}

	async handleSubmit(event){
		event.preventDefault();
		const result = await getUserForChangePassword(this.state.email);
		if(result.result !== 'not found') {
			 this.props.history.replace('/CambioClave', {data: result});
		} else {
			alert('Correo no esta registrado en el Sistema SAMP');
		}
	}

	render() {
		const { email} = this.state;
		return (
			<div>
			<h2> Cambio de Clave:</h2>
			<hr></hr>
			<form onSubmit={this.handleSubmit}>
				<h3>Busqueda de Usuario</h3>
				{Label(LabelRequired('Email'),'text','email',email, this.handleChange, true, (e) => validateEmail(e.target.value, 'Email'))}
				<br></br>
	            <div  className="form-group col-md-12">
	                <div className="row justify-content-center">
	                  <MDBBtn color="light-blue" type="submit" className="col-md-3" style={{marginRight:'100px'}} >Enviar</MDBBtn>
	                  <MDBBtn color="light-blue" type="reset" className="col-md-3" > Restablecer  </MDBBtn>
	              </div>
	            </div>
			</form>
			<Link to="/"> Volver </Link>
			</div>
			);
  }
}

export default BusquedaCambioClave;

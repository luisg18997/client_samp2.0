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
			//focus
			emailFocus: false,
			//validate
			emailValidate: false
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

	async handleValidateEmail(data, name, focus, nameFocus,  validateName) {
		const result = validateEmail(data, name, focus);
		console.log(result);
		await this.setState({
			[nameFocus]: result,
			[validateName]: !result
		});
		console.log('this.state: ', this.state);
		return !result;
	}

	validateForm() {
	  return this.state.emailValidate;
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
				{Label(LabelRequired('Email'),'email','email',email,this.handleChange, true, (e) => this.handleValidateEmail(e.target, 'Email', this.state.emailFocus, 'emailFocus', 'emailValidate'), this.state.emailFocus.toString())}
				<br></br>
	            <div  className="form-group col-md-12">
	                <div className="row justify-content-center">
	                  <MDBBtn color="light-blue" type="submit" disabled={!this.validateForm()} className="col-md-3" style={{marginRight:'100px'}} >Enviar</MDBBtn>
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

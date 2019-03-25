import React, { Component} from 'react';
import  { Link } from 'react-router-dom';
import { Container, Row, Col, MDBBtn } from 'mdbreact';
import {Label, LabelRequired, select} from '../util/forms';
import {
	getAllUbicationsList,
	 addNewUser
  } from '../../connect_api/user/userAPI';
import {
getSchoolList,
getInstituteList,
getCoordinationList
} from '../../connect_api/faculty/FacultyAPI';
import Authorization from '../redirectPrincipal';
import {validateText, validateEmail, validatePassword, validatePasswordConfirm} from '../util/validations';

class RegistroUsuario extends Component {
	constructor(){
    super();
		this.auth = new Authorization();
    this.state = {
      nombre: "",
      apellido: "",
      email: "",
      clave: "",
			confiClave:"",
      ubicacionList: [],
			ubicacion: "",
			schoolList: [],
			escuela: 0,
			instituteList : [],
			instituto: 0,
			coordinationList: [],
			coordinacion: 0,
			isLoaded: false,
			//focus
      nombreFocus: false,
      apellidoFocus: false,
      emailFocus: false,
			claveFocus: false,
			confiClaveFocus: false,
      //validate
      nombreValidate: false,
      apellidoValidate: false,
      emailValidate: false,
			claveValidate: false,
			confiClaveValidate: false,
    }
    this.handleChangeSelectub = this.handleChangeSelectub.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

	async componentWillMount() {
		console.log(await this.auth.loggedIn());
		if (await this.auth.loggedIn()) {
		const result = await this.auth.ObtainData();
		console.log(result);
		this.auth.redirect(result.data.ubication.id, this.props);
		} else {
			 this.setState({
				 isLoaded : true
			 })
		}
	}

	async componentDidMount() {
		const result = await getAllUbicationsList()
		const  ubicacionList = result.splice(1,5)
		console.log(ubicacionList);
		this.setState({
			ubicacionList
		});
	}

	handleChangeSelectub(event){
		console.log("event: ", event.target.value);
		this.setState({
			ubicacion : event.target.value,
			escuela: 0,
			instituto: 0,
			coordinacion : 0,
			schoolList: [],
			instituteList: [],
			coordinationList: []
		});
		console.log("ubicacion: ", this.state.ubicacion);
		if (event.target.value === "2") {
			this.handleChangeSchoolList();
		} else if (event.target.value === "3") {
			this.handleChangeInstitutelList();
		} else if (event.target.value === "4") {
			this.handleChangeCoordinationList();
 		}
}

async handleChangeSchoolList(){
	const schoolList = await getSchoolList()
	this.setState({
		schoolList
	})
	console.log("schoolList: ", this.state.schoolList)
}

async handleChangeInstitutelList(){
	const instituteList = await getInstituteList()
	this.setState({
		instituteList
	})
	console.log("instituteList: ", this.state.instituteList)
}

async handleChangeCoordinationList(){
	const coordinationList = await getCoordinationList()
	this.setState({
		coordinationList
	})
	console.log("coordinationList: ", this.state.coordinationList)
}

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

async handleSubmit(event) {
    event.preventDefault();
		const user = {
			name : this.state.nombre.toUpperCase(),
			surname : this.state.apellido.toUpperCase(),
			email: this.state.email,
			password: this.state.clave,
			ubication: this.state.ubicacion,
			schoolID: this.state.escuela,
			coordinationID: this.state.coordinacion,
			instituteID:this.state.instituto,
		}
		const result = await addNewUser(user)
		if(result === 1) {
			alert('usuario creado exitosamente');
			this.props.history.replace('/');
		} else {
			alert('usuario ya existente');
			this.props.history.replace('/Registro');
		}
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

	async handleValidateText(data, name, focus, nameFocus,  validateName) {
		const result = validateText(data, name, focus);
		console.log(result);
		await this.setState({
			[nameFocus]: result,
			[validateName]: !result
		});
		console.log('this.state: ', this.state);
		return !result;
	}

	async handleValidatePassword(data, name, focus, nameFocus, validateName) {
		const result = await validatePassword(data, name, focus);
		console.log(result);
		await this.setState({
			[nameFocus]: result,
			[validateName]: !result
		});
		console.log('this.state: ', this.state);
		return !result;
	}

	async handleValidatePasswordConfirm(data,password, name, focus, nameFocus, validateName) {
		const result = await validatePasswordConfirm(data,password, name, focus);
		console.log(result);
		await this.setState({
			[nameFocus]: result,
			[validateName]: !result
		});
		console.log('this.state: ', this.state);
		return !result;
	}

	validateForm() {
	  return this.state.emailValidate && this.state.nombreValidate && this.state.apellidoValidate && this.state.claveValidate && this.state.confiClaveValidate;
	}

	render(){
		const {
			nombre,
			apellido,
			email,
			clave,
			confiClave,
      ubicacion,
      escuela,
      instituto,
      coordinacion
    } = this.state;

		if (!this.state.isLoaded) {
			return (<div className="loader"></div>);
		} else {
		return(
			<Container  className="mt-1">
				<Row className="mt-2">
					<Col>
						<p className="h2 text-center mb-6">Registro de Usuario</p>
						<form onSubmit={this.handleSubmit}>
							<div className="grey-text">
								{Label(LabelRequired('Nombre'),'text','nombre',nombre,this.handleChange,true, (e) => this.handleValidateText(e.target,'Nombre', this.state.nombreFocus,'nombreFocus','nombreValidate'),this.state.nombreFocus.toString())}

								{Label(LabelRequired('Apellido'),'text','apellido',apellido,this.handleChange,true, (e) => this.handleValidateText(e.target,'Apellido', this.state.apellidoFocus, 'apellidoFocus', 'apellidoValidate'), this.state.apellidoFocus.toString())}

								{Label(LabelRequired('Email'),'email','email',email,this.handleChange, true, (e) => this.handleValidateEmail(e.target, 'Email', this.state.emailFocus, 'emailFocus', 'emailValidate'), this.state.emailFocus.toString())}

								{Label(LabelRequired('Contraseña'),'password','clave',clave,this.handleChange, true, (e) => this.handleValidatePassword(e.target, 'Contraseña',this.state.claveFocus,'claveFocus','claveValidate'),this.state.claveFocus.toString())}

								{Label(LabelRequired('Confirmar Contraseña'),'password','confiClave',confiClave,this.handleChange, true, (e) => this.handleValidatePasswordConfirm(e.target,clave,'Confirmar Contraseña', this.state.confiClaveFocus,'confiClaveFocus','confiClaveValidate'),this.state.confiClaveFocus.toString())}

								{select(LabelRequired('Ubicación'), 'ubicacion', ubicacion,this.handleChangeSelectub,this.state.ubicacionList, true)}
								<br/>
							{ubicacion === "2"?
								select(LabelRequired('Escuela'), 'escuela', escuela,this.handleChange,this.state.schoolList, true)
							:ubicacion === "3"?
								select(LabelRequired('Instituto'), 'instituto', instituto,this.handleChange,this.state.instituteList, true)
							:ubicacion === "4"?
								select(LabelRequired('Coordinacion'), 'coordinacion', coordinacion,this.handleChange,this.state.coordinationList, true)
								:<span></span>
							}
					</div>
					<br></br>
<div  className="form-group col-md-12">
	<div className="row justify-content-center">
		<MDBBtn color="info" type="submit" disabled={!this.validateForm()} className=" col-md-3" style={{marginRight:'100px'}}>Enviar</MDBBtn>
		<MDBBtn color="info" type="reset" className="col-md-3" > Restablecer  </MDBBtn>
</div>
</div>
			</form>
			<Link to='/'  style={{ textDecoration: 'none','color':' white'}}> Inicio de sesión </Link>
			</Col>
		</Row>
			</Container>
		)
	}
	}
}

export default RegistroUsuario;

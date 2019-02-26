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
			isLoaded: false
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
		this.setState({
			ubicacionList : result
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
								{Label(LabelRequired('nombre'),'text','nombre',nombre,this.handleChange,true)}

								{Label(LabelRequired('Apellido'),'text','apellido',apellido,this.handleChange,true)}

								{Label(LabelRequired('email'),'email','email',email,this.handleChange, true)}

								{Label(LabelRequired('clave'),'password','clave',clave,this.handleChange)}

								{Label(LabelRequired('Confirmar clave'),'password','confiClave',confiClave,this.handleChange)}

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
		<MDBBtn color="info" type="submit" className="col-md-3" style={{marginRight:'100px'}} >Enviar</MDBBtn>
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

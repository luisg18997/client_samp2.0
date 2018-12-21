import React, { Component} from 'react';
import  { Link } from 'react-router-dom';
import { Container, Row, Col, MDBInput, MDBBtn } from 'mdbreact';
import Select from 'react-select';
import { getAllUbicationsList, addNewUser } from '../../connect_api/user/userAPI';

class RegistroUsuario extends Component {
	constructor(){
    super();
    this.state = {
      nombre: "",
      apellido: "",
      email: "",
      clave: "",
			confiClave:"",
      ubicacionList: [],
			ubicacion: ""
    }
    this.handleChangeSelectub = this.handleChangeSelectub.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChangeSelectub = event => {
		console.log("event: ", event.value);
   this.setState({
     ubicacion : event.value
   });
	 console.log("ubicacion: ", this.state.ubicacion);
 }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
		console.log(this.state);
  }

	componentDidMount() {
	 getAllUbicationsList()
	 .then(result => {
		 this.setState({
			 ubicacionList : result
		 });
		 console.log(this.state);
	 })
	}

  handleSubmit = event => {
    event.preventDefault();
		addNewUser(this.state)
		.then(result => {
			if(result === 1) {
				alert('usuario creado exitosamente');
				this.props.history.push('/');
			} else {
				alert('usuario ya existente');
				this.props.history.push('/Registro');
			}
		});
  }
	render(){
		return(
			<Container  className="mt-1">
				<Row className="mt-2">
			 <Col>
			    <p className="h2 text-center mb-6">Registro de Usuario</p>
		<form onSubmit={this.handleSubmit}>
		        <div className="grey-text">
							<MDBInput
								label="nombre"
								type="text"
								onChange={this.handleChange}
								id="nombre"
								value={this.state.nombre}
								required
								validate
								className="is-valid"
								/>

						<MDBInput
							label="Apellido"
							type="text"
							id="apellido"
							onChange={this.handleChange}
							value={this.state.apellido}
							required
							validate
							/>
					<MDBInput
              label="email"
              type="email"
              id="email"
              onChange={this.handleChange}
							value={this.state.email}
              validate
							required
              />
						<MDBInput
                label="clave"
                type="password"
                id="clave"
                onChange={this.handleChange}
								value={this.state.clave}
								validate
								required
              />
						<MDBInput
	                label="Confirmar clave"
	                type="password"
	                id="confiClave"
	                onChange={this.handleChange}
									value={this.state.confiClave}
									validate
									required
	              />
							<label htmlFor="ubicacion"> Ubicación</label>
					<Select
							placeholder={'ubicacion'}
			        onChange={this.handleChangeSelectub}
			        options={this.state.ubicacionList.map(ub =>(
			          {label: ub.Ubicacion, value : ub.ID}
			        ))}
			        />

					</div>
					<br></br>
<div  className="form-group col-md-12">
	<div className="row justify-content-center">
        		<MDBBtn color="primary" type="submit" className="col-md-3" style={{marginRight:'100px'}} >Enviar</MDBBtn>
        			<MDBBtn color="primary" type="reset" className="col-md-3" > Restablecer  </MDBBtn>
</div>
</div>
			</form>
			<MDBBtn color="primary"><Link to='/'  style={{ textDecoration: 'none',
	'color':' white'}}> Volver </Link> </MDBBtn>
			</Col>
		</Row>
			</Container>
		)
	}
}

export default RegistroUsuario;

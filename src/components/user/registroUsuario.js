import React, { Component} from 'react';
import  { Link } from 'react-router-dom';
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
      ubicacionList: [],
			ubicacion: ""
    }
    this.handleChangeSelectub = this.handleChangeSelectub.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChangeSelectub = event => {
   this.setState({
     ubicacion : event.value
   });
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
			if(result === 0) {
				alert('usuario ya existente');
				this.props.history.push('/Registro');
			} else {
				alert('usuario creado exitosamente');
				this.props.history.push('/');
			}
		});
		this.setState({
				nombre: null,
				apellido : null,
				email: null,
				clave: null,
				ubicacion: null
			})
  }
	render(){
		return(
			<div className="container">
			<form onSubmit={this.handleSubmit} className="form-container">

		        <div className="form-group">
		            <label htmlFor="nombre"> Nombre</label>
		            <input className="form-control" type="text" name="nombre" id="nombre" value={this.state.nombre} onChange={this.handleChange}/>
		      </div>

		      <div className="form-group">
		            <label htmlFor="apellido"> Apellido</label>
		            <input className="form-control" type="text" name="apellido" id="apellido" value={this.state.apellido} onChange={this.handleChange} />
		      </div>

		      <div className="form-group">
		        <label htmlFor="email"> Email</label>
		            <input className="form-control" type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange}/>
		      </div>
		      <div className="form-group">
		        <label htmlFor="clave"> Clave</label>
		            <input className="form-control" type="password" name="clave" id="clave" value={this.state.clave} onChange={this.handleChange}/>
		      </div>
		      <div className="form-group">
       			 <label htmlFor="ubicacion"> Ubicación</label>
					<Select
			        onChange={this.handleChangeSelectub}
			        options={this.state.ubicacionList.map(ub =>(
			          {label: ub.Ubicacion, value : ub.ID}
			        ))}
			        />
      			</div>

      			 <br></br>

        		<button className="btn btn-primary">Enviar</button>
			</form>
			<Link to='/'> Volver </Link>
			</div>
		)
	}
}

export default RegistroUsuario;

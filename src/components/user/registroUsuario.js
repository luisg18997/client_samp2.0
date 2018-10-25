import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import { getAllUbicationsList } from '../../connect_api/user/userAPI';

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
		const data = new FormData(event.target);
		console.log(data);
  }
	render(){
		let optionsUb = this.state.ubicacionList.map(ub => (
			<option key={ub.ID} value={ub.ID}>{ub.Ubicacion}</option>
		))
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
						 <select className="form-control" id="ubicacion" name="ubicacion" value={this.state.ubicacion} onChange={this.handleChange}>
						   <option value=""> Seleccione</option>
							 {optionsUb}
						 </select>
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

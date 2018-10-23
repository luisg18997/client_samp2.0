import React, { Component} from 'react';
import {Link} from 'react-router-dom';

class RegistroUsuario extends Component {
	constructor(){
    super();
    this.state = {
      nombre: "",
      apellido: "",
      email: "",
      clave: "",
      ubicacion: []
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }
	render(){
		return(
			<div>
			<form onSubmit={this.handleSubmit}>

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
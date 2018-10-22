import React, { Component} from 'react';
import { getAllRolesList, getAllUbicationsList } from '../connect_api/user/userAPI'


class admin extends Component {

    constructor(){
    super();
    this.state = {
      nombre: "",
      apellido: "",
      email: "",
      rol: [],
      ubicacion: {},
      status: ""
    }
  }

 componentDidMount() {
  getAllRolesList()
  .then(result => {
    this.setState({
      rol: result
    })
    console.log(this.state);
  });
  getAllUbicationsList()
  .then(result => {
    this.setState({
      ubicacion : result
    });
    console.log(this.state);
  })
 }

 updateNombre(event) {
    this.setState({
      nombre: event.target.value
    });
  }

 updateApellido(event) {
    this.setState({
      apellido: event.target.value
    });
  }

 updateEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

   updateRol(event) {
    this.setState({
      rol: event.target.value
    });
  }

   updateUbicacion(event) {
    this.setState({
      ubicacion: event.target.value
    });
  }

   updateStatus(event) {
    this.setState({
      status: event.target.value
    });
  }

  render() {
    const { rolesList } = this.props
    return (
      <div className="container">
        <br></br>

        <div className="form-group">
            <label htmlFor="nombre"> Nombre</label>
            <input className="form-control" type="text" name="nombre" id="nombre" value={this.state.nombre} onChange={this.updateNombre.bind(this)}/>
      </div>

      <div className="form-group">
            <label htmlFor="apellido"> Apellido</label>
            <input className="form-control" type="text" name="apellido" id="apellido" value={this.state.apellido} onChange={this.updateApellido.bind(this)}/>
      </div>

      <div className="form-group">
        <label htmlFor="email"> Email</label>
            <input className="form-control" type="text" name="email" id="email" value={this.state.email} onChange={this.updateEmail.bind(this)}/>
      </div>

      <div className="form-group">
            <label htmlFor="rol"> Rol</label>
            <select className="form-control" id="rol" name="rol" value={this.state.rol} onChange={this.updateRol.bind(this)}>
              <option value=""> Seleccione un Valor </option>
            </select>
      </div>

      <div className="form-group">
        <label htmlFor="ubicacion"> Ubicación</label>
            <input className="form-control" type="text" name="ubicacion" id="ubicacion" value={this.state.ubicacion} onChange={this.updateUbicacion.bind(this)}/>
      </div>

      <div className="form-group">
            <label htmlFor="status"> Status</label>
            <select className="form-control" id="status" name="status" value={this.state.status} onChange={this.updateStatus.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="Activo"> Activo </option>
              <option value="Inactivo"> Inactivo </option>
            </select>
      </div>

        <br></br>

        <button className="btn btn-primary" onClick={this.enviar.bind(this)}>Enviar</button>

      </div>
    );
  }

enviar(){
  alert('Enviado');
}

}

export default admin;

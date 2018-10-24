import React, { Component} from 'react';

class usuario extends Component {

    constructor(){
    super();
    this.state = {
      nombre: "",
      apellido: "",
      email: "",
      rol: ""
    }
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

  render() {
    return (
      <div class="container">

      <h1 align="center">Usuario Nuevo</h1>
      <hr></hr>

        <br></br>

        <form role="form">

        <div class="form-group">
            <label htmlfor="nombre"> Nombre (*)</label>
            <input class="form-control" type="text" name="nombre" id="nombre" placeholder="Ingrese Nombre" required value={this.state.nombre} onChange={this.updateNombre.bind(this)}/>
      </div>

      <div class="form-group">
            <label htmlfor="apellido"> Apellido (*)</label>
            <input class="form-control" type="text" name="apellido" id="apellido" placeholder="Ingrese Apellido" required value={this.state.apellido} onChange={this.updateApellido.bind(this)}/>
      </div>

      <div class="form-group">
        <label htmlfor="email"> Email (*)</label>
            <input class="form-control" type="text" name="email" id="email" placeholder="Ejemplo: correo@ucv.ve" required value={this.state.email} onChange={this.updateEmail.bind(this)}/>
      </div>

      <div class="form-group">
            <label htmlfor="rol">Tipo de Rol (*)</label>
            <select class="form-control" id="rol" name="rol" placeholder="" required value={this.state.rol} onChange={this.updateRol.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="admin"> Administrador </option>
              <option value="usuario"> Usuario </option>
            </select>
      </div>

      <div class="form-group col-md-12">
          <hr></hr>
              <h6 align="center">Campos Obligatorios (*)</h6>
            <hr></hr>
      </div>

      <div class="form-group col-md-12">

        <div class="row justify-content-center">

          <button class="btn btn-primary col-md-3">Enviar</button>
          <button class="btn btn-primary col-md-3">Restablecer</button>

        </div>

      </div>

      </form>

      </div>
    );
  }

}

export default usuario;
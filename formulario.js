import React, { Component } from 'react';
import Header from './components/util/header';
import Contet from './components/contetPrincipal';
import Footer from './components/util/footer';

class planilla extends Component {

    constructor(){
    super();
    this.state = {
      nombre: "",
      apellido: "",
      snombre: "",
      sapellido: "",
      cedula: "",
      email: "",
      genero: "",
      fec_nac: "",
      telef_mov: "",
      telef_loc: "",
      tip_mov: "",
      dedicacion: "",
      departamento: "",
      catedra: "",
      fecha_ini: "",
      fecha_fin: "",
      idac: "",
      unidad_ejec: ""

    }
  }

 updateNombre(event) {
    this.setState({
      nombre: event.target.value
    });
  }

  updateSNombre(event) {
    this.setState({
      nombre: event.target.value
    });
  }

 updateApellido(event) {
    this.setState({
      apellido: event.target.value
    });
  }

  updateSApellido(event) {
    this.setState({
      apellido: event.target.value
    });
  }

 updateEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  updateCedula(event) {
    this.setState({
      cedula: event.target.value
    });
  }

   updateGenero(event) {
    this.setState({
      genero: event.target.value
    });
  }

   updateFechaNac(event) {
    this.setState({
      fec_nac: event.target.value
    });
  }

  updateTeleMov(event) {
    this.setState({
      telef_mov: event.target.value
    });
  }

   updateTeleLoC(event) {
    this.setState({
      telef_loc: event.target.value
    });
  }

  updateTipoMov(event) {
    this.setState({
      tip_mov: event.target.value
    });
  }

  updateDedicacion(event) {
    this.setState({
      dedicacion: event.target.value
    });
  }

  updateDepartamento(event) {
    this.setState({
      departamento: event.target.value
    });
  }

  updateCatedra(event) {
    this.setState({
      catedra: event.target.value
    });
  }

  updateFechaIni(event) {
    this.setState({
      fecha_ini: event.target.value
    });
  }

  updateFechaFin(event) {
    this.setState({
      fecha_fin: event.target.value
    });
  }

  updateIdac(event) {
    this.setState({
      idac: event.target.value
    });
  }

  updateUnidadEjec(event) {
    this.setState({
      unidad_ejec: event.target.value
    });
  }

  render() {
    return (
      <div class="container">

        <br></br>

        <div class="form-group">
            <label htmlfor="nombre">Primer Nombre</label>
            <input class="form-control" type="text" name="nombre" id="nombre" value={this.state.nombre} onChange={this.updateNombre.bind(this)}/>
      </div>

      <div class="form-group">
            <label htmlfor="snombre"> Segundo Nombre</label>
            <input class="form-control" type="text" name="snombre" id="snombre" value={this.state.snombre} onChange={this.updateSNombre.bind(this)}/>
      </div>

      <div class="form-group">
            <label htmlfor="apellido">Primer Apellido</label>
            <input class="form-control" type="text" name="apellido" id="apellido" value={this.state.apellido} onChange={this.updateApellido.bind(this)}/>
      </div>

      <div class="form-group">
            <label htmlfor="sapellido"> Segundo Apellido</label>
            <input class="form-control" type="text" name="sapellido" id="sapellido" value={this.state.sapellido} onChange={this.updateSApellido.bind(this)}/>
      </div>

      <div class="form-group">
            <label htmlfor="cedula"> Cédula</label>
            <input class="form-control" type="text" name="cedula" id="cedula" value={this.state.cedula} onChange={this.updateCedula.bind(this)}/>
      </div>

      <div class="form-group">
        <label htmlfor="email"> Email</label>
            <input class="form-control" type="text" name="email" id="email" value={this.state.email} onChange={this.updateEmail.bind(this)}/>
      </div>

      <div class="form-group">
            <label htmlfor="genero"> Género</label>
            <select class="form-control" id="genero" name="genero" value={this.state.genero} onChange={this.updateGenero.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> Masculino </option>
              <option value="b"> Femenino </option>
            </select>
      </div>

      <div class="form-group">
        <label htmlfor="fec_nac">Fecha de Nacimiento</label>
            <input class="form-control" type="date" name="fec_nac" id="fec_nac" value={this.state.fec_nac} onChange={this.updateFechaNac.bind(this)}/>
      </div>

      <div class="form-group">
        <label htmlfor="telef_mov">Teléfono Móvil</label>
            <input class="form-control" type="text" name="telef_mov" id="telef_mov" value={this.state.telef_mov} onChange={this.updateTeleMov.bind(this)}/>
      </div>

      <div class="form-group">
        <label htmlfor="telef_loc">Teléfono Local</label>
            <input class="form-control" type="text" name="telef_loc" id="telef_loc" value={this.state.telef_loc} onChange={this.updateTeleLoC.bind(this)}/>
      </div>

      <div class="form-group">
            <label htmlfor="tip_mov">Tipo de Movimiento</label>
            <select class="form-control" id="tip_mov" name="tip_mov" value={this.state.tip_mov} onChange={this.updateTipoMov.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div class="form-group">
            <label htmlfor="dedicacion">Dedicación</label>
            <select class="form-control" id="dedicacion" name="dedicacion" value={this.state.dedicacion} onChange={this.updateDedicacion.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div class="form-group">
            <label htmlfor="departamento">Departamento</label>
            <select class="form-control" id="departamento" name="departamento" value={this.state.departamento} onChange={this.updateDepartamento.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div class="form-group">
            <label htmlfor="catedra">Cátedra</label>
            <select class="form-control" id="catedra" name="catedra" value={this.state.catedra} onChange={this.updateCatedra.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div class="form-group">
        <label htmlfor="fecha_ini">Fecha de Inicio</label>
            <input class="form-control" type="date" name="fecha_ini" id="fecha_ini" value={this.state.fecha_ini} onChange={this.updateFechaIni.bind(this)}/>
      </div>

      <div class="form-group">
        <label htmlfor="fecha_fin">Fecha de Fin</label>
            <input class="form-control" type="date" name="fecha_fin" id="fecha_fin" value={this.state.fecha_fin} onChange={this.updateFechaFin.bind(this)}/>
      </div>

      <div class="form-group">
            <label htmlfor="idac">IDAC</label>
            <select class="form-control" id="idac" name="idac" value={this.state.idac} onChange={this.updateIdac.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div class="form-group">
            <label htmlfor="unidad_ejec">Unidad Ejecutora</label>
            <select class="form-control" id="unidad_ejec" name="unidad_ejec" value={this.state.unidad_ejec} onChange={this.updateUnidadEjec.bind(this)}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

        <br></br>

        <button class="btn btn-primary" onClick={this.enviar.bind(this)}>Enviar</button>

      </div>
    );
  }

enviar(){
  alert('Enviado');
}

}

export default planilla;
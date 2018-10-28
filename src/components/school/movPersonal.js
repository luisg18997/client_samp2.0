import React, { Component } from 'react';
import { getAllStatesList,getAllCategoryTypesList,getAllExecuntingUnitList, postMovPer } from '../../connect_api/employee/EmployeeAPI';
import Select from 'react-select';

class MovPersonal extends Component {

    constructor(){
    super();
    this.state = {
      nombre: "",
      apellido: "",
      snombre: "",
      sapellido: "",
      nacionalidad: "",
      cedula: "",
      estado: "",
      StateList: [],
      municipio: "",
      parroquia: "",
      apartamento: "",
      ingreso: "",
      tip_ingreso: "",
      fecha_ingreso: "",
      tip_mov: "",
      departamento: "",
      catedra: "",
      fecha_ini: "",
      fecha_fin: "",
      idac: "",
      categoria: "",
      CategoryTypeList: [],
      dedicacion: "",
      dedicacion_p: "",
      sueldo: "",
      ExecuntingUnit: [],
      unidad_ejec: ""
    

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelectstate = this.handleChangeSelectstate.bind(this);
    this.handleChangeSelectCategoryType = this.handleChangeSelectCategoryType.bind(this);
    this.handleChangeSelectExecuntingUnit = this.handleChangeSelectExecuntingUnit.bind(this);
}
 componentDidMount() {

  getAllStatesList()
  .then(result => {
    this.setState({
      StateList: result
    })
    console.log(this.state.StateList);
  });

     getAllCategoryTypesList()
  .then(result => {
    this.setState({
      CategoryTypeList: result
    })
    console.log(this.state.CategoryTypeList);
  });

    getAllExecuntingUnitList()
  .then(result => {
    this.setState({
      ExecuntingUnitList: result
    })
    console.log(this.state.ExecuntingUnitList);
  });

 }

 handleSubmit = event => {
   event.preventDefault();
   const data = this.state
   alert(data);
   postMovPer(data);

 }

 handleChange = event => {
   this.setState({
     [event.target.id]: event.target.value
   });
 }
 handleChangeSelectstate = event => {
   this.setState({
     estado : event.value
   });
 }

 handleChangeSelectCategoryType = event => {
   this.setState({
     categoria : event.value
   });
 }

 handleChangeSelectExecuntingUnit = event => {
   this.setState({
     unidad_ejec : event.value
   });
 }

  render() {
    return (

      <div className="container">

      <h1 align="center">Datos Personales</h1>
      <hr></hr>

        <br></br>

        <form className="row justify-content">

        <div className="form-group col-md-3">
            <label htmlFor="nombre">Primer Nombre (*)</label>
            <input className="form-control" type="text" name="nombre" id="nombre" placeholder="P. Nombre" required value={this.state.nombre} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="snombre"> Segundo Nombre</label>
            <input className="form-control" type="text" name="snombre" id="snombre" placeholder="S. Nombre" value={this.state.snombre} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="apellido">Primer Apellido (*)</label>
            <input className="form-control" type="text" name="apellido" id="apellido" placeholder="P. Apellido" required value={this.state.apellido} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="sapellido"> Segundo Apellido</label>
            <input className="form-control" type="text" name="sapellido" id="sapellido" placeholder="S. Apellido" value={this.state.sapellido} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="nacionalidad"> Nacionalidad</label>
            <select className="form-control" id="nacionalidad" name="nacionalidad" placeholder="Género" value={this.state.nacionalidad} onChange={this.handleChange}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> V </option>
              <option value="b"> E </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="cedula">Cédula (*)</label>
            <input className="form-control" type="text" name="cedula" id="cedula" placeholder="Cédula" required value={this.state.cedula} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-12">
          <hr></hr>
              <h1 align="center">Dirección</h1>
            <hr></hr>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="estado">Estado (*)</label>
         <Select
              onChange={this.handleChangeSelectstate}
              options={this.state.StateList.map(st =>(
              {label: st.name, value : st.ID}
            ))}
            />
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="municipio">Municipio (*)</label>
            <select className="form-control" id="municipio" name="municipio" placeholder="Género" required value={this.state.municipio} onChange={this.handleChange}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> Masculino </option>
              <option value="b"> Femenino </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="parroquia">Parroquia (*)</label>
            <select className="form-control" id="parroquia" name="parroquia" placeholder="Parroquia" required value={this.state.genero} onChange={this.handleChange}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> Masculino </option>
              <option value="b"> Femenino </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="apartamento">Apartamento</label>
            <input className="form-control" type="text" name="apartamento" id="apartamento" placeholder="Apartamento" value={this.state.apartamento} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-12">
          <hr></hr>
              <h1 align="center">Datos Laborales</h1>
            <hr></hr>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="ingreso">Ingreso (*)</label>
            <select className="form-control" id="ingreso" name="ingreso" required value={this.state.ingreso} onChange={this.handleChange}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="tip_ingreso">Tipo de Ingreso (*)</label>
            <select className="form-control" id="tip_ingreso" name="tip_ingreso" required value={this.state.tip_ingreso} onChange={this.handleChange}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div className="form-group col-md-3">
        <label htmlFor="fecha_ingreso">Fecha de Ingreso (*)</label>
            <input className="form-control" type="date" name="fecha_ingreso" id="fecha_ingreso" required value={this.state.fecha_ingreso} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="tip_mov">Tipo de Movimiento (*)</label>
            <select className="form-control" id="tip_mov" name="tip_mov" required value={this.state.tip_mov} onChange={this.handleChange}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="departamento">Departamento (*)</label>
            <select className="form-control" id="departamento" name="departamento" required value={this.state.departamento} onChange={this.handleChange}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="catedra">Cátedra (*)</label>
            <select className="form-control" id="catedra" name="catedra" required value={this.state.catedra} onChange={this.handleChange}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

       <div className="form-group col-md-3">
            <label htmlFor="unidad_ejec">Unidad Ejecutora (*)</label>
         <Select
              onChange={this.handleChangeSelectExecuntingUnit}
              options={this.state.ExecuntingUnitList.map(EU =>(
              {label: EU.name, value : EU.ID}
            ))}
            />
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="idac">IDAC (*)</label>
            <select className="form-control" id="idac" name="idac" required value={this.state.idac} onChange={this.handleChange}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="dedicacion">Dedicación Actual (*)</label>
            <select className="form-control" id="dedicacion" name="dedicacion" required value={this.state.dedicacion} onChange={this.handleChange}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="dedicacion_p">Dedicación Propuesta</label>
            <select className="form-control" id="dedicacion_p" name="dedicacion_p" value={this.state.dedicacion_p} onChange={this.handleChange}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="categoria">Categoria (*)</label>
        <Select
              onChange={this.handleChangeSelectCategoryType}
              options={this.state.CategoryTypeList.map(ct =>(
              {label: ct.name, value : ct.ID}
            ))}
            />
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="sueldo">Sueldo (*)</label>
            <select className="form-control" id="sueldo" name="sueldo" required value={this.state.sueldo} onChange={this.handleChange}>
              <option value=""> Seleccione un Valor </option>
              <option value="a"> A </option>
              <option value="b"> B </option>
            </select>
      </div>

      <div className="form-group col-md-3">
        <label htmlFor="fecha_ini">Fecha de Inicio (*)</label>
            <input className="form-control" type="date" name="fecha_ini" id="fecha_ini" required value={this.state.fecha_ini} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
        <label htmlFor="fecha_fin">Fecha de Fin (*)</label>
            <input className="form-control" type="date" name="fecha_fin" id="fecha_fin" required value={this.state.fecha_fin} onChange={this.handleChange}/>
      </div>

  <div className="form-group col-md-3">
    <label htmlFor="anexo">Anexos (*)</label>
        <textarea name="anexo" required placeholder="Curriculum con sus anexos"></textarea>
  </div>

  <div className="form-group col-md-3">
    <label htmlFor="motivo">Motivos (*)</label>
        <textarea name="motivo" required placeholder="Indique el motivo de la Planilla"></textarea>
  </div>

  <div className="form-group col-md-12">
          <hr></hr>
              <h6 align="center">Campos Obligatorios (*)</h6>
            <hr></hr>
      </div>

    <div className="form-group col-md-12">

        <div className="row justify-content-center">

          <button className="btn btn-primary col-md-3">Enviar</button>
          <button className="btn btn-primary col-md-3">Restablecer</button>

        </div>

      </div>

      </form>

      </div>
    );
  }

}

export default MovPersonal;
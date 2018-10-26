import React, { Component} from 'react';
import Select from 'react-select';
import {getAllDepartamentBySchoolList, getAllChairList} from '../../connect_api/faculty/FacultyAPI'
import {getAllGenderList} from '../../connect_api/employee/EmployeeAPI'

class Oficio extends Component {
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
		generoList : [],
		fec_nac: "",
		telef_mov: "",
		telef_loc: "",
		tip_mov: "",
		tipoMovList: [],
		dedicacion: "",
		dedicacionList : [],
		departamento: "",
		departamentoList : [],
		catedra: "",
		catedraList: [],
		fecha_ini: "",
		fecha_fin: "",
		idac: "",
		idacList: [],
		unidad_ejec: "",
		unidadejecList : []

	}
}

 handleChange = event => {
   this.setState({
     [event.target.id]: event.target.value
   });
 }

handlechangeChair = data => {
	this.setState({
		catedraList: []
	});
	console.log(this.state.catedraList);
	if(data !== 0) {
		getAllChairList(data)
		.then(result => {
	    this.setState({
	      catedraList: result
	    })
	    console.log(this.state.catedraList);
	  });
	}
}
 componentDidMount() {
  getAllDepartamentBySchoolList()
  .then(result => {
    this.setState({
      departamentoList: result
    })
    console.log(this.state.departamentoList);
  });
	getAllGenderList()
  .then(result => {
    this.setState({
      generoList: result
    })
    console.log(this.state.generoList);
  });
 }

 handleChangeSelectdept = event => {
   this.setState({
     departamento : event.value
   });
	 this.handlechangeChair(event.value);
 }

render() {
	return (

		<div className="container">

		<h1 align="center">Registro de Planilla Oficio</h1>
		<hr></hr>

			<br></br>

			<form className="row justify-content-center">

			<div className="form-group col-md-3">
					<label htmlFor="nombre">Primer Nombre (*)</label>
					<input className="form-control" type="text" name="nombre" id="nombre" placeholder="P. Nombre" required value={this.state.nombre} onChange={this.handleChange}/>
		</div>

		<div className="form-group col-md-3">
					<label htmlFor="snombre"> Segundo Nombre (*)</label>
					<input className="form-control" type="text" name="snombre" id="snombre" placeholder="S. Nombre" required value={this.state.snombre} onChange={this.handleChange}/>
		</div>

		<div className="form-group col-md-3">
					<label htmlFor="apellido">Apellido Paterno (*)</label>
					<input className="form-control" type="text" name="apellido" id="apellido" placeholder="P. Apellido" required value={this.state.apellido} onChange={this.handleChange}/>
		</div>

		<div className="form-group col-md-3">
					<label htmlFor="sapellido">Apellido Materno</label>
					<input className="form-control" type="text" name="sapellido" id="sapellido" placeholder="S. Apellido" value={this.state.sapellido} onChange={this.handleChange}/>
		</div>

		<div className="form-group col-md-3">
					<label htmlFor="cedula"> Cédula (*)</label>
					<input className="form-control" type="text" name="cedula" id="cedula" placeholder="Cédula" required value={this.state.cedula} onChange={this.handleChange}/>
		</div>

		<div className="form-group col-md-3">
			<label htmlFor="email"> Email (*)</label>
					<input className="form-control" type="text" name="email" id="email" placeholder="Correo" required value={this.state.email} onChange={this.handleChange}/>
		</div>

		<div className="form-group col-md-3">
					<label htmlFor="genero"> Género (*)</label>
					<Select
						options={this.state.generoList.map(gen =>(
						{label: gen.Gender, value : gen.ID}
					))}
					/>
		</div>

		<div className="form-group col-md-3">
			<label htmlFor="fec_nac">Fecha de Nacimiento (*)</label>
					<input className="form-control" type="date" name="fec_nac" id="fec_nac" required value={this.state.fec_nac} onChange={this.handleChange}/>
		</div>

		<div className="form-group col-md-3">
			<label htmlFor="telef_mov">Teléfono Móvil (*)</label>
					<input className="form-control" type="text" name="telef_mov" id="telef_mov" placeholder="Teléfono Movil" required value={this.state.telef_mov} onChange={this.handleChange}/>
		</div>

		<div className="form-group col-md-3">
			<label htmlFor="telef_loc">Teléfono Local (*)</label>
					<input className="form-control" type="text" name="telef_loc" id="telef_loc" placeholder="Teléfono Local" required value={this.state.telef_loc} onChange={this.handleChange}/>
		</div>

		<div className="form-group col-md-3">
					<label htmlFor="tip_mov">Tipo de Movimiento (*)</label>
					<Select
						options={this.state.tipoMovList.map(gen =>(
						{label: gen.Gender, value : gen.ID}
					))}
					/>
		</div>

		<div className="form-group col-md-3">
					<label htmlFor="dedicacion">Dedicación (*)</label>
					<Select
						options={this.state.dedicacionList.map(gen =>(
						{label: gen.Gender, value : gen.ID}
					))}
					/>
		</div>

		<div className="form-group col-md-3">
					<label htmlFor="departamento">Departamento (*)</label>
					<Select
						onChange={this.handleChangeSelectdept}
						options={this.state.departamentoList.map(dept =>(
						{label: dept.name, value : dept.ID}
					))}
					/>
		</div>

		<div className="form-group col-md-3">
					<label htmlFor="catedra">Cátedra (*)</label>
					<Select
						options={this.state.catedraList.map(cat =>(
						{label: cat.name, value : cat.ID}
					))}
					/>
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
					<label htmlFor="idac">IDAC (*)</label>
					<Select
						options={this.state.idacList.map(gen =>(
						{label: gen.Gender, value : gen.ID}
					))}
					/>
		</div>

		<div className="form-group col-md-3">
					<label htmlFor="unidad_ejec">Unidad Ejecutora (*)</label>
					<Select
						options={this.state.unidadejecList.map(gen =>(
						{label: gen.Gender, value : gen.ID}
					))}
					/>
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
	)
}
}

export default Oficio;

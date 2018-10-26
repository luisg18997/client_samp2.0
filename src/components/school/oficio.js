import React, { Component} from 'react';

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

 handleChange = event => {
   this.setState({
     [event.target.id]: event.target.value
   });
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
					<input className="form-control" type="text" name="nombre" id="nombre" placeholder="P. Nombre" required value={this.state.nombre} onChange={this.handleChange)}/>
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
					<select className="form-control" id="genero" name="genero" placeholder="Género" required value={this.state.genero} onChange={this.handleChange}>
						<option value=""> Seleccione un Valor </option>
						<option value="a"> Masculino </option>
						<option value="b"> Femenino </option>
					</select>
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
					<input className="form-control" type="text" name="telef_loc" id="telef_loc" placeholder="Teléfono Local" required value={this.state.telef_loc} onChange={this.updateTeleLoC.bind(this)}/>
		</div>

		<div className="form-group col-md-3">
					<label htmlFor="tip_mov">Tipo de Movimiento (*)</label>
					<select className="form-control" id="tip_mov" name="tip_mov" required value={this.state.tip_mov} onChange={this.updateTipoMov.bind(this)}>
						<option value=""> Seleccione un Valor </option>
						<option value="a"> A </option>
						<option value="b"> B </option>
					</select>
		</div>

		<div className="form-group col-md-3">
					<label htmlFor="dedicacion">Dedicación (*)</label>
					<select className="form-control" id="dedicacion" name="dedicacion" required value={this.state.dedicacion} onChange={this.updateDedicacion.bind(this)}>
						<option value=""> Seleccione un Valor </option>
						<option value="a"> A </option>
						<option value="b"> B </option>
					</select>
		</div>

		<div className="form-group col-md-3">
					<label htmlFor="departamento">Departamento (*)</label>
					<select className="form-control" id="departamento" name="departamento" required value={this.state.departamento} onChange={this.updateDepartamento.bind(this)}>
						<option value=""> Seleccione un Valor </option>
						<option value="a"> A </option>
						<option value="b"> B </option>
					</select>
		</div>

		<div className="form-group col-md-3">
					<label htmlFor="catedra">Cátedra (*)</label>
					<select className="form-control" id="catedra" name="catedra" required value={this.state.catedra} onChange={this.updateCatedra.bind(this)}>
						<option value=""> Seleccione un Valor </option>
						<option value="a"> A </option>
						<option value="b"> B </option>
					</select>
		</div>

		<div className="form-group col-md-3">
			<label htmlFor="fecha_ini">Fecha de Inicio (*)</label>
					<input className="form-control" type="date" name="fecha_ini" id="fecha_ini" required value={this.state.fecha_ini} onChange={this.updateFechaIni.bind(this)}/>
		</div>

		<div className="form-group col-md-3">
			<label htmlFor="fecha_fin">Fecha de Fin (*)</label>
					<input className="form-control" type="date" name="fecha_fin" id="fecha_fin" required value={this.state.fecha_fin} onChange={this.updateFechaFin.bind(this)}/>
		</div>

		<div className="form-group col-md-3">
					<label htmlFor="idac">IDAC (*)</label>
					<select className="form-control" id="idac" name="idac" required value={this.state.idac} onChange={this.updateIdac.bind(this)}>
						<option value=""> Seleccione un Valor </option>
						<option value="a"> A </option>
						<option value="b"> B </option>
					</select>
		</div>

		<div className="form-group col-md-3">
					<label htmlFor="unidad_ejec">Unidad Ejecutora (*)</label>
					<select className="form-control" id="unidad_ejec" name="unidad_ejec" required value={this.state.unidad_ejec} onChange={this.updateUnidadEjec.bind(this)}>
						<option value=""> Seleccione un Valor </option>
						<option value="a"> A </option>
						<option value="b"> B </option>
					</select>
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

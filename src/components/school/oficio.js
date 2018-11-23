import React, { Component} from 'react';
import Select from 'react-select';
import {getAllDepartamentBySchoolList, getAllChairList, getSchool} from '../../connect_api/faculty/FacultyAPI'
import {getAllGenderList, getAllExecuntingUnitList, getAllDedicationTypesList } from '../../connect_api/employee/EmployeeAPI'
import {getAllMovementTypeslist, addNewFormOfice, CodeOfice} from '../../connect_api/formData/formDataAPI'

class Oficio extends Component {
	constructor(){
	super();
	this.state = {
		"empleado_id": 0,
		"codigo" : "",
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
		DedicationTypes: [],
		departamento: "",
		departamentoList : [],
		"schoolData": [],
		catedra: "",
		catedraList: [],
		fecha_ini: "",
		fecha_fin: "",
		idac: "",
		idacList: [],
		unidad_ejec: "",
		ExecuntingUnit: [],

	}

	    this.handleChangeSelectExecuntingUnit = this.handleChangeSelectExecuntingUnit.bind(this);
	     this.handleChangeSelectDedicationTypes = this.handleChangeSelectDedicationTypes.bind(this);
	     this.handleChangeSelectTypesMov = this.handleChangeSelectTypesMov.bind(this);
	     this.handleChangeCode = this.handleChangeCode.bind(this);
}


handleChangeCode = () => {
	CodeOfice()
	.then(result => {
    this.setState({
      codigo: result
    })
    console.log("codigo: ",this.state.codigo);
  });
  this.handleSubmitOfice();
}

handleSubmitOfice = () => {
  const employee = {
		nacionality_id : 1,
		documentation_id : 1,
		identification : this.state.cedula ,
		first_name : this.state.nombre,
		second_name: this.state.snombre,
surname: this.state.apellido,
second_surname : this.state.sapellido,
birth_date : this.state.fec_nac,
gender_id : this.state.genero,
email: this.state.email,
school_id : this.state.schoolData[0].ID,
institute_id : 0,
coordination_id : 0,
departament_id : this.state.departamento,
chair_id : this.state.catedra,
mobile_phone_number : this.state.telef_mov,
local_phone_number : this.state.telef_loc
};
console.log("employee: ", employee);
const ofice = {
	code_form : this.state.codigo,
	dedication_id : this.state.dedicacion,
movement_type_id : this.state.tip_mov,
start_date : this.state.fecha_ini,
finish_date : this.state.fecha_fin,
school_id : this.state.schoolData[0].ID,
institute_id : 0,
coordination_id : 0
};
console.log("ofice: ", ofice);
const userID = 0;
const empleadoID = this.state.empleado_id;
	addNewFormOfice(employee, ofice, userID, empleadoID )
	.then(result => {
		if(result === 1) {
			alert('planilla de oficio creado exitosamente');
			this.props.history.push('/Escuela');
		} else {
			alert('planilla de oficio NO creado exitosamente');
			this.props.history.push('/Escuela');
		}
	});
}


handleSubmit = event => {
  event.preventDefault();
	this.handleChangeCode();

}


 componentDidMount() {
  getAllDepartamentBySchoolList()
  .then(result => {
    this.setState({
      departamentoList: result
    })
    console.log("departamentoList: ", this.state.departamentoList);
  });

	getSchool(1)
	.then(result => {
		this.setState({
			schoolData:result
		})
		console.log("schoolData: ", this.state.schoolData)
	})


	getAllGenderList()
  .then(result => {
    this.setState({
      generoList: result
    })
    console.log("generoList: ",this.state.generoList);
  });

    getAllExecuntingUnitList()
  .then(result => {
    this.setState({
      ExecuntingUnit: result
    })
    console.log("ExecuntingUnit: ",this.state.ExecuntingUnit);
  });

      getAllDedicationTypesList()
  .then(result => {
    this.setState({
      DedicationTypes: result
    })
    console.log("DedicationTypes: ",this.state.DedicationTypes);
  });

 getAllMovementTypeslist()
  .then(result => {
    this.setState({
      tipoMovList: result
    })
    console.log("tipoMovList: ",this.state.tipoMovList);
  });

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
	    console.log("catedraList: ",this.state.catedraList);
	  });
	}
}


 handleChangeSelectdept = event => {
   this.setState({
     departamento : event.value
   });
	 this.handlechangeChair(event.value);
 }


  handleChangeSelectExecuntingUnit = event => {
   this.setState({
     unidad_ejec : event.value
   });
 }


 handleChangeSelectTypesMov = event => {
   this.setState({
     tip_mov : event.value
   });
 }

    handleChangeSelectDedicationTypes = event => {
   this.setState({
     dedicacion : event.value
   });
 }

 handleChangeSelectGender = event => {
this.setState({
	genero : event.value
});
}

handleChangeSelectcat = event => {
this.setState({
 catedra : event.value
});
}

render() {
	return (

		<div className="container">

		<h1 align="center">Registro de Planilla Oficio</h1>
		<hr></hr>

			<br></br>

			<form className="row justify-content-center" onSubmit={this.handleSubmit}>

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
						onChange={this.handleChangeSelectGender}
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
              onChange={this.handleChangeSelectTypesMov}
              options={this.state.tipoMovList.map(mt =>(
              {label: mt.name, value : mt.ID}
            ))}
            />
		</div>

		<div className="form-group col-md-3">
					<label htmlFor="dedicacion">Dedicación (*)</label>
			       <Select
              onChange={this.handleChangeSelectDedicationTypes}
              options={this.state.DedicationTypes.map(dt =>(
              {label: dt.dedi, value : dt.ID}
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
						onChange={this.handleChangeSelectcat}
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
              onChange={this.handleChangeSelectExecuntingUnit}
              options={this.state.ExecuntingUnit.map(EU =>(
              {label: EU.des, value : EU.ID}
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

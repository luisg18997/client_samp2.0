import React, { Component} from 'react';
import Select from 'react-select';
import { MDBBtn } from 'mdbreact';
import {Label, LabelRequired, selectForm} from '../util/forms';
import {
  getAllDepartamentBySchoolList,
  getAllChairList,
  getSchool
} from '../../connect_api/faculty/FacultyAPI'
import {
  getAllGenderList,
  getAllExecuntingUnitListFilter,
  getAllDedicationTypesList,
  getAllIdacCodesFilterVacantDateNotNullList,
  getAllDocumentationList,
  getAllNacionalitiesList
} from '../../connect_api/employee/EmployeeAPI'
import {
  getAllMovementTypeslist,
 addNewFormOfice,
 CodeOfice
} from '../../connect_api/formData/formDataAPI'

class Oficio extends Component {
  constructor(){
  super();
  this.state = {
    empleado_id: 0,
    codigo : "",
    nombre: "",
    apellido: "",
    snombre: "",
    sapellido: "",
    documento: "",
    nacionalidad: "",
    cedula: "",
    email: "",
    genero: "",
    generoList : [],
    fec_nac: "0001-01-01",
    telef_mov: "",
    telef_loc: "",
    tip_mov: "",
    tipoMovList: [],
    dedicacion: "",
    DedicationTypes: [],
    departamento: "",
    departamentoList : [],
    schoolData: [],
    catedra: "",
    catedraList: [],
    fecha_ini: "0001-01-01",
    fecha_fin: "0001-01-01",
    idac: "",
    idacList: [],
    unidad_ejec: "",
    ExecuntingUnit: [],
    NacionalitiesList: [],
    documentationList: [],
  }

  this.handleChangeSelectExecuntingUnit = this.handleChangeSelectExecuntingUnit.bind(this);
  this.handleChangeSelectDedicationTypes = this.handleChangeSelectDedicationTypes.bind(this);
  this.handleChangeSelectTypesMov = this.handleChangeSelectTypesMov.bind(this);
}


handleSubmit = event => {
  event.preventDefault();
  CodeOfice(this.state.schoolData.ID, 0, 0)
	.then(result => {
    this.setState({
      codigo : result.ofice
    })
    console.log("codigo: ", this.state.codigo);
    const employee = {
  		nacionality_id : this.state.nacionalidad,
  		documentation_id : this.state.documento,
  		identification : this.state.cedula ,
  		first_name : this.state.nombre.toUpperCase(),
  		second_name: this.state.snombre.toUpperCase(),
      idac_id : this.state.idac,
      surname: this.state.apellido.toUpperCase(),
      second_surname : this.state.sapellido.toUpperCase(),
      birth_date : this.state.fec_nac,
      gender_id : this.state.genero,
      email: this.state.email,
      school_id : this.state.schoolData.ID,
      institute_id : 0,
      coordination_id : 0,
      departament_id : this.state.departamento,
      chair_id : this.state.catedra,
      mobile_phone_number : this.state.telef_mov,
      local_phone_number : this.state.telef_loc
    };
    console.log("employee: ", employee);
    const ofice = {
    	code_form : result.ofice,
    	dedication_id : this.state.dedicacion,
      movement_type_id : this.state.tip_mov,
      start_date : this.state.fecha_ini,
      finish_date : this.state.fecha_fin,
      school_id : this.state.schoolData.ID,
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
        if (window.confirm("¿Desea registrar la planilla de Movmimiento?")) {
          this.props.history.push('/Escuela/MovPersonal', {cedula:employee.identification});
        } else {
          this.props.history.push('/Escuela');
        }
  		} else {
  			alert('planilla de oficio NO creado exitosamente');
        this.props.history.push('/Escuela');
  		}
  	});
  });
}

handleChangeIdac = data => {
  getAllIdacCodesFilterVacantDateNotNullList(data)
  .then(result => {
    this.setState({
      idacList : result
    })
    console.log("idacList: ", this.state.idacList);
  });
}

handleChangeExecUnit = data => {
  getAllExecuntingUnitListFilter(data)
  .then(result => {
    this.setState({
      ExecuntingUnit : result
  })
  console.log("ExecuntingUnit: ",this.state.ExecuntingUnit);
  let ExecID = [];
  for (let i = 0; i< result.length; i++) {
    ExecID[i] = result[i].ID;
  }
  console.log('ExecID: ', ExecID);
  this.handleChangeIdac(ExecID);
  });
}

 componentDidMount() {
  getSchool(1)
	.then(result => {
    console.log(result);
		const school ={
			ID : result.id,
			code : result.code,
			name : result.school,
			codeFilter : result.code.substr(0, 4)
		}
		this.setState({
			schoolData : school
		})
		console.log("schoolData: ", this.state.schoolData);
		getAllDepartamentBySchoolList(school.ID)
		.then(result => {
  		this.setState({
    			departamentoList: result
 			})
  		console.log("departamentoList: ", this.state.departamentoList);
      this.handleChangeExecUnit(school.codeFilter);
		});

	})

	getAllGenderList()
  .then(result => {
    this.setState({
      generoList: result
    })
    console.log("generoList: ",this.state.generoList);
  });

  getAllNacionalitiesList()
  .then(result => {
    result = result.map(res => ({
      ID: res.ID,
      label: res.Name
    }))
    this.setState({
      NacionalitiesList: result
    })
    console.log("NacionalitiesList: ",this.state.NacionalitiesList);
  });


  getAllDocumentationList()
  .then(result => {
    this.setState({
      documentationList: result
    })
    console.log("documentationList: ",this.state.documentationList);
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
   console.log(event.target.id,": ", event.target.value);
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
   let codeFilterSelected = "";
   	for (var i = 0; i < this.state.departamentoList.length; i++) {
   		if (this.state.departamentoList[i].ID === event.value){
   			codeFilterSelected = this.state.departamentoList[i].codeFilter;
        this.handleChangeExecUnit(codeFilterSelected);
   		}
   	}
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

handleChangeSelectNacionalities = event => {
   this.setState({
     nacionalidad : event.target.value
   });
   console.log(this.state.nacionalidad)
 }

 handleChangeSelectDocumentacion = event => {
   this.setState({
     documento : event.value
   });
 }

handleChangeSelectcat = event => {
this.setState({
 catedra : event.value
});
	let codeFilterSelected = "";
   	for (var i = 0; i < this.state.catedraList.length; i++) {
   		if (this.state.catedraList[i].ID === event.value){
   			codeFilterSelected = this.state.catedraList[i].code;
   			this.handleChangeExecUnit(codeFilterSelected);
   		}
   	}
}

handleChangeSelecIdac = event => {
  this.setState({
   idac : event.value
  });
}

render() {
  const nacionalidad = this.state.nacionalidad;
  return (
    <div className="content">
    <h3 align="center"><strong>Registro de Planilla Oficio</strong></h3>
    <hr></hr>
      <form className="row justify-content-center" onSubmit={this.handleSubmit}>
        <div className="form-group col-md-3">
          {Label(LabelRequired('Primer Nombre'), 'text','nombre',this.state.nombre,this.handleChange, true)}
        </div>

      <div className="form-group col-md-3">
        {Label('Segundo Nombre','text', 'snombre',this.state.snombre,this.handleChange, false)}
      </div>

      <div className="form-group col-md-3">
        {Label(LabelRequired('Primer Apellido'),'text', 'apellido',this.state.apellido,this.handleChange, true)}
      </div>

    <div className="form-group col-md-3">
        {Label('Segundo Apellido','text', 'sapellido',this.state.sapellido,this.handleChange, false)}
    </div>

    <div className="form-group col-md-3">
          <label htmlFor="nacionalidad"> Tipo de Documentación</label>
          <Select
            onChange={this.handleChangeSelectDocumentacion}
            options={this.state.documentationList.map(doc =>(
              {label: doc.Name, value : doc.ID}
            ))}
          />
    </div>

    <div className="form-group col-md-3">
      {selectForm(LabelRequired('Nacionalidad'),nacionalidad, this.handleChange,this.state.NacionalitiesList)}
    </div>
    <div className="form-group col-md-3">
        {Label(LabelRequired('Cédula'),'text', 'cedula',this.state.cedula,this.handleChange, true)}
    </div>

    <div className="form-group col-md-3">
      {Label(LabelRequired('Email'),'email', 'email',this.state.email,this.handleChange, true)}
    </div>

    <div className="form-group col-md-3">
          <label htmlFor="genero"> Género  <label style={{color:'red'}}>*</label></label>
          <Select
            onChange={this.handleChangeSelectGender}
            options={this.state.generoList.map(gen =>(
            {label: gen.Gender, value : gen.ID}
          ))}
          />
    </div>

    <div className="form-group col-md-3">
      {Label(LabelRequired('Fecha de Nacimiento'),'date', 'fec_nac',this.state.fec_nac,this.handleChange, true)}
    </div>

    <div className="form-group col-md-3">
      {Label(LabelRequired('Teléfono Móvil'),'text', 'telef_mov',this.state.telef_mov,this.handleChange, true)}
    </div>

    <div className="form-group col-md-3">
      {Label(LabelRequired('Teléfono Local'),'text', 'telef_loc',this.state.telef_loc,this.handleChange, true)}
    </div>

  <div className="form-group col-md-3">
          <label htmlFor="tip_mov">Tipo de Movimiento <label style={{color:'red'}}>*</label></label>
     <Select
              onChange={this.handleChangeSelectTypesMov}
              options={this.state.tipoMovList.map(mt =>(
              {label: mt.name, value : mt.ID}
            ))}
            />
    </div>

    <div className="form-group col-md-3">
          <label htmlFor="dedicacion">Dedicación  <label style={{color:'red'}}>*</label></label>
           <Select
              onChange={this.handleChangeSelectDedicationTypes}
              options={this.state.DedicationTypes.map(dt =>(
              {label: dt.dedi, value : dt.ID}
            ))}
            />
    </div>

    <div className="form-group col-md-3">
          <label htmlFor="departamento">Departamento  <label style={{color:'red'}}>*</label></label>
        <Select
            onChange={this.handleChangeSelectdept}
            options={this.state.departamentoList.map(dept =>(
            {label: dept.name, value : dept.ID}
          ))}
          />
    </div>

    <div className="form-group col-md-3">
          <label htmlFor="catedra">Cátedra  <label style={{color:'red'}}>*</label></label>
      <Select
            onChange={this.handleChangeSelectcat}
            options={this.state.catedraList.map(cat =>(
            {label: cat.name, value : cat.ID}
          ))}
          />
    </div>

    <div className="form-group col-md-3">
      {Label(LabelRequired('Fecha de Inicio'),'date', 'fecha_ini',this.state.fecha_ini,this.handleChange)}
    </div>

    <div className="form-group col-md-3">
      {Label(LabelRequired('Fecha de Fin'),'date', 'fecha_fin',this.state.fecha_fin,this.handleChange)}
    </div>

    <div className="form-group col-md-3">
          <label htmlFor="unidad_ejec">Unidad Ejecutora  <label style={{color:'red'}}>*</label></label>
         <Select
              onChange={this.handleChangeSelectExecuntingUnit}
              options={this.state.ExecuntingUnit.map(EU =>(
              {label: EU.des, value : EU.ID}
            ))}
            />
    </div>

    <div className="form-group col-md-3">
          <label htmlFor="idac">IDAC  <label style={{color:'red'}}>*</label></label>
          <Select
            onChange={this.handleChangeSelecIdac}
            options={this.state.idacList.map(idac =>(
            {label: idac.Codigo, value : idac.ID}
            ))}
          />
    </div>

    <div className="form-group col-md-4">
        <hr></hr>
            <h6 align="center" style={{color:'red'}}>Campos Obligatorios *</h6>
          <hr></hr>
    </div>

  <div className="form-group col-md-10">

      <div className="row justify-content-center">

        <MDBBtn color="primary" type="submit" className=" col-md-3" style={{marginRight:'100px'}}>Enviar</MDBBtn>
        <MDBBtn color="primary" type="reset" className=" col-md-3">Restablecer</MDBBtn>

      </div>
    </div>

    </form>
    </div>
  )
}
}
export default Oficio;

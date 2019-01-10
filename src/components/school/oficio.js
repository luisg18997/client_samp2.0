import React, { Component} from 'react';
import { MDBBtn } from 'mdbreact';
import {Label, LabelRequired, select} from '../util/forms';
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
          this.props.history.replace('/Escuela/MovPersonal', {cedula:employee.identification});
        } else {
          this.props.history.replace('/Escuela');
        }
  		} else {
  			alert('planilla de oficio NO creado exitosamente');
        this.props.history.replace('/Escuela');
  		}
  	});
  });
}

handeCodeFilterSelected = (data, value) => {
  let codeFilterSelected ="";
  for (var i = 0; i < data.length; i++) {
    if (data[i].ID === value){
      let codeFilterSelected = data[i].codeFilter;
      return codeFilterSelected;
    }
  }
  if (codeFilterSelected === "") {
    return null;
  }
}

handleChangeIdac = data => {
  getAllIdacCodesFilterVacantDateNotNullList(data)
  .then(result => {
    result = result.map(res => ({
      ID: res.ID,
      label: res.Codigo,
      UnidejecDesc: res.UnidejecDesc,
      UnidejecID: res.UnidejecID
    }))
    this.setState({
      idac : "",
      idacList : result
    })
    console.log("idacList: ", this.state.idacList);
  });
}

handleChangeExecUnit = data => {
  getAllExecuntingUnitListFilter(data)
  .then(result => {
   result = result.map(res => ({
     ID: res.ID,
     label: res.des,
   }))
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
      result = result.map(res => ({
        ID: res.ID,
        code: res.code,
        label: res.name,
        codeFilter: res.codeFilter
      }))
  		this.setState({
    			departamentoList: result
 			})
  		console.log("departamentoList: ", this.state.departamentoList);
      this.handleChangeExecUnit(school.codeFilter);
		});

	})

	getAllGenderList()
  .then(result => {
    result = result.map(res => ({
      ID: res.ID,
      label: res.Gender
    }))
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
    result = result.map(res => ({
      ID: res.ID,
      label: res.Name
    }))
    this.setState({
      documentationList: result
    })
    console.log("documentationList: ",this.state.documentationList);
  });

  getAllDedicationTypesList()
  .then(result => {
    result = result.map(res => ({
      ID: res.ID,
      label: res.dedi
    }))
    this.setState({
      DedicationTypes: result
    })
    console.log("DedicationTypes: ",this.state.DedicationTypes);
  });

 getAllMovementTypeslist()
  .then(result => {
    result = result.map(res => ({
      ID: res.ID,
      label: res.name
    }))
    this.setState({
      tipoMovList: result
    })
    console.log("tipoMovList: ",this.state.tipoMovList);
  });
 }


 handleChange = event => {
   this.setState({
     [event.target.name]: event.target.value
   });
   console.log(event.target.name,": ", event.target.value);
 }

handlechangeChair = data => {
	this.setState({
		catedraList: [],
    catedra: "",
	});
	console.log(this.state.catedraList);
	if(data !== "") {
		getAllChairList(data)
		.then(result => {
      result = result.map(res => ({
        ID: res.ID,
        code: res.code,
        label: res.name,
        codeFilter:res.code
      }))
	    this.setState({
        catedra: "",
	      catedraList: result
	    })
	    console.log("catedraList: ",this.state.catedraList);
	  });
	}
}

handleChangeSelectdept = event => {
   this.setState({
     departamento : event.target.value
   });
   let codeFilterSelected = "";
   if (event.target.value !== "" ) {
    codeFilterSelected = this.handeCodeFilterSelected(this.state.departamentoList, parseInt(event.target.value));
    this.handleChangeExecUnit(codeFilterSelected);
   this.handlechangeChair(event.target.value);
 } else {
   this.handleChangeExecUnit(this.state.schoolData.codeFilter);
 }
}

handleChangeSelectcat = event => {
  this.setState({
    catedra : event.target.value
  });
  let codeFilterSelected = ""
  if(event.target.value !== "") {
    codeFilterSelected = this.handeCodeFilterSelected(this.state.catedraList, parseInt(event.target.value));
    console.log(codeFilterSelected)
      this.handleChangeExecUnit(codeFilterSelected);
    } else {
      codeFilterSelected = this.handeCodeFilterSelected(this.state.departamentoList, parseInt(this.state.departamento));
      this.handleChangeExecUnit(codeFilterSelected);
  }
}

render() {
  const nacionalidad = this.state.nacionalidad;
  const genero = this.state.genero;
  const documento = this.state.documento;
  const dedicacion = this.state.dedicacion;
  const tip_mov = this.state.tip_mov;
  const departamento = this.state.departamento;
  const catedra = this.state.catedra;
  const unidad_ejec = this.state.unidad_ejec;
  const idac = this.state.idac;
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
      {select(LabelRequired('Tipo de Documentación'),'documento', documento, this.handleChange,this.state.documentationList, true)}
    </div>

    <div className="form-group col-md-3">
      {select(LabelRequired('Nacionalidad'),'nacionalidad', nacionalidad, this.handleChange,this.state.NacionalitiesList, true)}
    </div>
    <div className="form-group col-md-3">
        {Label(LabelRequired('Cédula'),'text', 'cedula',this.state.cedula,this.handleChange, true)}
    </div>

    <div className="form-group col-md-3">
      {Label(LabelRequired('Email'),'email', 'email',this.state.email,this.handleChange, true)}
    </div>

    <div className="form-group col-md-3">
      {select(LabelRequired('Género'),'genero', genero, this.handleChange,this.state.generoList, true)}
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
    {select(LabelRequired('Tipo de Movimiento'),'tip_mov', tip_mov, this.handleChange,this.state.tipoMovList, true)}
    </div>

    <div className="form-group col-md-3">
      {select(LabelRequired('Dedicación'),'dedicacion', dedicacion, this.handleChange,this.state.DedicationTypes, true)}
    </div>

    <div className="form-group col-md-3">
      {select(LabelRequired('Departamento'),'departamento', departamento, this.handleChangeSelectdept,this.state.departamentoList, true)}
    </div>

    <div className="form-group col-md-3">
      {select(LabelRequired('Cátedra'),'catedra', catedra, this.handleChangeSelectcat,this.state.catedraList, true)}
    </div>

    <div className="form-group col-md-3">
      {Label(LabelRequired('Fecha de Inicio'),'date', 'fecha_ini',this.state.fecha_ini,this.handleChange)}
    </div>

    <div className="form-group col-md-3">
      {Label(LabelRequired('Fecha de Fin'),'date', 'fecha_fin',this.state.fecha_fin,this.handleChange)}
    </div>

    <div className="form-group col-md-3">
      {select(LabelRequired('Unidad Ejecutora'),'unidad_ejec', unidad_ejec, this.handleChange,this.state.ExecuntingUnit, true)}
    </div>

    <div className="form-group col-md-3">
      {select(LabelRequired('IDAC'),'idac', idac, this.handleChange,this.state.idacList, true)}
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

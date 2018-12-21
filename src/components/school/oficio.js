import React, { Component} from 'react';
import Select from 'react-select';
import { MDBBtn } from 'mdbreact';
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
    fec_nac: "",
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
    fecha_ini: "",
    fecha_fin: "",
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
  		first_name : this.state.nombre,
  		second_name: this.state.snombre,
      idac_id : this.state.idac,
      surname: this.state.apellido,
      second_surname : this.state.sapellido,
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
  			this.props.history.push('/Escuela');
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
     nacionalidad : event.value
   });
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
  return (



    <div className="content">


    <h3 align="center"><strong>Registro de Planilla Oficio</strong></h3>
    <hr></hr>

      <form className="row justify-content-center" onSubmit={this.handleSubmit}>

      <div className="form-group col-md-3">
        <label htmlFor="nombre">Primer Nombre  <label style={{color:'red'}}>*</label></label>
        <input className="form-control" type="text" name="nombre" id="nombre" placeholder="P. Nombre"  value={this.state.nombre} onChange={this.handleChange} required/>
    </div>

    <div className="form-group col-md-3">
          <label htmlFor="snombre"> Segundo Nombre  <label style={{color:'red'}}>*</label></label>
          <input className="form-control" type="text" name="snombre" id="snombre" placeholder="S. Nombre"  value={this.state.snombre} onChange={this.handleChange}/>
    </div>

    <div className="form-group col-md-3">
          <label htmlFor="apellido">Primer Apellido <label style={{color:'red'}}>*</label></label>
          <input className="form-control" type="text" name="apellido" id="apellido" placeholder="P. Apellido"  value={this.state.apellido} onChange={this.handleChange} required/>
    </div>

    <div className="form-group col-md-3">
          <label htmlFor="sapellido">Segundo Apellido</label>
          <input className="form-control" type="text" name="sapellido" id="sapellido" placeholder="S. Apellido" value={this.state.sapellido} onChange={this.handleChange}/>
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
          <label htmlFor="nacionalidad"> Nacionalidad</label>
          <Select
            onChange={this.handleChangeSelectNacionalities}
            options={this.state.NacionalitiesList.map(nac =>(
              {label: nac.Name, value : nac.ID}
            ))}
          />
    </div>
    <div className="form-group col-md-3">
          <label htmlFor="cedula"> Cédula  <label style={{color:'red'}}>*</label></label>
          <input className="form-control" type="text" name="cedula" id="cedula" placeholder="Cédula"  value={this.state.cedula} onChange={this.handleChange} required/>
    </div>

    <div className="form-group col-md-3">
      <label htmlFor="email"> Email  <label style={{color:'red'}}>*</label></label>
          <input className="form-control" type="text" name="email" id="email" placeholder="Correo"  value={this.state.email} onChange={this.handleChange} required/>
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
      <label htmlFor="fec_nac">Fecha de Nacimiento  <label style={{color:'red'}}>*</label></label>
          <input className="form-control" type="date" name="fec_nac" id="fec_nac"  value={this.state.fec_nac} onChange={this.handleChange} required/>
    </div>

    <div className="form-group col-md-3">
      <label htmlFor="telef_mov">Teléfono Móvil  <label style={{color:'red'}}>*</label></label>
          <input className="form-control" type="text" name="telef_mov" id="telef_mov" placeholder="Teléfono Movil"  value={this.state.telef_mov} onChange={this.handleChange} required/>
    </div>

    <div className="form-group col-md-3">
      <label htmlFor="telef_loc">Teléfono Local  <label style={{color:'red'}}>*</label></label>
          <input className="form-control" type="text" name="telef_loc" id="telef_loc" placeholder="Teléfono Local"  value={this.state.telef_loc} onChange={this.handleChange} required/>
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
      <label htmlFor="fecha_ini">Fecha de Inicio  <label style={{color:'red'}}>*</label></label>
          <input className="form-control" type="date" name="fecha_ini" id="fecha_ini"  value={this.state.fecha_ini} onChange={this.handleChange} required/>
    </div>

    <div className="form-group col-md-3">
      <label htmlFor="fecha_fin">Fecha de Fin  <label style={{color:'red'}}>*</label></label>
          <input className="form-control" type="date" name="fecha_fin" id="fecha_fin"  value={this.state.fecha_fin} onChange={this.handleChange} required/>
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

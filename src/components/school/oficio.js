import React, { Component} from 'react';
import { MDBBtn } from 'mdbreact';
import moment from 'moment';
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
import Authorization from '../redirectPrincipal';
import {validateEmail, validateText, validateInt, validatePhoneNumber, validateLocalPhoneNumber, validateBirthDate, validateDateMaximun, validateDateMinimun} from '../util/validations';

class Oficio extends Component {
  constructor(){
  super();
  this.auth = new Authorization();
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
    isLoaded: false,
    user: {},
    auth: false,
  }
}

handleSubmit = async(event) => {
  event.preventDefault();
  const codigo = await CodeOfice(this.state.schoolData.ID, 0, 0)
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
    code_form : codigo.ofice,
    dedication_id : this.state.dedicacion,
    movement_type_id : this.state.tip_mov,
    start_date : this.state.fecha_ini,
    finish_date : this.state.fecha_fin,
    school_id : this.state.schoolData.ID,
    institute_id : 0,
    coordination_id : 0
  };
  console.log("ofice: ", ofice);
  const userID = this.state.user.id;
  const empleadoID = this.state.empleado_id;
  const result = await addNewFormOfice(employee, ofice, userID, empleadoID )
  if(result === 1) {
    alert('planilla de oficio creado exitosamente');
    if (window.confirm("¿Desea registrar la planilla de Movmimiento?")) {
      this.props.history.replace('/Escuela/MovPersonal', {cedula:employee.identification, ubication_id:2});
    } else {
      this.props.history.replace('/Escuela');
    }
  } else {
    alert('planilla de oficio NO creado exitosamente');
    this.props.history.replace('/Escuela');
  }
}

handeCodeFilterSelected = (data, value) => {
  let codeFilterSelected ="";
  for (var i = 0; i < data.length; i++) {
    console.log('data[',i,'].ID: ', data[i].ID);
    if (data[i].ID === value){
      let codeFilterSelected = data[i].codeFilter;
      return codeFilterSelected;
    }
  }
  if (codeFilterSelected === "") {
    return null;
  }
}

handleChangeIdac = async(data) => {
  const result = await getAllIdacCodesFilterVacantDateNotNullList(data);
  this.setState({
    idac : "",
    idacList : result
  })
  console.log("idacList: ", this.state.idacList);
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

async componentWillMount() {
  if (await this.auth.loggedIn()) {
    const result = await this.auth.ObtainData();
    const user = result.data;
    const schoolData= await getSchool(user.schoolID);
    const departamentoList = await getAllDepartamentBySchoolList(schoolData.ID)
    this.handleChangeExecUnit(schoolData.codeFilter);
    const generoList = await getAllGenderList();
    const NacionalitiesList = await getAllNacionalitiesList();
    const documentationList = await getAllDocumentationList();
    const DedicationTypes = await getAllDedicationTypesList()
    const tipoMovList = await getAllMovementTypeslist();
    this.setState({
      user,
      schoolData,
      departamentoList,
      auth: true,
      isLoaded : true,
      generoList,
      tipoMovList,
      NacionalitiesList,
      documentationList,
      DedicationTypes,
    })
  }
}

 handleValidateBirthDate = e => {
   e.preventDefault();
   const date = moment(e.target.value).format('DD-MM-YYYY');
   const validate = moment(date).fromNow(true);
   const result = validate.split(" ");
   console.log('date: ', date);
   console.log('validate: ', validate);
   console.log('result: ', result[0]);
   if (result[1] === 'years' && parseInt(result[0]) >= 18) {
     console.log('fecha valida');
   } else {
     console.log('fecha valida');
     this.setState({
       fec_nac : "0001-01-01"
     })
   }
 }

 handleChange = event => {
   this.setState({
     [event.target.name]: event.target.value
   });
   console.log(event.target.name,": ", event.target.value);
 }

handlechangeChair = async(data) => {
	this.setState({
		catedraList: [],
    catedra: "",
	});
	console.log(this.state.catedraList);
	if(data !== "") {
		const catedraList = await getAllChairList(data)
    this.setState({
      catedraList
    })
    console.log("catedraList: ",this.state.catedraList);
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
  console.log('catedra: ', event.target.value);
  let codeFilterSelected = ""
  if(event.target.value !== "") {
    codeFilterSelected = this.handeCodeFilterSelected(this.state.catedraList, parseInt(event.target.value));
    console.log("codeFilterSelected: ", codeFilterSelected)
      this.handleChangeExecUnit(codeFilterSelected);
    } else {
      codeFilterSelected = this.handeCodeFilterSelected(this.state.departamentoList, parseInt(this.state.departamento));
      this.handleChangeExecUnit(codeFilterSelected);
  }
}

render() {
  const {
    nacionalidad,
    genero,
  documento,
  dedicacion,
  tip_mov,
  departamento,
  catedra,
  unidad_ejec,
  idac
  } = this.state;
  if (!this.state.isLoaded) {
      return (<div className="loader" />);
  } else {
    return (
      <div className="content">
      <h3 align="center"><strong>Registro de Planilla Oficio</strong></h3>
      <hr></hr>
        <form className="row justify-content-center" onSubmit={this.handleSubmit}>
          <div className="form-group col-md-3">
            {Label(LabelRequired('Primer Nombre'), 'text','nombre',this.state.nombre,this.handleChange, true, (e)=>validateText(e.target.value, 'Primer Nombre'))}
          </div>

        <div className="form-group col-md-3">
          {Label('Segundo Nombre','text', 'snombre',this.state.snombre,this.handleChange, false, (e)=>validateText(e.target.value, 'Segundo Nombre'))}
        </div>

        <div className="form-group col-md-3">
          {Label(LabelRequired('Primer Apellido'),'text', 'apellido',this.state.apellido,this.handleChange, true, (e)=>validateText(e.target.value, 'Primer Apellido'))}
        </div>

      <div className="form-group col-md-3">
          {Label('Segundo Apellido','text', 'sapellido',this.state.sapellido,this.handleChange, false , (e)=>validateText(e.target.value, 'Segundo Apellido'))}
      </div>

      <div className="form-group col-md-3">
        {select(LabelRequired('Tipo de Documentación'),'documento', documento, this.handleChange,this.state.documentationList, true)}
      </div>

      <div className="form-group col-md-3">
        {select(LabelRequired('Nacionalidad'),'nacionalidad', nacionalidad, this.handleChange,this.state.NacionalitiesList, true)}
      </div>
      <div className="form-group col-md-3">
          {Label(LabelRequired('Cédula'),'text', 'cedula',this.state.cedula,this.handleChange, true, (e) => validateInt(e.target.value,'Cédula'))}
      </div>

      <div className="form-group col-md-3">
        {Label(LabelRequired('Email'),'email', 'email',this.state.email,this.handleChange, true, (e) => validateEmail(e.target.value, 'Email'))}
      </div>

      <div className="form-group col-md-3">
        {select(LabelRequired('Género'),'genero', genero, this.handleChange,this.state.generoList, true)}
      </div>

      <div className="form-group col-md-3">
        {Label(LabelRequired('Fecha de Nacimiento'),'date', 'fec_nac',this.state.fec_nac, this.handleChange, true, (e) => validateBirthDate(e.target.value,'Fecha de Nacimiento'))}
      </div>

      <div className="form-group col-md-3">
        {Label(LabelRequired('Teléfono Móvil'),'text', 'telef_mov',this.state.telef_mov,this.handleChange, true, (e)=> validatePhoneNumber(e.target.value,'Teléfono Móvil'))}
      </div>

      <div className="form-group col-md-3">
        {Label(LabelRequired('Teléfono Local'),'text', 'telef_loc',this.state.telef_loc,this.handleChange, true, (e)=> validateLocalPhoneNumber(e.target.value,'Teléfono Local'))}
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
        {Label(LabelRequired('Fecha de Inicio'),'date', 'fecha_ini',this.state.fecha_ini,this.handleChange,true, (e) => validateDateMaximun(e.target.value, 'Fecha de Inicio'))}
      </div>

      <div className="form-group col-md-3">
        {Label(LabelRequired('Fecha de Fin'),'date', 'fecha_fin',this.state.fecha_fin,this.handleChange, true, (e) => validateDateMinimun(e.target.value, this.state.fecha_ini, 'Fecha de Fin'))}
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
          <MDBBtn color="info" type="submit" className=" col-md-3" style={{marginRight:'100px'}}>Enviar</MDBBtn>
          <MDBBtn color="info" type="reset" className=" col-md-3">Restablecer</MDBBtn>
        </div>
      </div>

      </form>
      </div>
    )
  }
}
}
export default Oficio;

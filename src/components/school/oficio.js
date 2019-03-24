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
    //focus
    nombreFocus: false,
    apellidoFocus: false,
    snombreFocus: true,
    sapellidoFocus: true,
    fec_nacFocus: false,
    telef_movFocus: false,
    telef_locFocus: false,
    fecha_iniFocus: false,
    fecha_finFocus: false,
    cedulaFocus: false,
    emailFocus: false,
    //validate
    nombreValidate: false,
    apellidoValidate: false,
    snombreValidate: true,
    sapellidoValidate: true,
    fec_nacValidate: false,
    telef_movValidate: false,
    telef_locValidate: false,
    fecha_iniValidate: false,
    fecha_finValidate: false,
    cedulaValidate: false,
    emailValidate: false,
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
    coordination_id : 0,
    ubication_id: this.state.user.ubication.id
  };
  console.log("ofice: ", ofice);
  const userID = this.state.user.id;
  const empleadoID = this.state.empleado_id;
  const result = await addNewFormOfice(employee, ofice, userID, empleadoID )
  if(result === 1) {
    alert('planilla de oficio creado exitosamente');
    if (window.confirm("¿Desea registrar la planilla de Movmimiento?")) {
      this.props.history.replace('/Escuela/MovPersonal/Nuevo', {cedula:employee.identification, ubication_id:2});
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

handleChangeExecUnit = async(data) => {
const result = await  getAllExecuntingUnitListFilter(data)
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

handleChangeSelectExecUnitCat = data => {
  if(this.state.catedra === "" && this.state.catedraList.length > 0) {
    console.log('catedra vacio');
    let cat = {
      target : {
        value : 0
      }
    }
    let pointbreak = false
    for (let i = 0; i < this.state.catedraList.length; i++) {
      for (let j = 0; j < this.state.ExecuntingUnit.length; j++) {
        if(this.state.ExecuntingUnit[j].ID === parseInt(data) && this.state.ExecuntingUnit[j].label.search('CÁTEDRA') !== -1) {
          console.log(this.state.ExecuntingUnit[j]);
          if (this.state.catedraList[i].code === this.state.ExecuntingUnit[j].code){
            console.log(this.state.catedraList[i]);
            cat.target.value = parseInt(this.state.catedraList[i].ID);
            pointbreak = true;
            break;
          }
        }
      }
      if(pointbreak){
        break;
      }
    }
    if(cat.target.value !== 0) {
      this.setState({
        catedra: cat.target.value
      })
    }
  }
}

 handleChangeSelectExecUnitDep = async(data) => {
  if(this.state.departamento === "" || this.state.departamento === 0 ) {
    console.log('departamento vacio');
    let dept = {
      target : {
        value : 0
      }
    }
    let pointbreak = false
    for (let i = 0; i < this.state.departamentoList.length; i++) {
      for (let j = 0; j < this.state.ExecuntingUnit.length; j++) {
        if(this.state.ExecuntingUnit[j].ID === parseInt(data) && this.state.ExecuntingUnit[j].label.search('DEPARTAMENTO') !== -1) {
          console.log(this.state.ExecuntingUnit[j]);
          if (this.state.departamentoList[i].code === this.state.ExecuntingUnit[j].code){
            console.log(this.state.departamentoList[i]);
            dept.target.value = parseInt(this.state.departamentoList[i].ID);
            pointbreak = true;
            break;
          }
        } else if(this.state.ExecuntingUnit[j].ID === parseInt(data) && this.state.ExecuntingUnit[j].label.search('CÁTEDRA') !== -1) {
          await this.handlechangeChair(this.state.departamentoList[i].ID);
          console.log('es catedra');
          for (let k = 0; k < await this.state.catedraList.length; k++) {
            if(this.state.catedraList[k].code === this.state.ExecuntingUnit[j].code  && this.state.catedraList[k].code.search(this.state.departamentoList[i].codeFilter) !== -1) {
              console.log(this.state.departamentoList[i]);
              console.log(this.state.catedraList[k]);
              dept.target.value = parseInt(this.state.departamentoList[i].ID);
              pointbreak = true;
              break;
            }
          }
        }
      }
      if(pointbreak){
        break;
      }
    }
    if(dept.target.value !== 0) {
      this.handleChangeSelectdept(dept)
    }
  }
}


handleChangeSelectExecUnit = async(e) => {
  console.log(e.target.value);
  let unidad_ejec = e.target.value;
  if((this.state.departamento === "" || this.state.departamento === 0) && unidad_ejec !== "") {
    await this.handleChangeSelectExecUnitDep(unidad_ejec);
  }
  console.log(this.state.catedraList.length);
  if(this.state.catedra === "" && this.state.catedraList.length > 0 && unidad_ejec !== "") {
    await this.handleChangeSelectExecUnitCat(unidad_ejec);
  }
 this.setState({
    unidad_ejec
  });
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
   this.handlechangeChair(event.target.value);
   this.setState({
     unidad_ejec : 0,
     idac: 0
   })
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

handleResquetIdacCode(unidad_ejec){
  let execUnit;
  if(this.state.ExecuntingUnit.length > 0){
  for (let i = 0; i < this.state.ExecuntingUnit.length; i++) {
    if(this.state.ExecuntingUnit[i].ID === unidad_ejec) {
      execUnit = this.state.ExecuntingUnit[i].label;
    }
  }
  } else {
    execUnit = this.state.ExecuntingUnit[0].label;
  }
  console.log(execUnit);
  alert('La Unidad Ejecutora: ' + execUnit + ' no tiene codigo Idac disponible');
  if(window.confirm('¿Desea solicitar Codigo de idac a la Unidad Ejecutora: ' + execUnit + '?')){
    console.log('agg idac');
  } else {
    this.props.history.replace('/Escuela');
  }
}

async handleValidateEmail(data, name, focus, nameFocus,  validateName) {
  const result = validateEmail(data, name, focus);
  console.log(result);
  await this.setState({
    [nameFocus]: result,
    [validateName]: !result
  });
  console.log('this.state: ', this.state);
  return !result;
}

async handleValidateText(data, name, focus, nameFocus,  validateName) {
  const result = validateText(data, name, focus);
  console.log(result);
  await this.setState({
    [nameFocus]: result,
    [validateName]: !result
  });
  console.log('this.state: ', this.state);
  return !result;
}

async handleValidateInt(data, name, focus, nameFocus, validateName) {
  const result = validateInt(data, name, focus);
  console.log(result);
  await this.setState({
    [nameFocus]: result,
    [validateName]: !result
  });
  console.log('this.state: ', this.state);
  return !result;
}

async handleValidatePhoneNumber(data, name, focus, nameFocus, validateName) {
  const result = validatePhoneNumber(data, name, focus);
  console.log(result);
  await this.setState({
    [nameFocus]: result,
    [validateName]: !result
  });
  console.log('this.state: ', this.state);
  return !result;
}

async handleValidateLocalPhoneNumber(data, name, focus, nameFocus,  validateName) {
  const result = validateLocalPhoneNumber(data, name, focus);
  console.log(result);
  await this.setState({
    [nameFocus]: result,
    [validateName]: !result
  });
  console.log('this.state: ', this.state);
  return !result;
}

async handleValidateBirthDate(data, name, focus, nameFocus, validateName) {
  const result = validateBirthDate(data, name, focus);
  console.log(result);
  await this.setState({
    [nameFocus]: result,
    [validateName]: !result
  });
  console.log('this.state: ', this.state);
  return !result;
}

async handleValidateDateMaximun(data, name, focus, nameFocus, validateName) {
  const result = validateDateMaximun(data, name, focus);
  console.log(result);
  await this.setState({
    [nameFocus]: result,
    [validateName]: !result
  });
  console.log('this.state: ', this.state);
  return !result;
}

async handleValidateDateMinimun(data, min, name, focus, nameFocus, validateName) {
  const result = validateDateMinimun(data, min, name, focus);
  console.log(result);
  await this.setState({
    [nameFocus]: result,
    [validateName]: !result
  });
  console.log('this.state: ', this.state);
  return !result;
}

validateForm() {
  return this.state.emailValidate && this.state.nombreValidate && this.state.apellidoValidate && this.state.snombreValidate && this.state.cedulaValidate && this.state.fecha_finValidate && this.state.fecha_iniValidate && this.state.telef_locValidate && this.state.sapellidoValidate && this.state.fec_nacValidate && this.state.telef_movValidate;
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
  idac,
  idacList
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
            {Label(LabelRequired('Primer Nombre'), 'text','nombre',this.state.nombre,this.handleChange, true, (e)=>this.handleValidateText(e.target, 'Primer Nombre', this.state.nombreFocus, 'nombreFocus', 'nombreValidate'), this.state.nombreFocus.toString())}
          </div>

        <div className="form-group col-md-3">
          {Label('Segundo Nombre','text', 'snombre',this.state.snombre,this.handleChange, false, (e)=>this.handleValidateText(e.target, 'Segundo Nombre', true, 'snombreFocus', 'snombreValidate'),this.state.snombreFocus.toString())}
        </div>

        <div className="form-group col-md-3">
          {Label(LabelRequired('Primer Apellido'),'text', 'apellido',this.state.apellido,this.handleChange, true, (e)=>this.handleValidateText(e.target, 'Primer Apellido', this.state.apellidoFocus, 'apellidoFocus', 'apellidoValidate'), this.state.apellidoFocus.toString())}
        </div>

      <div className="form-group col-md-3">
          {Label('Segundo Apellido','text', 'sapellido',this.state.sapellido,this.handleChange, false , (e)=>this.handleValidateText(e.target, 'Segundo Apellido', true, 'sapellidoFocus', 'sapellidoValidate'), this.state.sapellidoFocus.toString())}
      </div>

      <div className="form-group col-md-3">
        {select(LabelRequired('Tipo de Documentación'),'documento', documento, this.handleChange,this.state.documentationList, true)}
      </div>

      <div className="form-group col-md-3">
        {select(LabelRequired('Nacionalidad'),'nacionalidad', nacionalidad, this.handleChange,this.state.NacionalitiesList, true)}
      </div>
      <div className="form-group col-md-3">
          {Label(LabelRequired('Cédula'),'text', 'cedula',this.state.cedula,this.handleChange, true, (e) => this.handleValidateInt(e.target,'Cédula', this.state.cedulaFocus, 'cedulaFocus', 'cedulaValidate'), this.state.cedulaFocus.toString())}
      </div>

      <div className="form-group col-md-3">
        {Label(LabelRequired('Email'),'email', 'email',this.state.email,this.handleChange, true, (e) => this.handleValidateEmail(e.target, 'Email', this.state.emailFocus, 'emailFocus', 'emailValidate'), this.state.emailFocus.toString())}
      </div>

      <div className="form-group col-md-3">
        {select(LabelRequired('Género'),'genero', genero, this.handleChange,this.state.generoList, true)}
      </div>

      <div className="form-group col-md-3">
        {Label(LabelRequired('Fecha de Nacimiento'),'date', 'fec_nac',this.state.fec_nac, this.handleChange, true, (e) => this.handleValidateBirthDate(e.target,'Fecha de Nacimiento', this.state.fec_nacFocus, 'fec_nacFocus', 'fec_nacValidate'), this.state.fec_nacFocus.toString())}
      </div>

      <div className="form-group col-md-3">
        {Label(LabelRequired('Teléfono Móvil'),'text', 'telef_mov',this.state.telef_mov,this.handleChange, true, (e)=> this.handleValidatePhoneNumber(e.target,'Teléfono Móvil', this.state.telef_movFocus, 'telef_movFocus', 'telef_movValidate'), this.state.telef_movFocus.toString())}
      </div>

      <div className="form-group col-md-3">
        {Label(LabelRequired('Teléfono Local'),'text', 'telef_loc',this.state.telef_loc,this.handleChange, true, (e)=> this.handleValidateLocalPhoneNumber(e.target,'Teléfono Local',this.state.telef_locFocus, 'telef_locFocus', 'telef_locValidate'), this.state.telef_locFocus.toString())}
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
        {Label(LabelRequired('Fecha de Inicio'),'date', 'fecha_ini',this.state.fecha_ini,this.handleChange,true, (e) => this.handleValidateDateMaximun(e.target, 'Fecha de Inicio', this.state.fecha_iniFocus, 'fecha_iniFocus', 'fecha_iniValidate'), this.state.fecha_iniFocus.toString)}
      </div>

      <div className="form-group col-md-3">
        {Label(LabelRequired('Fecha de Fin'),'date', 'fecha_fin',this.state.fecha_fin,this.handleChange, true, (e) => this.handleValidateDateMinimun(e.target, this.state.fecha_ini, 'Fecha de Fin', this.state.fecha_finFocus, 'fecha_finFocus', 'fecha_finValidate'), this.state.fecha_finFocus.toString())}
      </div>

      <div className="form-group col-md-3">
        {select(LabelRequired('Unidad Ejecutora'),'unidad_ejec', unidad_ejec, this.handleChangeSelectExecUnit,this.state.ExecuntingUnit, true)}
      </div>

      <div className="form-group col-md-3">
        {idacList.length > 0?
        select(LabelRequired('IDAC'),'idac', idac, this.handleChange,idacList, true):
        this.handleResquetIdacCode(unidad_ejec)}
      </div>

      <div className="form-group col-md-4">
          <hr></hr>
              <h6 align="center" style={{color:'red'}}>Campos Obligatorios *</h6>
            <hr></hr>
      </div>

    <div className="form-group col-md-10">
        <div className="row justify-content-center">
          <MDBBtn color="info" type="submit" disabled={!this.validateForm()} className=" col-md-3" style={{marginRight:'100px'}}>Enviar</MDBBtn>
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

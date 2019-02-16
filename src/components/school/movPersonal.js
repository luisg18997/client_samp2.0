import React, { Component } from 'react';
import {
 getAllStatesList,
 getAllCategoryTypesList,
 getAllDedicationTypesList,
 getAllIngressList,
 getAllIncomeTypeList,
 getAllMunicipalitiesList,
 getAllParishList,
 getSalaryDedicationCategoryType
} from '../../connect_api/employee/EmployeeAPI';
  import {
    getSchool
  } from '../../connect_api/faculty/FacultyAPI'
import {
    codeMovPer,
  getFormMovPersonal,
  addNewFormMorPersonal,
} from '../../connect_api/formData/formDataAPI'
import { MDBBtn } from 'mdbreact';
import {Label, LabelRequired ,select} from '../util/forms';

class MovPersonal extends Component {
    constructor(props){
        super(props);
        this.state = {
          empleadoID: "",
          empleadoSalarioID: "",
          formOficeID: "",
          formOficeMovPer: "",
          codigo: "",
          nombre: "",
          apellido: "",
          snombre: "",
          sapellido: "",
          documentacion:"",
          nacionalidad: "",
          cedula: "",
          estado: "",
          StateList: [],
          municipio: "",
          municipalityList: [],
          parroquia: "",
          parroquiaList : [],
          ubicacion: "",
          direccion: "",
          tip_vivienda: "",
          viviendaID: "",
          apartamento: "",
          ingreso: "",
          ingressList: [],
          tip_ingreso: "",
          IncomeType: [],
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
          DedicationTypes_p: [],
          sueldo: "",
          unidad_ejec: "",
          school: "",
          motivo: "",
          isLoaded: false,
          anexo: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeSelectstate = this.handleChangeSelectstate.bind(this);
        this.handleChangeSelectCategoryType = this.handleChangeSelectCategoryType.bind(this);
}

  async componentWillMount(){
    console.log("this.props: ", this.props);
    if (this.props.location.state === undefined) {
      this.props.history.replace('/Escuela')
    } else {
      console.log(this.props.location.state.cedula);
      const result = await getFormMovPersonal(this.props.location.state.cedula, this.props.location.state.ubication_id)
      let anexos;
      if( result.annex_types.length > 0) {
        let annex = [];
        for (var i = 0; i < result.annex_types.length; i++) {
        annex[i] = result.annex_types[i].description;
        }
       anexos = annex.toString().toUpperCase();
        console.log('annex: ', anexos);
      } else {
        anexos = result.annex_types.toString().toUpperCase();
      }
      this.setState({
        empleadoID : result.employee_id,
        cedula: result.identification,
        nombre : result.first_name,
        snombre: result.second_name,
        apellido: result.surname,
        sapellido: result.second_surname,
        documentacion: result.documentation,
        nacionalidad: result.nacionality,
        tip_mov: result.movement_type,
        idac: result.idac_code,
        departamento: result.departament,
        catedra: result.chair,
        unidad_ejec: result.execunting_unit,
        fecha_ini: result.start_date,
        fecha_fin: result.finish_date,
        dedicacion: result.current_dedication,
        sueldo: result.salary,
        dedicacion_p: result.proposed_dedication,
        ingreso: result.ingres,
        tip_ingreso: result.income_type,
        ubicacion: result.ubication,
        direccion: result.address,
        tip_vivienda: result.housing_type,
        viviendaID: result.housing_identifier,
        apartamento: result.apartament,
        categoria: result.category_type,
        estado: result.state,
        municipio: result.municipality,
        parroquia: result.parish,
        empleadoSalarioID: result.employee_salary_id,
        formOficeID: result.official_form_id,
        formOficeMovPer: result.id,
        isLoaded: true,
        anexo: anexos
      })
      console.log("this.state: ", this.state)
    }
  }

async componentDidMount() {
   if (this.props.location.state !== undefined) {
    const school = await getSchool(1);
    const StateList = await getAllStatesList();
    const CategoryTypeList= await getAllCategoryTypesList();
    const DedicationTypes_p = await getAllDedicationTypesList();
    const ingressList = await getAllIngressList();
    const IncomeType = await getAllIncomeTypeList();

    this.setState({
      ingressList,
      StateList,
      IncomeType,
      DedicationTypes_p,
      CategoryTypeList,
      school
    })
    console.log("CategoryTypeList",this.state.CategoryTypeList);
    console.log("DedicationTypes_p: ",this.state.DedicationTypes_p);
    console.log("ingressList: ",this.state.ingressList);
    console.log("IncomeType: ",this.state.IncomeType);
    console.log("StateList: ", this.state.StateList);
    console.log("school: ", this.state.school);
   }
 }

 handleSubmit = async(event) => {
   event.preventDefault();
   const codigo = await codeMovPer(this.state.school.ID, 0, 0, this.state.school.codeFilter)
   const employee = {
     employee_id : this.state.empleadoID,
     state_id : this.state.estado.id,
     municipality_id: this.state.municipio.id,
     parish_id : this.state.parroquia.id,
     ubication: this.state.ubicacion.toUpperCase(),
     address: this.state.direccion.toUpperCase(),
     housing_type: this.state.tip_vivienda.toUpperCase(),
     housing_identifier: this.state.viviendaID.toUpperCase(),
     apartament: this.state.apartamento.toUpperCase(),
     ingress_id: this.state.ingreso.id,
     income_type_id : this.state.tip_ingreso.id,
     salary_id: this.state.sueldo.id
   }
   console.log('employee: ', employee);
   const formMovPeronsal = {
     code_form: codigo.movPer,
     employee_form_ofice_form_person_movement_id: this.state.formOficeMovPer,
     form_ofice_id : this.state.formOficeID,
     salary: this.state.sueldo.description,
     reason: this.state.motivo.toUpperCase()
   }
   console.log('formMovPeronsal: ', formMovPeronsal);
   const result = await addNewFormMorPersonal(employee, formMovPeronsal, 0, this.state.empleadoSalarioID)
   console.log('result: ', result);
   if(result === 1) {
     alert('planilla de Movimiento Personal creada exitosamente');
     this.props.history.replace('/Escuela');
   } else {
     alert('planilla de Movimiento Persona NO creada exitosamente');
     this.props.history.replace('/Escuela');
   }
 }

 handleChange = event => {
   this.setState({
     [event.target.id]: event.target.value
   });
 }

 handleChangeSelectstate = event => {
   const  estado  = this.state.estado;
   estado.id = event.target.value;
   this.setState({
     estado
   });
    console.log('estado: ', estado)
     this.handlechangeMunicipalities(estado.id);
 }

 handleChangeSelectPar = event => {
   const parroquia = this.state.parroquia;
   parroquia.id= event.target.value;
   this.setState({
     parroquia
   });
    console.log('parroquia: ', parroquia)
 }

 handleChangeSelectMun = event => {
   const municipio = this.state.municipio;
   console.log(municipio);
   municipio.id = parseInt(event.target.value);
   this.setState({
     municipio
   });
    console.log('municipio: ', municipio)
     this.handlechangeParish(municipio.id);
 }

 handleChangeSelectCategoryType = event => {
   const categoria = this.state.categoria;
   categoria.id = event.target.value;
   this.setState({
     categoria
   });
   console.log("categoria: ", categoria);
   this.handleChangeSalary(categoria.id);
}

handleChangeSalary = (data) => {
  getSalaryDedicationCategoryType(this.state.dedicacion.id, data)
  .then(result => {
    console.log("salary: ", result)
    const sueldo = this.state.sueldo;
    sueldo.description = result.salary;
    sueldo.id = result.id;
    this.setState({
      sueldo
    })
    console.log("sueldo: ", sueldo)
  })
}

handleChangeSelectDedicationTypes_p = event => {
     const dedicacion_p = this.state.dedicacion_p;
     dedicacion_p.id = event.target.value;
     this.setState({
       dedicacion_p
     });
     console.log("dedicacion_p: ", dedicacion_p);
 }

   handleChangeSelectingress = event => {
     const ingreso = this.state.ingreso;
     ingreso.id = event.target.value
     this.setState({
       ingreso
     });
     console.log("ingreso: ", ingreso);
 }

   handleChangeSelectIncomeType = event => {
     const tip_ingreso = this.state.tip_ingreso;
     tip_ingreso.id = event.target.value;
     this.setState({
       tip_ingreso
     });
     console.log("tip_ingreso: ", tip_ingreso);
 }

 handlechangeMunicipalities = async(data) => {
  this.setState({
    municipalityList: []
  });
  if(data !== "") {
    const municipalityList = await getAllMunicipalitiesList(data)
    this.setState({
      municipalityList
    })
    console.log("municipalityList: ",this.state.municipalityList);
  }
}

handlechangeParish = async(data) => {
  this.setState({
    parroquiaList: [],
  });
  if(data !== "") {
  const parroquiaList = await  getAllParishList(data)
  this.setState({
    parroquiaList
  })
  console.log("parroquiaList: ",this.state.parroquiaList);
  }
}

  render() {
    const {
      dedicacion_p,
      tip_ingreso,
      ingreso,
      estado,
      municipio,
      parroquia,
      categoria,
    } = this.state;
    if (!this.state.isLoaded) {
      return (<div className="loader content"></div>);
    } else {
    return (
    <div  className="content">
      <h2 align="center"><strong>Solicitud de Movimiento de Personal</strong></h2>
      <hr></hr>
      <h3 align="center"><strong>Datos Personales</strong></h3>
      <hr></hr>
      <br></br>
      <form className="row justify-content" onSubmit={this.handleSubmit}>
        <div className="form-group col-md-3">
          {Label("Primer Nombre", "text","nombre", this.state.nombre)}
        </div>

        <div className="form-group col-md-3">
          {Label("Segundo Nombre", "text","snombre", this.state.snombre)}
        </div>

      <div className="form-group col-md-3">
        {Label("Primer Apellido", "text","apellido", this.state.apellido)}
      </div>

      <div className="form-group col-md-3">
        {Label("Segundo Apellido", "text","sapellido", this.state.sapellido)}
      </div>

      <div className="form-group col-md-3">
        {Label("Documentacion", "text","documentacion", this.state.documentacion)}
    </div>

        <div className="form-group col-md-3">
          {Label("Nacionalidad", "text","nacionalidad", this.state.nacionalidad)}
      </div>

      <div className="form-group col-md-3">
        {Label("Cédula", "text","cedula", this.state.cedula)}
      </div>

      <div className="form-group col-md-12">
          <hr></hr>
              <h3 align="center"><strong>Dirección</strong></h3>
            <hr></hr>
      </div>

      <div className="form-group col-md-3">
          {select(LabelRequired('Estado'),'estado', estado.id,this.handleChangeSelectstate,this.state.StateList, true)}
      </div>

      <div className="form-group col-md-3">
        {select(LabelRequired('Municipio'),'municipio', municipio.id,this.handleChangeSelectMun,this.state.municipalityList, true)}
      </div>

      <div className="form-group col-md-3">
        {select(LabelRequired('Parroquia'),'parroquia', parroquia.id,this.handleChangeSelectPar,this.state.parroquiaList, true)}
      </div>

      <div className="form-group col-md-3">
        {Label(LabelRequired("Urb/Sector/Barrio"), "text","ubicacion", this.state.ubicacion, this.handleChange, true)}
      </div>

      <div className="form-group col-md-3">
        {Label(LabelRequired("Calle/Av./Vereda"), "text","direccion", this.state.direccion, this.handleChange, true)}
      </div>

      <div className="form-group col-md-3">
        {Label(LabelRequired("Resd./Edif./Casa"), "text","tip_vivienda", this.state.tip_vivienda, this.handleChange, true)}
      </div>

      <div className="form-group col-md-3">
        {Label(LabelRequired("Piso/Nivel/Num."), "text","viviendaID", this.state.viviendaID, this.handleChange, true)}
      </div>

      <div className="form-group col-md-3">
        {Label("Apartamento", "text","apartamento", this.state.apartamento, this.handleChange, false)}
      </div>

      <div className="form-group col-md-12">
          <hr></hr>
              <h3 align="center"><strong>Datos Laborales</strong></h3>
            <hr></hr>
      </div>

      <div className="form-group col-md-3">
        {ingreso.description !== '' && ingreso.id !== 0?
          Label("Ingreso", "text","ingreso", ingreso.description):
          select(LabelRequired("Ingreso"),"ingreso",ingreso.id,this.handleChangeSelectingress,this.state.ingressList, true)
        }
      </div>


      <div className="form-group col-md-3">
    {tip_ingreso.description !== '' && tip_ingreso.id !== 0?
      Label("Tipo de Ingreso", "text","tip_ingreso", tip_ingreso.description):
      select(LabelRequired("Tipo de Ingreso"),"tip_ingreso",tip_ingreso.id,this.handleChangeSelectIncomeType,this.state.IncomeType, true)
      }
      </div>

      <div className="form-group col-md-3">
        {Label("Fecha de Ingreso", "text","fecha_ingreso", this.state.fecha_ingreso)}
      </div>

      <div className="form-group col-md-3">
        {Label("Tipo de Movimiento", "text","tip_mov", this.state.tip_mov)}
    </div>

  <div className="form-group col-md-3">
    {Label("Departamento", "text","departamento", this.state.departamento)}
    </div>

    <div className="form-group col-md-3">
      {Label("Cátedra", "text","catedra", this.state.catedra)}
    </div>

    <div className="form-group col-md-3">
      {Label("IDAC", "text","idac", this.state.idac)}
    </div>

    <div className="form-group col-md-3">
      {Label("Unidad Ejecutora", "text","unidad_ejec", this.state.unidad_ejec)}
    </div>

      <div className="form-group col-md-3">
        {Label("Dedicación Actual", "text","dedicacion", this.state.dedicacion.description)}
      </div>

      <div className="form-group col-md-3">
      {dedicacion_p.description !== '' && dedicacion_p.id !== 0?
        Label("Dedicación propuesta", "text","dedicacion_p", this.state.dedicacion_p.description)
        :
        select("Dedicación propuesta","dedicacion_p",dedicacion_p.id,this.handleChangeSelectDedicationTypes_p,this.state.DedicationTypes_p, false)
        }
      </div>

      <div className="form-group col-md-3">
        {select(LabelRequired("Categoria"),"categoria",categoria.id,this.handleChangeSelectCategoryType,this.state.CategoryTypeList, true)}
      </div>

        <div className="form-group col-md-3">
           {Label("Sueldo", "text","sueldo", this.state.sueldo.description)}
      </div>


      <div className="form-group col-md-3">
        {Label("Fecha de Inicio", "text","fecha_ini", this.state.fecha_ini)}
      </div>

      <div className="form-group col-md-3">
        {Label("Fecha de Fin", "text","fecha_fin", this.state.fecha_fin)}
      </div>

  <div className="form-group col-md-3">
    {Label(LabelRequired("Anexos"), "textarea","anexo", this.state.anexo)}
  </div>

  <div className="form-group col-md-3">
    {Label(LabelRequired("Motivos"), "textarea","motivo", this.state.motivo, this.handleChange, true)}
  </div>

  <div className="form-group col-md-12">
          <hr></hr>
              <h6 align="center"  style={{color:'red'}}><strong>Campos Obligatorios *</strong></h6>
            <hr></hr>
      </div>

    <div className="form-group col-md-12">

        <div className="row justify-content-center">

          <MDBBtn color="primary" type="submit" className=" col-md-3" style={{marginRight:'100px'}}>Enviar</MDBBtn>
          <MDBBtn color="primary" type="reset" className=" col-md-3">Restablecer</MDBBtn>

        </div>

      </div>

      </form>

      </div>
    );
  }
}

}

export default MovPersonal;

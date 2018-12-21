import React, { Component } from 'react';
import {
 getAllStatesList,
 getAllCategoryTypesList,
 getAllDedicationTypesList,
 getAllIngressList,
 getAllIncomeTypeList,
 getAllMunicipalitiesList,
 getAllParishList
} from '../../connect_api/employee/EmployeeAPI';
  import {
    getSchool
  } from '../../connect_api/faculty/FacultyAPI'
import {
    codeMovPer,
  getFormMovPersonal
} from '../../connect_api/formData/formDataAPI'
import Select from 'react-select';
import { MDBBtn } from 'mdbreact';

class MovPersonal extends Component {
    constructor(props){
    super(props);
    this.state = {
      empleadoID: "",
      codigo: "",
      nombre: "",
      apellido: "",
      snombre: "",
      sapellido: "",
      documentacion:"",
      nacionalidad: "",
      cedula: this.props.history.location.state.cedula,
      estado: "",
      StateList: [],
      municipio: "",
      municipalityList: [],
      parroquia: "",
      parroquiaList : [],
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
      isLoaded: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelectstate = this.handleChangeSelectstate.bind(this);
    this.handleChangeSelectCategoryType = this.handleChangeSelectCategoryType.bind(this);
    this.handleChangeSelectDedicationTypes_p = this.handleChangeSelectDedicationTypes_p.bind(this);
    this.handleChangeSelectingress = this.handleChangeSelectingress.bind(this);
    this.handleChangeSelectIncomeType = this.handleChangeSelectIncomeType.bind(this);

}
  componentWillMount(){
    console.log("this.props: ", this.props);
    console.log(this.props.history.location.state.cedula);
    getFormMovPersonal(this.state.cedula)
    .then(result => {
      console.log('result: ', result);
      this.setState({
        empleadoID : result.employee_id,
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
        isLoaded: true
      })
      console.log("this.state: ", this.state)
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
 	})

  getAllStatesList()
  .then(result => {
    this.setState({
      StateList: result
    })
    console.log("StateList: ", this.state.StateList);
  });


  getAllCategoryTypesList()
  .then(result => {
    this.setState({
      CategoryTypeList: result
    })
    console.log("CategoryTypeList",this.state.CategoryTypeList);
  });

  getAllDedicationTypesList()
  .then(result => {
    this.setState({
      DedicationTypes_p: result
    })
    console.log("DedicationTypes_p: ",this.state.DedicationTypes_p);
  });


      getAllIngressList()
  .then(result => {
    this.setState({
      ingressList: result
    })
    console.log("ingressList: ",this.state.ingressList);
  });


      getAllIncomeTypeList()
  .then(result => {
    this.setState({
      IncomeType: result
    })
    console.log("IncomeType: ",this.state.IncomeType);
  });
 }

 handleSubmit = event => {
   event.preventDefault();
   codeMovPer(this.state.school.ID, 0, 0)
   .then(result => {
    this.setState({
      codigo : result
    })
    console.log("codigo: ",this.state.codigo);
   });

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
    console.log('estado: ', event.value)
     this.handlechangeMunicipalities(event.value);

 }

 handleChangeSelectMun = event => {
   this.setState({
     municipio : event.value
   });
    console.log('municipio: ', event.value)
     this.handlechangeParish(event.value);

 }

 handleChangeSelectCategoryType = event => {
   this.setState({
     categoria : event.value
   });
 }

   handleChangeSelectDedicationTypes_p = event => {
   this.setState({
     dedicacion_p : event.value
   });
 }

   handleChangeSelectingress = event => {
   this.setState({
     ingreso : event.value
   });
 }

   handleChangeSelectIncomeType = event => {
   this.setState({
     tip_ingreso : event.value
   });
 }


 handlechangeMunicipalities = data => {
  this.setState({
    municipalityList: []
  });
  if(data !== 0) {
    getAllMunicipalitiesList(data)
    .then(result => {
      this.setState({
        municipalityList: result
      })
      console.log(this.state.municipalityList);
    });
  }
}

handlechangeParish = data => {
  this.setState({
    parroquiaList: []
  });
  if(data !== 0) {
    getAllParishList(data)
    .then(result => {
      this.setState({
        parroquiaList: result
      })
      console.log(this.state.parroquiaList);
    });
  }
}

  render() {
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

        <form className="row justify-content">

        <div className="form-group col-md-3">
            <label htmlFor="nombre">Primer Nombre</label>
            <input className="form-control" readOnly type="text" name="nombre" value={this.state.nombre}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="snombre"> Segundo Nombre</label>
            <input className="form-control" readOnly  type="text" name="snombre" value={this.state.snombre}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="apellido">Primer Apellido</label>
            <input className="form-control" readOnly  type="text" name="apellido" value={this.state.apellido}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="sapellido"> Segundo Apellido</label>
            <input className="form-control" readOnly type="text" name="sapellido" value={this.state.sapellido}/>
      </div>

      <div className="form-group col-md-3">
          <label htmlFor="documentacion"> Documentacion</label>
          <input className="form-control" readOnly type="text" name="documentacion" value={this.state.documentacion}/>
    </div>

        <div className="form-group col-md-3">
            <label htmlFor="nacionalidad"> Nacionalidad</label>
            <input className="form-control" readOnly type="text" name="nacionalidad" value={this.state.nacionalidad}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="cedula">Cédula</label>
            <input className="form-control" readOnly type="text" name="cedula" value={this.state.cedula}/>
      </div>

      <div className="form-group col-md-12">
          <hr></hr>
              <h3 align="center"><strong>Dirección</strong></h3>
            <hr></hr>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="estado">Estado <label style={{color:'red'}}>*</label></label>
        <Select
              onChange={this.handleChangeSelectstate}
              options={this.state.StateList.map(st =>(
              {label: st.states, value : st.ID}
            ))}
            />
      </div>


      <div className="form-group col-md-3">
            <label htmlFor="municipio">Municipio <label style={{color:'red'}}>*</label></label>
     <Select
            onChange={this.handleChangeSelectMun}
            options={this.state.municipalityList.map(mun =>(
            {label: mun.muni, value : mun.ID}
          ))}
          />
      </div>


      <div className="form-group col-md-3">
            <label htmlFor="parroquia">Parroquia <label style={{color:'red'}}>*</label></label>
            <Select
                   options={this.state.parroquiaList.map(mun =>(
                   {label: mun.parish, value : mun.ID}
                 ))}
                 />
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="sector">Sector <label style={{color:'red'}}>*</label></label>
            <input className="form-control" type="text" name="sector" id="sector" placeholder="Sector" value={this.state.sector} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="calle">Calle <label style={{color:'red'}}>*</label></label>
            <input className="form-control" type="text" name="calle" id="calle" placeholder="Calle" value={this.state.calle} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-5">
            <label htmlFor="num_casa_apart">Num casa o Apartamento <label style={{color:'red'}}>*</label></label>
            <input className="form-control" type="text" name="num_casa_apart" id="num_casa_apart" placeholder="Número de Casa o Apartamento" value={this.state.num_casa_apart} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-12">
          <hr></hr>
              <h3 align="center"><strong>Datos Laborales</strong></h3>
            <hr></hr>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="ingreso">Ingreso <label style={{color:'red'}}>*</label></label>
          <Select
              onChange={this.handleChangeSelectingress}
              options={this.state.ingressList.map(ing =>(
              {label: ing.Ingress, value : ing.id}
            ))}
            />
      </div>



      <div className="form-group col-md-3">
            <label htmlFor="tip_ingreso">Tipo de Ingreso <label style={{color:'red'}}>*</label></label>
        <Select
              onChange={this.handleChangeSelectIncomeType}
              options={this.state.IncomeType.map(income =>(
              {label: income.income, value : income.ID}
            ))}
            />
      </div>


      <div className="form-group col-md-3">
        <label htmlFor="fecha_ingreso">Fecha de Ingreso</label>
            <input className="form-control" readOnly type="date" name="fecha_ingreso" id="fecha_ingreso" required value={this.state.fecha_ingreso} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="tip_mov">Tipo de Movimiento</label>
            <input className="form-control" readOnly type="text" name="tip_mov" value={this.state.tip_mov}/>

    </div>

  <div className="form-group col-md-3">
          <label htmlFor="departamento">Departamento</label>
          <input className="form-control" readOnly type="text" name="departamento" value={this.state.departamento}/>
    </div>

    <div className="form-group col-md-3">
          <label htmlFor="catedra">Cátedra</label>
          <input className="form-control" readOnly type="catedra" name="catedra" value={this.state.catedra}/>
    </div>
    <div className="form-group col-md-3">
          <label htmlFor="idac">IDAC</label>
          <input className="form-control" readOnly type="text" name="idac" value={this.state.idac}/>
    </div>

    <div className="form-group col-md-3">
          <label htmlFor="unidad_ejec">Unidad Ejecutora</label>
            <input className="form-control" readOnly type="unidad_ejec" name="unidad_ejec" value={this.state.unidad_ejec}/>
    </div>

      <div className="form-group col-md-3">
            <label htmlFor="dedicacion">Dedicación Actual</label>
            <input className="form-control" readOnly type="dedicacion" name="dedicacion" value={this.state.dedicacion.description}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="dedicacion_p">Dedicación Propuesta</label>
       <Select
              onChange={this.handleChangeSelectDedicationTypes_p}
              options={this.state.DedicationTypes_p.map(dtp =>(
              {label: dtp.dedi, value : dtp.ID}
            ))}
            />
      </div>


      <div className="form-group col-md-3">
            <label htmlFor="categoria">Categoria <label style={{color:'red'}}>*</label></label>
      <Select
              onChange={this.handleChangeSelectCategoryType}
              options={this.state.CategoryTypeList.map(ct =>(
              {label: ct.name, value : ct.ID}
            ))}
            />
      </div>


         <div className="form-group col-md-3">
            <label htmlFor="sueldo"> Sueldo</label>
            <input className="form-control" readOnly type="text" name="sueldo" placeholder="Sueldo" value={this.state.sueldo}/>
      </div>


      <div className="form-group col-md-3">
        <label htmlFor="fecha_ini">Fecha de Inicio</label>
            <input className="form-control" readOnly type="date" name="fecha_ini" value={this.state.fecha_ini}/>
      </div>

      <div className="form-group col-md-3">
        <label htmlFor="fecha_fin">Fecha de Fin</label>
            <input className="form-control" readOnly type="date" name="fecha_fin" value={this.state.fecha_fin}/>
      </div>

  <div className="form-group col-md-3">
    <label htmlFor="anexo">Anexos <label style={{color:'red'}}>*</label></label>
        <textarea name="anexo" required placeholder="Curriculum con sus anexos"></textarea>
  </div>

  <div className="form-group col-md-3">
    <label htmlFor="motivo">Motivos <label style={{color:'red'}}>*</label></label>
        <textarea name="motivo" required placeholder="Indique el motivo de la Planilla"></textarea>
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

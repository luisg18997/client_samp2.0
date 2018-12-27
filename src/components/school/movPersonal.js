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
import Select from 'react-select';
import { MDBBtn } from 'mdbreact';

class MovPersonal extends Component {
    constructor(props){
        super();
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
    getFormMovPersonal(this.props.history.location.state.cedula)
    .then(result => {
      console.log('result: ', result);
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
        formOficeID: result.form_ofice_id,
        formOficeMovPer: result.id,
        isLoaded: true
      })
      console.log("this.state: ", this.state)
    });
  }

 componentDidMount() {

   getSchool(1)
 	.then(result => {
 		const school ={
 			ID : result.id,
 			code : result.code,
 			name : result.school,
 			codeFilter : result.code.substr(0, 4)
 		}
 		this.setState({
 			 school
 		})
 		console.log("school: ", this.state.school);
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
   codeMovPer(this.state.school.ID, 0, 0, this.state.school.codeFilter)
   .then(result => {
    this.setState({
      codigo : result
    })
    console.log("codigo: ",this.state.codigo);
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
      code_form: result.movPer,
      employee_form_ofice_form_person_movement_id: this.state.formOficeMovPer,
      form_ofice_id : this.state.formOficeID,
      reason: this.state.motivo.toUpperCase()
    }
    console.log('formMovPeronsal: ', formMovPeronsal);
    addNewFormMorPersonal(employee, formMovPeronsal, 0, this.state.empleadoSalarioID)
    .then(result => {
      console.log('result: ', result);
      if(result === 1) {
  			alert('planilla de Movimiento Personal creada exitosamente');
  			this.props.history.push('/Escuela');
  		} else {
  			alert('planilla de Movimiento Persona NO creada exitosamente');
  			this.props.history.push('/Escuela/Oficio/Listado');
  		}
    })
   });

 }

 handleChange = event => {
   this.setState({
     [event.target.id]: event.target.value
   });
 }

 handleChangeSelectstate = event => {
   const  estado  = this.state.estado;
   estado.id = event.value;
   this.setState({
     estado
   });
    console.log('estado: ', estado)
     this.handlechangeMunicipalities(event.value);
 }

 handleChangeSelectPar = event => {
   const parroquia = this.state.parroquia;
   parroquia.id= event.value;
   this.setState({
     parroquia
   });
    console.log('parroquia: ', parroquia)
 }

 handleChangeSelectMun = event => {
   const municipio = this.state.municipio;
   municipio.id= event.value;
   this.setState({
     municipio
   });
    console.log('municipio: ', municipio)
     this.handlechangeParish(event.value);
 }

 handleChangeSelectCategoryType = event => {
   const categoria = this.state.categoria;
   categoria.id = event.value;
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
     dedicacion_p.id = event.value;
     this.setState({
       dedicacion_p
     });
     console.log("dedicacion_p: ", dedicacion_p);
 }

   handleChangeSelectingress = event => {
     const ingreso = this.state.ingreso;
     ingreso.id = event.value
     this.setState({
       ingreso
     });
     console.log("ingreso: ", ingreso);
 }

   handleChangeSelectIncomeType = event => {
     const tip_ingreso = this.state.tip_ingreso;
     tip_ingreso.id = event.value;
     this.setState({
       tip_ingreso
     });
     console.log("tip_ingreso: ", tip_ingreso);
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
      console.log("municipalityList: ",this.state.municipalityList);
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
      console.log("parroquiaList: ",this.state.parroquiaList);
    });
  }
}

  render() {
    const dedicacion_p = this.state.dedicacion_p;
    const tip_ingreso = this.state.tip_ingreso;
    const ingreso = this.state.ingreso;
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
                   onChange={this.handleChangeSelectPar}
                   options={this.state.parroquiaList.map(mun =>(
                   {label: mun.parish, value : mun.ID}
                 ))}
                 />
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="ubicacion">Urb/Sector/Barrio <label style={{color:'red'}}>*</label></label>
            <input className="form-control" type="text" name="ubicacion" id="ubicacion" value={this.state.ubicacion} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="direccion">Calle/Av./Vereda <label style={{color:'red'}}>*</label></label>
            <input className="form-control" type="text" name="direccion" id="direccion" value={this.state.direccion} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="tip_vivienda">Resd./Edif./Casa <label style={{color:'red'}}>*</label></label>
            <input className="form-control" type="text" name="tip_vivienda" id="tip_vivienda" value={this.state.tip_vivienda} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="viviendaID">Piso/Nivel/Num. <label style={{color:'red'}}>*</label></label>
            <input className="form-control" type="text" name="viviendaID" id="viviendaID" value={this.state.viviendaID} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="apartamento">Apartamento <label style={{color:'red'}}>*</label></label>
            <input className="form-control" type="text" name="apartamento" id="apartamento" value={this.state.apartamento} onChange={this.handleChange}/>
      </div>

      <div className="form-group col-md-12">
          <hr></hr>
              <h3 align="center"><strong>Datos Laborales</strong></h3>
            <hr></hr>
      </div>

      <div className="form-group col-md-3">
          <label htmlFor="ingreso">Ingreso <label style={{color:'red'}}>*</label></label>
        {ingreso.description !== '' && ingreso.id !== 0?
          <input className="form-control" readOnly type="text" name="ingreso" value={this.state.ingreso.description}/>:
        <Select
              onChange={this.handleChangeSelectingress}
              options={this.state.ingressList.map(ing =>(
              {label: ing.Ingress, value : ing.id}
            ))}
            />}
      </div>



      <div className="form-group col-md-3">
            <label htmlFor="tip_ingreso">Tipo de Ingreso <label style={{color:'red'}}>*</label></label>
    {tip_ingreso.description !== '' && tip_ingreso.id !== 0?
      <input className="form-control" readOnly type="text" name="tip_ingreso" value={this.state.tip_ingreso.description}/>:
      <Select
              onChange={this.handleChangeSelectIncomeType}
              options={this.state.IncomeType.map(income =>(
              {label: income.income, value : income.ID}
            ))}
            />}
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
          <input className="form-control" readOnly type="text" name="catedra" value={this.state.catedra}/>
    </div>
    <div className="form-group col-md-3">
          <label htmlFor="idac">IDAC</label>
          <input className="form-control" readOnly type="text" name="idac" value={this.state.idac}/>
    </div>

    <div className="form-group col-md-3">
          <label htmlFor="unidad_ejec">Unidad Ejecutora</label>
            <input className="form-control" readOnly type="text" name="unidad_ejec" value={this.state.unidad_ejec}/>
    </div>

      <div className="form-group col-md-3">
            <label htmlFor="dedicacion">Dedicación Actual</label>
            <input className="form-control" readOnly type="text" name="dedicacion" value={this.state.dedicacion.description}/>
      </div>

      <div className="form-group col-md-3">
            <label htmlFor="dedicacion_p">Dedicación Propuesta</label>
      {dedicacion_p.description !== '' && dedicacion_p.id !== 0?
        <input className="form-control" readOnly type="text" name="dedicacion_p" value={this.state.dedicacion_p.description}/>:
        <Select
              onChange={this.handleChangeSelectDedicationTypes_p}
              options={this.state.DedicationTypes_p.map(dtp =>(
              {label: dtp.dedi, value : dtp.ID}
            ))}
            />
        }
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
            <input className="form-control" readOnly type="text" name="sueldo" placeholder="Sueldo" value={this.state.sueldo.description}/>
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
        <textarea name="anexo" readOnly required placeholder="Curriculum con sus anexos"></textarea>
  </div>

  <div className="form-group col-md-3">
    <label htmlFor="motivo">Motivos <label style={{color:'red'}}>*</label></label>
        <textarea name="motivo" id="motivo" required placeholder="Indique el motivo de la Planilla" onChange={this.handleChange}></textarea>
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

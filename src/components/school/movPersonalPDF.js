import React, { Component, Fragment} from 'react'
import { generatePDF } from '../util/generatePDF';
import {
  getFormMovPersonal
}
  from '../../connect_api/formData/formDataAPI';
import Authorization from '../redirectPrincipal';

class movPersonalPDF extends Component {
  constructor(props) {
    super(props)
    this.auth = new Authorization();
    this.state = {
      cedula: "",
      ubicacion: "",
      empleadoID: "",
      formMovPersonalID: "",
      formOficeMovPer: "",
      processMovPersonalID: "",
      codigo: "",
      nombre: "",
      apellido: "",
      snombre: "",
      sapellido: "",
      fecha_reg: "",
      tip_mov: "",
      idac: "",
      departamento: "",
      catedra: "",
      unidad_ejec: "",
      fecha_ini: "",
      fecha_fin: "",
      escuela: "",
      instituto: "",
      coordinacion:"",
      dedicacion: "",
      dedicacionPro :"",
      categoria :"",
      sueldo:"",
      ingreso: "",
      ingresoType: "",
      ingresoDate: "",
      direccion :"",
      anexo: "",
      motivo:"",
      isLoaded : false,
      observacion:"",
      user: {},
      observacionFocus: false,
      observacionValidate: false
    }
  }
  properties = { title: 'prueba' }

  async componentWillMount() {
    if (await this.auth.loggedIn()) {
      console.log('this.props: ', this.props);
      if (this.props.location.state === undefined) {
        this.props.history.replace('/Escuela')
      } else {
        const resultUser = await this.auth.ObtainData();
        const user = resultUser.data;
        const result = await getFormMovPersonal(this.props.location.state.cedula, this.props.location.state.ubication_id);
        let direccion;
        if (result.apartament !== "") {
          direccion = `${result.ubication}, ${result.address}, ${result.housing_type}, ${result.housing_identifier}, ${result.apartament}, PARROQUIA ${result.parish.name.toUpperCase()}, MUNICIPIO ${result.municipality.name.toUpperCase()}, EDO. ${result.state.name.toUpperCase()}`;
        } else {
          direccion = `${result.ubication}, ${result.address}, ${result.housing_type}, ${result.housing_identifier}, PARROQUIA ${result.parish.name.toUpperCase()}, MUNICIPIO ${result.municipality.name.toUpperCase()}, EDO. ${result.state.name.toUpperCase()}`;
        }
        let anexos;
        if( result.annex_types.length > 0) {
          let annex = [];
          for (var i = 0; i < result.annex_types.length; i++) {
          annex[i] = result.annex_types[i].description;
          }
         anexos = annex.toString().toUpperCase();
         anexos = anexos.replace(/,/g, ', ');
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
          tip_mov: result.movement_type.toUpperCase(),
          idac: result.idac_code,
          escuela: result.school,
          instituto : result.institute,
          coordinacion : result.coordination,
          departamento: result.departament,
          catedra: result.chair,
          unidad_ejec: result.execunting_unit,
          fecha_ini: result.start_date,
          fecha_fin: result.finish_date,
          fecha_reg : result.registration_date,
          codigo: result.code_form,
          dedicacion: result.current_dedication.description.toUpperCase(),
          dedicacionPro: result.proposed_dedication.description.toUpperCase(),
          categoria: result.category_type.description.toUpperCase(),
          sueldo: result.salary.description,
          ingreso: result.ingres.description.toUpperCase(),
          ingresoType: result.income_type.description.toUpperCase(),
          ingresoDate: result.admission_date,
          direccion : direccion,
          motivo: result.reason,
          formMovPersonalID :result.mov_personal_form_id,
          formOficeMovPer : result.id,
          processMovPersonalID : result.process_mov_personal_form_id,
          anexo: anexos,
          isLoaded : true,
          user
        })
        console.log('result: ',this.state );
      }
    }
  }

  pdf = () => {
    return(
      <Fragment>
        <div id="MovPersonal" style={{
          visibility: "hidden"
        }}>
        <table align="center" width="100">
	 <tr align="center">
        <td width="100" align="letf"></td>
        <td width="320"><b>UNIVERSIDAD CENTRAL DE VENEZUELA</b><br /><br />
        	<b>FACULTAD DE HUMANIDADES Y EDUCACION</b></td>
        <td width="250"><b>Solicitud de Movimiento de Personal</b><br/><br/>
        	Numero:<strong>{this.state.codigo}</strong></td>
        <td width="110"></td>
    </tr>
</table>

        </div>
      </Fragment>
    )
  }

  render(){
    if (!this.state.isLoaded) {
			return (<div className="loader"></div>);
		} else {
      return(
        <Fragment>
        {generatePDF(this.state.title, 'oficio', this.pdf())}
        </Fragment>
      )
    }
  }
}

export default movPersonalPDF;

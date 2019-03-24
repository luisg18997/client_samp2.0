import React, { Component, Fragment} from 'react'
import {
  getFormOfficial
}
  from '../../connect_api/formData/formDataAPI';
import { generatePDF } from '../util/generatePDF';
import Authorization from '../redirectPrincipal';

class OficioPDF extends Component {
  constructor(props) {
    super(props);
    this.auth = new Authorization();
    this.state = {
      cedula: "",
      ubicacion: "",
      empleadoID: "",
      formOficeID: "",
      formOficeMovPer: "",
      processFormID: "",
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
      isLoaded : false,
      observacion: "",
      user:{}
    };
  }
  async componentWillMount() {
    if (await this.auth.loggedIn()) {
        console.log('this.props: ', this.props);
        if (this.props.location.state === undefined) {
          this.props.history.replace('/Escuela')
        } else {
          const resultUser = await this.auth.ObtainData();
          const user = resultUser.data;
          const result = await getFormOfficial(this.props.location.state.cedula, this.props.location.state.ubication_id)
          console.log('result: ', result);
          this.setState({
            empleadoID : result.employee_id,
            cedula: result.identification,
            nombre : result.first_name,
            snombre: result.second_name,
            apellido: result.surname,
            sapellido: result.second_surname,
            tip_mov: result.movement_type,
            idac: result.idac_code.code,
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
            dedicacion: result.dedication_type,
            formOficeID: result.official_form_id,
            formOficeMovPer :result.id,
            processFormID: result.process_form_id,
            isLoaded: true,
            user
          })
        }
      }
    }

    pdf = () => {
      return(
        <Fragment>
          <div>
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

export default OficioPDF;

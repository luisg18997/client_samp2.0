import React, { Component, Fragment} from 'react'
import {UCV2, FHE } from '../../images/components/logos'
import {
  getFormOfficial
}
  from '../../connect_api/formData/formDataAPI';
import { generatePDF } from '../util/generatePDF';
import Authorization from '../redirectPrincipal';
import moment from 'moment';

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
      fecha_hoy: "",
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
            fecha_hoy: moment().format('YYYY-MM-DD'),
            user
          })
        }
      }
    }

    pdf = () => {
      return(
        <Fragment>
          <div>
            <table  align="center" width="100">
              <tr>
                <td align="letf">
                  <UCV2 />
                </td>
		            <td align="center" width="420">
                  <h2><b>UNIVERSIDAD CENTRAL DE VENEZUELA
                  <br/>
                  FACULTAD  DE HUMANIDADES Y EDUCACIÓN
                  <br/>ESCUELA {this.state.escuela.name}
                  </b></h2>
                </td>
  		            <td><FHE />
                </td>
              </tr>
            </table>
            <table  align="center" width="565">
              <tr>
            		<td align="letf"><p>{this.state.codigo}</p></td>
            		<td align="right"><p>Caracas de {this.state.fecha_hoy}</p></td>
            	</tr>
            	<br/>
              <tr>
                <td colSpan="2">
                  <p>
                    <b>Ciudadano
                      <br/>
                      Vicenzo Piero Lo Mónaco
                      <br/>
                      Decano Facultad de Humanidades y Educación
                      <br/>
                      Presente.-</b>
                    <br/>
                    <br/>
                  </p>
                </td>
              </tr>
              <tr>
		            <td colspan="2" width="30%">
			              <p></p><p>  Por medio de la presente tiene por objeto solicitar {this.state.tip_mov} del profesor
                      <b>{this.state.nombre} {this.state.snombre} {this.state.apellido} {this.state.sapellido}; C.I.: {this.state.cedula}</b>,
                        {this.state.dedicacion}, a partir del {this.state.fecha_ini} hasta {this.state.fecha_fin},
                        para la Cátedra de {this.state.catedra.name}, del Departamento de {this.state.departamento.name},
                        dicha  contratación será cubierta con la partida presupuestaria identificada con el IDAC
                        <b>{this.state.idac.code}</b>.
                      </p>
		           </td>
	           </tr>
	            <tr>
		             <td colspan="2">
                   <p>Sin otro particular al cual hacer referencia, me despido,</p>
                 </td>
	           </tr>
	            <tr>
		              <td colspan="2" align="center">
                    <p>Atentamente</p>
                  </td>
	            </tr>
	             <tr align='center'>
		               <td colspan="2">
                     <p>___________________
                       <br/>
                       <b><br/>
                       Director (e).
                       <br/>Escuela {this.state.escuela.name}.</b>
                     </p>
                   </td>
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
          <div>
          {generatePDF(this.state.title, 'oficio', this.pdf())}
          </div>
        )
      }
    }

}

export default OficioPDF;

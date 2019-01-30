import React, { Component } from 'react';
import {
  getFormOfficial
}
  from '../../connect_api/formData/formDataAPI';
import { MDBBtn } from 'mdbreact';
import {
	updateAllColumnsProcessOfficialForm
}
from '../../connect_api/processForm/processFormAPI'
import {Label, LabelRequired} from '../util/forms';

class OficioRev extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cedula: this.props.location.state.cedula,
      ubicacion: this.props.location.state.ubication_id,
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
      isValidate : true,
      observacion: ""
    };
  }

  async componentWillMount() {
    console.log('this.props: ', this.props);
    const result = await getFormOfficial(this.state.cedula, this.state.ubicacion)
    console.log('result: ', result);
    this.setState({
      empleadoID : result.employee_id,
      cedula: result.identification,
      nombre : result.first_name,
      snombre: result.second_name,
      apellido: result.surname,
      sapellido: result.second_surname,
      tip_mov: result.movement_type,
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
      dedicacion: result.dedication_type,
      formOficeID: result.official_form_id,
      formOficeMovPer :result.id,
      processFormID: result.process_form_id,
      isLoaded: true
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleChangeStatus = async(result) => {
    if (result) {
      const res = await updateAllColumnsProcessOfficialForm(this.state.processFormID, 0, this.state.formOficeID, 2,null, 3, '1', '0');
      console.log(res.data);
      this.props.history.replace('/Presupuesto');
    } else {
      this.setState({
        isValidate: false
      })
    }
  }

  handleSubmit = async(e, result) => {
    e.preventDefault();
    if (result) {
      console.log('envio');
      if(this.state.observacion !== ""){
        const res = await updateAllColumnsProcessOfficialForm(this.state.processFormID, 0, this.state.formOficeID, 2, this.state.observacion,4, '1', '0');
        console.log(res);
        alert('planilla de oficio NO aprobada');
        this.props.history.replace('/Presupuesto');
      } else {
        alert('Falta la observacion');
      }
    } else {
      if(window.confirm('desea cancelar el proceso')){
        this.props.history.replace('/Presupuesto/ListadoPlanillas');
      }
    }

  }

  render() {
    const isValidate = this.state.isValidate
    if (!this.state.isLoaded) {
			return (<div className="loader"></div>);
		} else {
      return (
        <div className="content">
          <h2 align="center"><strong>Planilla Oficio</strong></h2>
          <hr />
          <form className="row justify-content">
            <div className="form-group col-md-3">
              <label><strong>Primer Nombre</strong></label>
              <br/>
              <label>{this.state.nombre}</label>
            </div>
            <div className="form-group col-md-3">
              <label><strong>Segundo Nombre</strong></label>
                <br/>
                <label>{this.state.snombre}</label>
            </div>
            <div className="form-group col-md-3">
              <label><strong>Primer Apellido</strong></label>
                <br/>
                <label>{this.state.apellido}</label>
            </div>
            <div className="form-group col-md-3">
              <label><strong>Segundo Apellido</strong></label>
                <br/>
                <label>{this.state.sapellido}</label>
            </div>
            <div className="form-group col-md-3">
              <label><strong>Cedula</strong></label>
                <br/>
                <label>{this.state.cedula}</label>
            </div>
            <div className="form-group col-md-3">
              <label><strong>Codigo Idac</strong></label>
                <br/>
                <label>{this.state.idac}</label>
            </div>
            <div className="form-group col-md-3">
              <label><strong>Codigo de Planilla</strong></label>
                <br/>
                <label>{this.state.codigo}</label>
            </div>
            <div className="form-group col-md-3">
              <label><strong>Fecha de Registro de Planilla</strong></label>
                <br/>
                <label>{this.state.fecha_reg}</label>
            </div>
            <div className="form-group col-md-3">
              <label><strong>Escuela</strong></label>
                <br/>
                <label>{this.state.escuela}</label>
            </div>
            <div className="form-group col-md-3">
              <label><strong>Departamento</strong></label>
                <br/>
                <label>{this.state.departamento}</label>
            </div>
            <div className="form-group col-md-3">
              <label><strong>Catedra</strong></label>
                <br/>
                <label>{this.state.catedra}</label>
            </div>
            <div className="form-group col-md-3">
              <label><strong>Unidad Ejecutora</strong></label>
                <br/>
                <label>{this.state.unidad_ejec}</label>
            </div>
            <div className="form-group col-md-3">
              <label><strong>Tipo de Movimiento</strong></label>
                <br/>
                <label>{this.state.tip_mov}</label>
            </div>
            <div className="form-group col-md-3">
              <label><strong>Dedicacion</strong></label>
                <br/>
                <label>{this.state.dedicacion}</label>
            </div>
            <div className="form-group col-md-3">
              <label><strong>Fecha de Inicio</strong></label>
                <br/>
                <label>{this.state.fecha_ini}</label>
            </div>
            <div className="form-group col-md-3">
              <label><strong>Fecha de Fin</strong></label>
                <br/>
                <label>{this.state.fecha_fin}</label>
            </div>
            {isValidate?
              <div className="form-group col-md-10">
                  <div className="row justify-content-center">
                    <MDBBtn color="primary" type="button" onClick={()=>this.handleChangeStatus(true)} className=" col-md-3" style={{marginRight:'100px'}}>Aprobar</MDBBtn>
                    <MDBBtn color="primary" type="button" onClick={()=>this.handleChangeStatus(false)} className=" col-md-3">Rechazar</MDBBtn>
                  </div>
                </div>:
                <div className="form-group col-md-10">
                  {Label(LabelRequired('Obsevacion'),  "textarea","observacion",this.state.observacion, this.handleChange, true)}
                  <br/>
                  <div className="row justify-content-center">
                      <MDBBtn color="primary" type="button" onClick={(e)=>this.handleSubmit(e,true)} className=" col-md-3" style={{marginRight:'100px'}}>Enviar</MDBBtn>
                      <MDBBtn color="primary" type="button" onClick={(e)=>this.handleSubmit(e,false)} className=" col-md-3">Cancelar</MDBBtn>
                  </div>
                </div>
            }
          </form>
        </div>
      );
    }
  }
}

export default OficioRev;

import React, { Component} from 'react';
import {table} from '../util/forms';
import { MDBBtn } from 'mdbreact';
import {
	getFormsList
}
from '../../connect_api/formData/formDataAPI'
import {
	updateAllColumnsProcessOfficialForm,
	updateAllColumnsProcessMovPersonalForm
}
from '../../connect_api/processForm/processFormAPI'
import Authorization from '../redirectPrincipal'


class ListPlanillas extends Component {
	  constructor(){
			super();
			this.auth = new Authorization();
			this.state={
				table:{
					columns:[
						{
							label:"Codigo de Planilla",
							field: "code_form",
	            width: 250
						},
						{
							label:"Tipo de planilla",
							field: "form_type",
							 width: 250
						},
						{
							label:"Tipo de Movimiento",
							field: "",
							width: 350
						},
						{
							label:"Ubicacion",
							field: "movement_type",
							width: 750
						},
						{
							label: "Fecha de Registro",
							field: "registration_date",
							sort: 'asc',
							width: 350
						},
						{
							label: "Status",
							field: "status_form",
							width: 250
						},
						{
							label: "Acción",
							field: "button",
							width: 250
						}
					]
				},
				isLoaded: false,
				user: {}
			}
		}

		async componentWillMount(){
			if (await this.auth.loggedIn()) {
				 const resultUser = await this.auth.ObtainData();
	       const user = resultUser.data;
				 const result = await	getFormsList(user.ubication.id,user.schoolID, user.instituteID, user.coordinationID);
				 console.log('getFormsList: ',result);
				 const { table } = this.state;
				 if (result.result !== 'not found') {
				 table.rows = result.map(form => ({
					 code_form : form.code_form,
					 form_type : form.form_type,
					 movement_type : form.movement_type,
					 ubication : form.ubication,
					 registration_date : form.registration_date,
					 status_form : form.status_form,
					 button : <MDBBtn onClick={(e) => this.handleData(e,form)} >Seleccionar</MDBBtn>
				 }));
			 }
				 this.setState({
					 table,
					 isLoaded : true,
					 user
				 })
				 console.log('rows: ', this.state)
			 }
		}

		handleData = async(e, form) => {
			e.preventDefault();
	    console.log("ListPlanillas: ", form);
			if (form.form_type === 'OFICIO') {
				if (form.status_process_form_id !== 2) {
					const result = await updateAllColumnsProcessOfficialForm(form.process_official_form_id,this.state.user.id ,form.official_form_id, 5, null,2, '1', '0');
					console.log('result: ', result);
				}
				this.props.history.replace('/RRHH/Oficio/revision',
				{
					cedula: form.identification,
					ubication_id: 5});
			} else {
				if (form.status_process_form_id !== 2) {
					const result = await updateAllColumnsProcessMovPersonalForm(form.process_mov_personal_form_id,this.state.user.id ,form.mov_personal_form_id, 5, null, 2, '1', '0');
					console.log('result: ', result);
				}
				this.props.history.replace('/RRHH/MovPersonal/revision',
				{
					cedula: form.identification,
					ubication_id: 5});
			}
		}

	render(){
		if (!this.state.isLoaded) {
			return (<div className="loader"></div>);
		} else {

		return(

			<div className="lista">
	      {table(this.state.table)}
	      </div>
		)
	}
	}
}

export default ListPlanillas;

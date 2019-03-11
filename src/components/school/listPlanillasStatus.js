import React, { Component} from 'react';
import {table} from '../util/forms';
import { MDBBtn } from 'mdbreact';
import {
	getFormsStatusList
}
from '../../connect_api/formData/formDataAPI'
import Authorization from '../redirectPrincipal'


class ListStatusPlanillas extends Component {
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
							field: "movement_type",
							width: 350
						},
						{
							label:"Ubicacion",
							field: "ubication",
							width: 750
						},
						{
							label: "Fecha",
							field: "date_made",
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
				 const result = await	getFormsStatusList(user.schoolID, user.instituteID, user.coordinationID);
				 console.log('getFormsList: ',result);
				 const { table } = this.state;
				 if (result.result !== 'not found') {
				 table.rows = result.map(form => ({
					 code_form : form.code_form,
					 form_type : form.form_type,
					 movement_type : form.movement_type,
					 ubication : form.ubication,
					 date_made : form.date_made,
					 status_form : form.status_form,
					 button : <MDBBtn>Ver Status</MDBBtn>
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

export default ListStatusPlanillas;

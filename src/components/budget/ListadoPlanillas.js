import React, { Component} from 'react';
import {table} from '../util/forms';
import { MDBBtn } from 'mdbreact';
import {
	getFormsList
}
from '../../connect_api/formData/formDataAPI'

class ListPlanillas extends Component {
	  constructor(){
			super();
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
				isLoaded: false
			}
		}

		 componentWillMount(){
			getFormsList(6,0)
			.then(result =>{
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
					button : <MDBBtn onClick={(e) => this.handleData(e,form.identification, form.form_type)} >Seleccionar</MDBBtn>
				}));
			}
				this.setState({
					table,
					isLoaded : true
				})
				console.log('rows: ', this.state)
			})
		}
		handleData = (e, identification, formType) => {
			e.preventDefault();
	    console.log("ListPlanillas: ",identification," ", formType);
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

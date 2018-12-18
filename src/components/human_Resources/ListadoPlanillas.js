import React, { Component} from 'react';
import { MDBDataTable } from 'mdbreact';
import {
	getFormsList
}
from '../../connect_api/formData/formDataAPI'

class mainBudget extends Component {
	  constructor(){
			super();
			this.state={
				table:{
					columns:[
						{
							label:"Codigo de Planilla",
							field: "code_form",
							sort: 'asc',
	            width: 100
						},
						{
							label:"Tipo de planilla"
						},
						{
							label:"Tipo de Movimiento"
						},
						{
							label:"Ubicacion"
						},
						{
							label: "Fecha de Registro"
						},
						{
							label: "Status"
						}
					]
				}
			}
		}

		 componentWillMount(){
			getFormsList(5,0)
			.then(result =>{
				console.log('getFormsList: ',result);
				const { table } = this.state;
				table.rows = result.map(form => ({
					codigo : form.code_form,
					tipo : form.form_type,
					movement_type : form.movement_type,
					ubication : form.ubication,
					registration_date : form.registration_date,
					status_form : form.status_form
				}));
				this.setState({
					table,
				})
				console.log('rows: ', this.state)
			})
		}

	render(){
		return(

			<div style={{'padding':'10px',marginTop:'50px', marginLleft:'65px',color:'#595959'}} className="content">
				<MDBDataTable
					striped
					hover
					small
					columns={this.state.table.columns}
					rows={this.state.table.rows}
				/>
			</div>
		)
	}
}

export default mainBudget;

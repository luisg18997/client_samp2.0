import React, { Component} from 'react';
import { MDBDataTable } from 'mdbreact';
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
							 width: 250
						},
						{
							label:"Tipo de Movimiento",
							width: 350
						},
						{
							label:"Ubicacion",
							width: 750
						},
						{
							label: "Fecha de Registro",
							sort: 'asc',
							width: 350
						},
						{
							label: "Status",
							width: 250
						},
						{
							label: "Acción",
							width: 250
						}
					]
				},
				isLoaded: false
			}
		}

		 componentWillMount(){
			getFormsList(5,0)
			.then(result =>{
				console.log('getFormsList: ',result);
				const { table } = this.state;
				if (result.result !== 'not found') {
				table.rows = result.map(form => ({
					codigo : form.code_form,
					tipo : form.form_type,
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
			if (formType === 'OFICIO') {
				this.props.history.replace('/RRHH/Oficio/revision',
				{
					cedula:identification,
					ubication_id: 5});
			}
		}

	render(){
		if (!this.state.isLoaded) {
			return (<div className="loader"></div>);
		} else {

		return(

			<div style={{'padding':'10px',marginTop:'50px', marginLleft:'65px',color:'#595959'}} className="content">
				<MDBDataTable
				 entriesLabel="Mostrar paginas"
     			 searchLabel="Buscar"
      			infoLabel={["Mostrando", "de", "de", "entradas"]}
     			 paginationLabel={["Anterior", "Siguiente"]}
					striped
					hover
					small
					data={this.state.table}
				/>
			</div>
		)
	}
	}
}

export default ListPlanillas;

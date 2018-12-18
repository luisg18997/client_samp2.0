import React, { Component} from 'react';
import { MDBDataTable } from 'mdbreact';

class mainBudget extends Component {
	  constructor(){
			super();
			this.state={
				data:{
					columns:[
						{
							label:"Codigo de Planilla"
						},
						{
							label:"Tipo deplanilla"
						},
						{
							label:"Tipo de Movimiento"
						},
						{
							label:"Ubicacion"
						},
						{
							label: "Fecha de Registro"
						}
					]
				}
			}
		}

	render(){
		return(

			<div style={{'padding':'10px','margin-top':'50px', 'margin-left':'65px',color:'#595959'}} class="content">
				<MDBDataTable responsiveSm
					striped
					bordered
					small
					data={this.state.data}
				/>
			</div>
		)
	}
}

export default mainBudget;

import React, {Component} from 'react';
import {table} from '../util/forms';
import { MDBBtn } from 'mdbreact';

class UserValidateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table:{
        columns:[
          {
            label:"Nombre",
            field: "name",
            sort: 'asc',
          },
          {
            label:"Correo",
            field: "email",
          },
          {
            label:"Ubicacion",
            field: "ubication",
          },
          {
            label:"Role",
            field: "rol",
          },
          {
            label: "Acciones",
            field: "button",
            width: 250
          }
        ]
      },
      isLoaded: false
    }
  }

  async componentWillMount(){
/* const result =	await getFormsList(6,0)
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
 } */
   this.setState({
    // table,
     isLoaded : true
   })
   console.log('rows: ', this.state)
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

export default UserValidateList;

import React, { Component} from 'react';
import { MDBDataTable } from 'mdbreact';
import { MDBBtn } from 'mdbreact';
import {
	getFormOficesList
}
from '../../connect_api/formData/formDataAPI'
// import MovPersonal from './movPersonal';

class ListOficio extends Component {
  constructor() {
    super();
    this.state={
      table:{
        columns: [
          {
            label:"Codigo de Planilla",
            sort: 'asc',
            width: 250
          },
          {
            label: "Nombre",
            sort: 'asc',
            width: 250
          },
          {
            label:"Tipo de Movimiento",
            sort: 'asc',
            width: 350
          },
          {
            label:"Ubicacion",
            sort: 'asc',
            width: 750
          },
          {
            label:"Idac",
            sort: 'asc',
          },
          {
            label: "Fecha de Registro",
            sort: 'asc',
            width: 350
          },
          {
            label: "Acccion"
          }
        ]
      },
      isLoaded: false
    }
  }

  handleData(e,identification){
    e.preventDefault();
    console.log("ListOficio: ",identification);
    //const movPersonal = new MovPersonal(identification);
    this.props.history.push('/Escuela/MovPersonal', {cedula:identification});
    // movPersonal.handleDataReceived(identification);
  }

  componentWillMount(){
   getFormOficesList(1,0,0)
   .then(result =>{
     console.log('getFormOficesList: ',result);
     const { table } = this.state;
     table.rows = result.map(form => ({
       codigo : form.code_form,
       name: form.name,
       movement_type : form.movement_type,
       execunting_unit : form.execunting_unit,
       idac: form.idac_code,
       registration_date : form.registration_date,
       button : <MDBBtn onClick={(e) => this.handleData(e,form.identification)} >Seleccionar</MDBBtn>
     }));
     this.setState({
       table,
       isLoaded : true,
       cedula: result.identification
     })
   })
 }

  render(){
      if (!this.state.isLoaded) {
  			return (<div className="loader"></div>);
  		} else {
        return(
        <MDBDataTable
          striped
          boder
          small
          data={this.state.table}
        />
      );
    }
  }
}


export default ListOficio;

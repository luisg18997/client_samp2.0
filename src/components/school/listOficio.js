import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { MDBBtn } from 'mdbreact';
import {
  getFormOficesList,
}
  from '../../connect_api/formData/formDataAPI';
// import MovPersonal from './movPersonal';

class ListOficio extends Component {
  constructor() {
    super();
    this.state = {
      table: {
        columns: [
          {
            label: 'Codigo de Planilla',
            field: 'code',
            sort: 'asc',
            width: 250,
          },
          {
            label: 'Nombre',
            field: 'name',
            sort: 'asc',
            width: 250,
          },
          {
            label: 'Tipo de Movimiento',
            field: 'movement_type',
            sort: 'asc',
            width: 350,
          },
          {
            label: 'Ubicacion',
            field: 'execunting_unit',
            sort: 'asc',
            width: 750,
          },
          {
            label: 'Idac',
            field: 'idac',
            sort: 'asc',
          },
          {
            label: 'Fecha de Registro',
            field: 'registration_date',
            sort: 'asc',
            width: 350,
          },
          {
            label: 'Acccion',
          },
        ],
      },
      isLoaded: false,
    };
  }

  handleData(e, identification) {
    e.preventDefault();
    console.log('ListOficio: ', identification);
    // const movPersonal = new MovPersonal(identification);
    this.props.history.push('/Escuela/MovPersonal', { cedula: identification });
    // movPersonal.handleDataReceived(identification);
  }

  componentWillMount() {
    getFormOficesList(1, 0, 0)
      .then((result) => {
        console.log('getFormOficesList: ', result);
        const { table } = this.state;
		 if (result.result !== 'not found') {
			 table.rows = result.map(form => ({
	       code: form.code_form,
	       name: form.name,
	       movement_type: form.movement_type,
	       execunting_unit: form.execunting_unit,
	       idac: form.idac_code,
	       registration_date: form.registration_date,
	       button: <MDBBtn onClick={e => this.handleData(e, form.identification)}>Seleccionar</MDBBtn>,
	     }));
		 }
        this.setState({
          table,
          isLoaded: true,
        });
      });
  }

  render() {
    if (!this.state.isLoaded) {
  			return (<div className="loader" />);
  		}
    return (
      <MDBDataTable
        striped
        small
        data={this.state.table}
      />
    );
  }
}


export default ListOficio;

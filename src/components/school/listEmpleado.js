import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';
import {
  getEmployeesList,
}
  from '../../connect_api/employee/EmployeeAPI';
import {table} from '../util/forms';

class ListEmpleado extends Component {
  constructor() {
    super();
    this.state = {
      table: {
        columns: [
          {
            label: 'Nombre',
            sort: 'asc',
            width: 250,
          },
          {
            label: 'Identificacion',
            sort: 'asc',
            width: 250,
          },
          {
            label: 'Ubicacion',
            sort: 'asc',
            width: 750,
          },
          {
            label: 'Idac',
            sort: 'asc',
          },
          {
            label: 'Tipo de Dedicacion',
            sort: 'asc',
            width: 250,
          },
          {
            label: 'Fecha de Admision',
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
    console.log('ListEmpleado: ', identification);
    // this.props.history.push('/Escuela/Oficio', {cedula:identification});
  }

  componentWillMount() {
    getEmployeesList(1, 0, 0)
      .then((result) => {
        console.log('getFormOficesList: ', result);
        const { table } = this.state;
		 if (result.result !== 'not found') {
          table.rows = result.map(emp => ({
            name: emp.name,
            identification: emp.identification,
            execunting_unit: emp.execunting_unit,
            idac: emp.idac_code,
            dedication_type: emp.dedication_type,
            admission_date: emp.admission_date,
            button: <MDBBtn onClick={e => this.handleData(e, emp.identification)}>Seleccionar</MDBBtn>,
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
    <div className="lista">
      {table(this.state.table)}
      </div>
    );
  }
}


export default ListEmpleado;

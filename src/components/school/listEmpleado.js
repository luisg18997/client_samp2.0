import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';
import {
  getEmployeesList,
}
  from '../../connect_api/employee/EmployeeAPI';
import {table} from '../util/forms';
import Authorization from '../redirectPrincipal';

class ListEmpleado extends Component {
  constructor() {
    super();
    this.auth = new Authorization();
    this.state = {
      table: {
        columns: [
          {
            label: 'Nombre',
            field: 'name',
            sort: 'asc',
            width: 250,
          },
          {
            label: 'Identificacion',
            field: 'identification',
            sort: 'asc',
            width: 250,
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
            label: 'Tipo de Dedicacion',
            field: 'dedication_type',
            sort: 'asc',
            width: 250,
          },
          {
            label: 'Fecha de Admision',
            field: 'admission_date',
            sort: 'asc',
            width: 350,
          },
          {
            label: 'Acccion',
            field: 'button',
          },
        ],
      },
      isLoaded: false,
    };
  }

  handleData(e, identification) {
    e.preventDefault();
    console.log('ListEmpleado: ', identification);
    this.props.history.replace('/Escuela/Oficio/Existente', {employee_id:identification});
  }

  async componentWillMount() {
    if (await this.auth.loggedIn()) {
      const resultUser = await this.auth.ObtainData();
      const user = resultUser.data;
      const result = await getEmployeesList(user.schoolID, user.instituteID, user.coordinationID);
      const { table } = this.state;
      if (result.result !== 'not found') {
        table.rows = result.map(emp => ({
          name: emp.name,
          identification: emp.identification,
          execunting_unit: emp.execunting_unit,
          idac: emp.idac_code,
          dedication_type: emp.dedication_type,
          admission_date: emp.admission_date,
          button: <MDBBtn onClick={e => this.handleData(e, emp.id)}>Seleccionar</MDBBtn>,
        }));
      }
      this.setState({
        table,
        isLoaded: true,
      });
    }
  }

  render() {
    if (!this.state.isLoaded) {
  			return (<div className="loader" />);
  		} else {
        return (
        <div className="lista">
          {table(this.state.table)}
          </div>
        );
      }
  }
}


export default ListEmpleado;

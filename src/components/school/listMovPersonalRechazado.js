import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';
import {
  getMovPersonalFormRejectedList,
}
  from '../../connect_api/formData/formDataAPI';
import {table} from '../util/forms';
import Authorization from '../redirectPrincipal';

class ListMovPersonalRechazado extends Component {
  constructor() {
    super();
    this.auth = new Authorization();
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
            label: 'Fecha de Rechazo',
            field: 'date_made',
            sort: 'asc',
            width: 350,
          },
          {
            label: 'Observacion',
            field: 'observation',
            width: 350,
          },
          {
            label: 'Acccion',
            field: 'button'
          },
        ],
      },
      isLoaded: false,
    };
  }

  async componentWillMount() {
    if (await this.auth.loggedIn()) {
      const resultUser = await this.auth.ObtainData();
      const user = resultUser.data;
      const result = await getMovPersonalFormRejectedList(user.ubication.id,user.schoolID, user.instituteID, user.coordinationID)
      const { table } = this.state;
      if (result.result !== 'not found') {
        table.rows = result.map(form => ({
         code: form.code_form,
         name: form.name,
         movement_type: form.movement_type,
         execunting_unit: form.execunting_unit,
         idac: form.idac_code,
         date_made: form.date_made,
         observation: form.observation,
         button: <MDBBtn>Seleccionar</MDBBtn>,
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


export default ListMovPersonalRechazado;

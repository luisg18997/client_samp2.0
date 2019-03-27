import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';
import {table} from '../util/forms';
import {
  getMovPersonalFormApprovalList,
}
  from '../../connect_api/formData/formDataAPI';
import Authorization from '../redirectPrincipal';

class ListMovPersonalAprobado extends Component {
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
            label: 'Fecha de Aprobacion',
            field: 'approval_date',
            sort: 'asc',
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

  handleViewPDF(e, identification) {
    e.preventDefault();
    console.log('ListOficio: ', identification);
    this.props.history.replace('/Escuela/movPersonal/PDF', { cedula: identification,ubication_id: this.state.user.ubication.id});
  }

  async componentWillMount() {
    if (await this.auth.loggedIn()) {
      const resultUser = await this.auth.ObtainData();
      const user = resultUser.data;
      const result = await getMovPersonalFormApprovalList(user.ubication.id,user.schoolID, user.instituteID, user.coordinationID)
      console.log(result);
      const { table } = this.state;
      if (result.result !== 'not found') {
        table.rows = result.map(form => ({
         code: form.code_form,
         name: form.name,
         movement_type: form.movement_type,
         execunting_unit: form.execunting_unit,
         idac: form.idac_code,
         approval_date: form.approval_date,
         button: <MDBBtn type='button' onClick={(e) => this.handleViewPDF(e, form.identification)}>Ver PDF</MDBBtn>,
       }));
     }
     this.setState({
       table,
       isLoaded: true,
	user
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


export default ListMovPersonalAprobado;

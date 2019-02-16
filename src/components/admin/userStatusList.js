import React, {Component, Fragment} from 'react';
import {table} from '../util/forms';
import { MDBBtn } from 'mdbreact';
import {
  getALLUserList,
 } from '../../connect_api/user/userAPI';

class UserStatusList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table:{
        columns:[
          {
            label:"Nombre",
            field: "name",
            sort: 'asc',
            width: 250
          },
          {
            label:"Correo",
            field: "email",
            width: 450
          },
          {
            label:"Ubicacion",
            field: "ubication",
            width: 450
          },
          {
            label:"Role",
            field: "rol",
            width: 250
          },
          {
            label: "Status",
            field: "user_status",
            width: 250
          },
          {
            label: "Acciones",
            field: "button",
            width: 450
          }
        ]
      },
      isLoaded: false,
      user : {}
    }
  }

  async componentWillMount(){
    const result =	await getALLUserList()
    console.log('getALLUserList: ',result);
    const { table } = this.state;
     if (result.result !== 'not found') {
       for (let i = 0; i< result.length; i+=1) {
         if (result[i].is_active === '1' && result[i].is_deleted !== '1') {
           result[i].user_status = "activo"
         } else if (result[i].is_deleted === '1'){
            result[i].user_status = "eliminado"
         } else {
           result[i].user_status = "bloqueado"
         }
         result[i].buttons = <Fragment><MDBBtn type="button">Actualizar</MDBBtn><MDBBtn type="button">Ver</MDBBtn><MDBBtn type="button">Eliminar</MDBBtn></Fragment>
       }
     table.rows = result.map(user => ({
       name : user.name,
       email : user.email,
       ubication : user.ubication.description,
       rol : user.rol.description,
       user_status : user.user_status,
       button : user.buttons
     }));
   }
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

export default UserStatusList;

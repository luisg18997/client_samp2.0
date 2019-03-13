import React, {Component, Fragment} from 'react';
import {table} from '../util/forms';
import { MDBBtn } from 'mdbreact';
import {
  getALLUserList,
  updateUserIsDeleted,
  updateUserIsRecovery,
 } from '../../connect_api/user/userAPI';
 import Authorization from '../redirectPrincipal';

class UserStatusList extends Component {
  constructor(props) {
    super(props);
    this.auth = new Authorization();
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
    if (await this.auth.loggedIn()) {
      const resultuser = await this.auth.ObtainData();
      const user = resultuser.data;
      const result =	await getALLUserList(user.id)
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
           result[i].buttons = <Fragment><MDBBtn type="button" onClick={() => this.handleUpdateUser(result[i].id)}>Actualizar</MDBBtn><MDBBtn type="button" onClick={() => this.handleViewUser(result[i].id)}>Ver</MDBBtn>{result[i].is_deleted !== '1'?<MDBBtn type="button" onClick={() => this.handleDeleteUser(result[i].id)}>Eliminar</MDBBtn>: <MDBBtn type="button" onClick={() => this.handleRecoveryUser(result[i].id)}>Recuperar</MDBBtn>}</Fragment>
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
       table,
       isLoaded : true,
       user
     })
     console.log('rows: ', this.state)
   }
}

 handleUpdateUser(data){
   console.log(data);
   this.props.history.replace('/Admin/Usuario/Actualizar',
   { user_id : data })
 }

 handleViewUser(data){
   console.log(data);
   this.props.history.replace('/Admin/Usuario/Ver',
   { user_id : data })
 }

 async handleDeleteUser(data){
  if(window.confirm('¿Seguro que desea eliminar este usuario?')){
    const result = await updateUserIsDeleted(data, this.state.user.id);
    if(result === 1) {
      alert('Usuario eliminado exitosamente')
    } else {
      alert(' ERROR! el usuario no fue eliminado exitosamente')
    }
  }
 }


 async handleRecoveryUser(data){
  if(window.confirm('¿Seguro que desea recuperar este usuario?')){
    const result = await updateUserIsRecovery(data, this.state.user.id);
    if(result === 1) {
      alert('Usuario recuperado exitosamente')
    } else {
      alert(' ERROR! el usuario no fue recuperado exitosamente')
    }
  }
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

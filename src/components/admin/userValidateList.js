import React, {Component, Fragment} from 'react';
import {table} from '../util/forms';
import { MDBBtn } from 'mdbreact';
import {
  getAllRolesList,
  getALLUserValidateList,
 } from '../../connect_api/user/userAPI';
import {selectWithoutLabel} from '../util/forms';

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
            label: "Acciones",
            field: ["button1","button2"],
            width: 250
          }
        ]
      },
      isLoaded: false,
      user : []
    }
  }

  async componentWillMount(){
    const rol = await getAllRolesList();
const result =	await getALLUserValidateList();
for (let i = 0; i< result.length; i+=1) {
  switch (result[i].ubication_id) {
    case 1: {
      console.log('ubicacion administracion');
      result[i].userRoleID = "";
      result[i].user_role = await selectWithoutLabel('userRoleID',result[i].userRoleID, this.handleChangeRol(),[rol[0]],true);
      break;
    }
    case 2: {
      console.log('ubicacion escuela');
      result[i].userRoleID = "";
      result[i].user_role = await selectWithoutLabel('userRoleID',result[i].userRoleID, this.handleChangeRol(),[rol[1]],true)
      break;
    }
    case 3: {
      console.log('ubicacion instituto');
      result[i].userRoleID = "";
      result[i].user_role = await selectWithoutLabel('userRoleID',result[i].userRoleID, this.handleChangeRol(),[rol[2]],true);
      break;
    }
    case 4: {
      console.log('ubicacion coordinacion');
      result[i].userRoleID = "";
      result[i].user_role = await selectWithoutLabel('userRoleID',result[i].userRoleID, this.handleChangeRol(),[rol[3]],true);
      break;
    }
    case 5: {
      console.log('ubicacion dpto. rrhh');
      result[i].userRoleID = "";
      result[i].user_role = await selectWithoutLabel('userRoleID',result[i].userRoleID, this.handleChangeRol(),[rol[4],rol[5]],true);
      break;
    }
    case 6: {
      console.log('ubicacion dpto. presupuesto');
      result[i].userRoleID = "";
      result[i].user_role = await selectWithoutLabel('userRoleID',result[i].userRoleID, this.handleChangeRol(),[rol[6],rol[7]],true);;
      break;
    }
    default:
    console.log('ubicacion ninguna');
    result[i].userRoleID = "";
    result[i].user_role = "no tiene rol";
  }
}
   console.log('getALLUserValidateList: ',result);
   const { table } = this.state;
   if (result.result !== 'not found') {
   table.rows = result.map(user => ({
     name : user.name,
     email : user.email,
     ubication : user.ubication,
    rol : user.user_role,
     button : <Fragment><MDBBtn onClick={() => this.handleData(user, true)} >Validar</MDBBtn><MDBBtn onClick={() => this.handleData(user, false)} >Rechazar</MDBBtn></Fragment>
   }));
 }
   this.setState({
    table,
    user: result,
     isLoaded : true
   })
   console.log('rows: ', this.state)
 }

  handleChangeRol = (e) => {
    console.log(e);
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

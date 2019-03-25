import React, {Component, Fragment} from 'react';
import {table} from '../util/forms';
import { MDBBtn } from 'mdbreact';
import {
  getAllRolesList,
  getALLUserValidateList,
  updateUserValidate,
 } from '../../connect_api/user/userAPI';
import {selectWithoutLabel} from '../util/forms';
import Authorization from '../redirectPrincipal';

class UserValidateList extends Component {
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
            label:"Rol",
            field: "rolList",
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
      userList : [],
      rolList : [],
      user: []
    }
  }

  async componentWillMount(){
    if (await this.auth.loggedIn()) {
      const resultuser = await this.auth.ObtainData();
      const user = resultuser.data;
      const rol = await getAllRolesList();
      const result =	await getALLUserValidateList();
      for (let i = 0; i< result.length; i+=1) {
        switch (result[i].ubication.id) {
          case 1: {
            console.log('ubicacion administracion');
            result[i].roleID = "";
            result[i].user_role = await selectWithoutLabel('roleID',result[i].roleID, (e) => this.handleChangeRol(e, result[i]),[rol[0]],true);
            result[i].button = <Fragment><MDBBtn onClick={() => this.handleData(result[i], true, i)} >Validar</MDBBtn><MDBBtn onClick={() => this.handleData(result[i], false, i)} >Rechazar</MDBBtn></Fragment>
            break;
          }
          case 2: {
            console.log('ubicacion escuela');
            result[i].roleID = "";
            result[i].user_role = await selectWithoutLabel('roleID',result[i].roleID,(e) => this.handleChangeRol(e, result[i]),[rol[1],rol[2]],true)
            result[i].button = <Fragment><MDBBtn onClick={() => this.handleData(result[i], true, i)} >Validar</MDBBtn><MDBBtn onClick={() => this.handleData(result[i], false, i)} >Rechazar</MDBBtn></Fragment>
            break;
          }
          case 3: {
            console.log('ubicacion instituto');
            result[i].roleID = "";
            result[i].user_role = await selectWithoutLabel('roleID',result[i].roleID, (e) => this.handleChangeRol(e, result[i]),[rol[3],rol[4]],true);
            result[i].button = <Fragment><MDBBtn onClick={() => this.handleData(result[i], true, i)} >Validar</MDBBtn><MDBBtn onClick={() => this.handleData(result[i], false, i)} >Rechazar</MDBBtn></Fragment>
            break;
          }
          case 4: {
            console.log('ubicacion coordinacion');
            result[i].roleID = "";
            result[i].user_role = await selectWithoutLabel('roleID',result[i].roleID, (e) => this.handleChangeRol(e, result[i]),[rol[5],rol[6]],true);
            result[i].button = <Fragment><MDBBtn onClick={() => this.handleData(result[i], true, i)} >Validar</MDBBtn><MDBBtn onClick={() => this.handleData(result[i], false, i)} >Rechazar</MDBBtn></Fragment>
            break;
          }
          case 5: {
            console.log('ubicacion dpto. rrhh');
            result[i].roleID = "";
            result[i].user_role = await selectWithoutLabel('roleID',result[i].roleID, (e) => this.handleChangeRol(e, result[i]),[rol[7],rol[8]],true);
            result[i].button = <Fragment><MDBBtn onClick={() => this.handleData(result[i], true, i)} >Validar</MDBBtn><MDBBtn onClick={() => this.handleData(result[i], false, i)} >Rechazar</MDBBtn></Fragment>
            break;
          }
          case 6: {
            console.log('ubicacion dpto. presupuesto');
            result[i].roleID = "";
            result[i].user_role = await selectWithoutLabel('roleID',result[i].roleID, (e) => this.handleChangeRol(e, result[i]),[rol[9],rol[10]],true);
            result[i].button = <Fragment><MDBBtn onClick={() => this.handleData(result[i], true, i)} >Validar</MDBBtn><MDBBtn onClick={() => this.handleData(result[i], false, i)} >Rechazar</MDBBtn></Fragment>
            break;
          }
          default:
          console.log('ubicacion ninguna');
          result[i].roleID = "";
          result[i].user_role = "no tiene rol";
          result[i].button = <Fragment><MDBBtn type="button">name</MDBBtn></Fragment>
        }
      }
     console.log('getALLUserValidateList: ',result);
     const { table } = this.state;
     if (result.result !== 'not found') {
     table.rows = result.map(user => ({
       name : user.name,
       email : user.email,
       ubication : user.ubication.description,
      rolList : user.user_role,
       button : user.button
     }));
   }
     this.setState({
      table,
      userList: result,
       isLoaded : true,
       rolList: rol,
       user
     })
     console.log('rows: ', this.state)
   }
 }

  handleChangeRol = (e, user) => {
    console.log("value: ", e.target.value);
    user.roleID = e.target.value;
    this.setState({
      user
    })
    console.log('user despues de modificar: ', user);
  }

  handleData = async(user, value, position) => {
    console.log("user: ", user);
    console.log("value: ", value);
    console.log("position: ", position);
    const table = this.state.table;
    if (value) {
        if (user.roleID !== ""){
          const rol = this.state.rolList[parseInt(user.roleID)-1].label;
          console.log("rol: ", rol);
          table.rows[position].button = "Validado";
          table.rows[position].rolList = rol;
          const validate = await updateUserValidate(user.id,user.user_role_id, user.roleID, '1', '0', this.state.user.id);
          console.log('user_validate result: ', validate);
        } else {
          alert('seleccione un rol para el usuario: ' + user.name);
        }
    } else {
      table.rows[position].button = "No validado";
      table.rows[position].rolList = "Usuario sin rol";
      const validate = await updateUserValidate(user.id,user.user_role_id, 0, '0', '1', this.state.user.id);
      console.log('user_validate result: ', validate);
    }
    this.setState({
      table
    })
    console.log("row: ", table);
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

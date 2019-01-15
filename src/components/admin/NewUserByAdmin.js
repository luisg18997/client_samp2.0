import React, { Component, Fragment} from 'react';
import { Container, Row, Col, MDBBtn } from 'mdbreact';
import {Label, LabelRequired, select} from '../util/forms';
import {
  getAllRolesList,
 } from '../../connect_api/user/userAPI';
 import {
 getSchoolList,
 getInstituteList,
 getCoordinationList
 } from '../../connect_api/faculty/FacultyAPI';

class UpdateUser extends Component {

    constructor(props){
    super(props);
    this.state = {
      nombre: "",
      apellido: "",
      email: "",
      clave: "12345678",
      rol : "",
      rolList: [],
      ubicacion: 0,
      ubicacionList: [],
      statusList:[
      {
        label: "activo", ID: true
      },
      {
        label : "inactivo", ID: false
      }
      ],
      status: "",
      escuela: "",
      instituto: "",
      coordinacion : "",
      schoolList: "",
      instituteList: "",
      coordinationList: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelectub = this.handleChangeSelectub.bind(this);
  }

 async componentDidMount() {
  const result = await getAllRolesList()
  this.setState({
    rolList: result
  })
  console.log(this.state.rolList);
 }

 handleSubmit = event => {
   event.preventDefault();

 }

 handleChange = event => {
   this.setState({
     [event.target.name]: event.target.value
   });

   console.log(event.target.name,': ',event.target.value);
 }

 handleChangeSelectub(event){
   console.log("event: ", event.target.value);
   let ubication = 0;
   switch (event.target.value) {
     case '1':{
       console.log('administrador');
       ubication = 1;
       break;
     }
     case '2':{
       console.log('escuela');
       ubication = 2;
       break;
     }
     case '3':{
       console.log('instituto');
       ubication = 3;
       break;
     }
     case '4':{
       console.log('Coordinacion');
       ubication = 4;
       break;
     }
     case (event.target.value >= '5' && event.target.value <= '6'):{
       console.log('departamento de RRHH');
       ubication = 5;
       break;
     }
     case (event.target.value >= '7' && event.target.value <= '8'):{
       console.log('departamento de presupuesto');
       ubication = 6;
       break;
     }
     default:
     console.log('ninguna ubicacion');
     ubication = 0;
   }

   console.log('ubicacion: ', ubication);
   this.setState({
     rol : event.target.value,
     ubicacion: ubication,
     escuela: 0,
     instituto: 0,
     coordinacion : 0,
     schoolList: [],
     instituteList: [],
     coordinationList: []
   });
   console.log("rol: ", this.state.rol);
   if (event.target.value === "2") {
     this.handleChangeSchoolList();
   } else if (event.target.value === "3") {
     this.handleChangeInstitutelList();
   } else if (event.target.value === "4") {
     this.handleChangeCoordinationList();
   }
}

async handleChangeSchoolList(){
	const schoolList = await getSchoolList()
	this.setState({
		schoolList
	})
	console.log("schoolList: ", this.state.schoolList)
}

async handleChangeInstitutelList(){
	const instituteList = await getInstituteList()
	this.setState({
		instituteList
	})
	console.log("instituteList: ", this.state.instituteList)
}

async handleChangeCoordinationList(){
	const coordinationList = await getCoordinationList()
	this.setState({
		coordinationList
	})
	console.log("coordinationList: ", this.state.coordinationList)
}

  render() {
    const {
      nombre,
      apellido,
      email,
      rol,
      ubicacion,
      status,
      escuela,
      instituto,
      coordinacion
    } = this.state;
    return (
      <div className="content">
        <Container  className="mt-1">
          <Row className="mt-2">
            <Col>
              <p className="h2 text-center mb-6">Registro de Usuario</p>
        <br></br>
        <form onSubmit={this.handleSubmit}  style={{width: '590px', marginLeft:'150px',marginRight:' 300px'}} className="form-container">
        <div  className="form-group">
          {Label(LabelRequired('Nombre'),'text','nombre', nombre,this.handleChange, true)}
      </div>

      <div className="form-group">
        {Label(LabelRequired('Apellido'),'text','apellido', apellido,this.handleChange, true)}
      </div>

      <div className="form-group">
        {Label(LabelRequired('Email'),'email','email', email,this.handleChange, true)}
      </div>

      <div className="form-group">
        {select(LabelRequired('Rol'),'rol', rol, this.handleChangeSelectub, this.state.rolList, true)}
      </div>
      {
        ubicacion === 2?
        <Fragment>
          <div className="form-group">
            {select(LabelRequired('Escuela'), 'escuela', escuela,this.handleChange,this.state.schoolList, true)}
          </div>
        </Fragment>
        :ubicacion === 3?
        <Fragment>
          <div className="form-group">
            {select(LabelRequired('Instituto'), 'instituto', instituto,this.handleChange,this.state.instituteList, true)}
          </div>
        </Fragment>
        :ubicacion === 4?
        <Fragment>
          <div className="form-group">
            {select(LabelRequired('Coordinacion'), 'coordinacion', coordinacion,this.handleChange,this.state.coordinationList, true)}
          </div>
        </Fragment>
          :<span></span>
      }

      <div className="form-group">
        {select(LabelRequired('Status'),'status', status, this.handleChange, this.state.statusList, true)}
      </div>
      <br></br>
      <div  className="form-group col-md-14">
      <div className="row justify-content-center">
      <MDBBtn color="light-blue" type="submit" className="col-md-3" style={{marginRight:'100px'}} >Enviar</MDBBtn>
      <MDBBtn color="light-blue" type="reset" className="col-md-3" > Restablecer  </MDBBtn>
      </div>
      </div>
        </form>
      </Col>
    </Row>
      </Container>
      </div>
    );
  }


}

export default UpdateUser;

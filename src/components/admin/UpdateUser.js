import React, { Component, Fragment} from 'react';
import { Container, Row, Col, MDBBtn } from 'mdbreact';
import {Label, LabelRequired, select} from '../util/forms';
import {
  getAllRolesList,
  getAllUbicationsList
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
      rol : "",
      rolList: [],
      ubicacion: "",
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

 componentDidMount() {
  getAllRolesList()
  .then(result => {
    result = result.map(res => ({
      ID: res.ID,
      label: res.ROL
    }))
    this.setState({
      rolList: result
    })
    console.log(this.state.rolList);
  });
  getAllUbicationsList()
  .then(result => {
    result = result.map(res =>({
      ID: res.ID,
      label: res.Ubicacion
    }))
    this.setState({
      ubicacionList : result
    });
    console.log(this.state);
  })
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
   this.setState({
     ubicacion : event.target.value,
     escuela: 0,
     instituto: 0,
     coordinacion : 0,
     schoolList: [],
     instituteList: [],
     coordinationList: []
   });
   console.log("ubicacion: ", this.state.ubicacion);
   if (event.target.value === "2") {
     this.handleChangeSchoolList();
   } else if (event.target.value === "3") {
     this.handleChangeInstitutelList();
   } else if (event.target.value === "4") {
     this.handleChangeCoordinationList();
   }
}

handleChangeSchoolList(){
 getSchoolList()
 .then(result => {
   result = result.map(res => ({
     ID : res.ID,
     code: res.code,
     label: res.name
   }))
   this.setState({
     schoolList : result
   })
   console.log("schoolList: ", this.state.schoolList)
 })
}

handleChangeInstitutelList(){
 getInstituteList()
 .then(result => {
   result = result.map(res => ({
     ID : res.ID,
     code: res.code,
     label: res.name
   }))
   this.setState({
     instituteList : result
   })
   console.log("instituteList: ", this.state.instituteList)
 })
}

handleChangeCoordinationList(){
 getCoordinationList()
 .then(result => {
   result = result.map(res => ({
     ID : res.ID,
     code: res.code,
     label: res.name
   }))
   this.setState({
     coordinationList : result
   })
   console.log("coordinationList: ", this.state.coordinationList)
 })
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
        <form onSubmit={this.handleSubmit}  style={{width: '600px', marginLeft:'150px',marginRight:' 300px'}} className="form-container">
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
        {select(LabelRequired('Rol'),'rol', rol, this.handleChange, this.state.rolList, true)}
      </div>

      <div className="form-group">
        {select(LabelRequired('Ubicación'),'ubicacion', ubicacion, this.handleChangeSelectub, this.state.ubicacionList, true)}
      </div>
      {
        ubicacion === "2"?
        <Fragment>
          <div className="form-group">
            {select(LabelRequired('Escuela'), 'escuela', escuela,this.handleChange,this.state.schoolList, true)}
          </div>
        </Fragment>
        :ubicacion === "3"?
        <Fragment>
          <div className="form-group">
            {select(LabelRequired('Instituto'), 'instituto', instituto,this.handleChange,this.state.instituteList, true)}
          </div>
        </Fragment>
        :ubicacion === "4"?
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

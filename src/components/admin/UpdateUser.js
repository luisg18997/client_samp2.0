import React, { Component} from 'react';
import { getAllRolesList, getAllUbicationsList, postuser } from '../../connect_api/user/userAPI';
import Select from 'react-select';

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
        label: "activo", value: true
      },
      {
        label : "inactivo", value: false
      }
      ],
      status: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelectrol = this.handleChangeSelectrol.bind(this);
    this.handleChangeSelectub = this.handleChangeSelectub.bind(this);
  }

 componentDidMount() {
  getAllRolesList()
  .then(result => {
    this.setState({
      rolList: result
    })
    console.log(this.state.rolList);
  });
  getAllUbicationsList()
  .then(result => {
    this.setState({
      ubicacionList : result
    });
    console.log(this.state);
  })
 }

 handleSubmit = event => {
   event.preventDefault();
   const data = this.state
   alert(data);
   postuser(data);

 }

 handleChange = event => {
   this.setState({
     [event.target.id]: event.target.value
   });
 }
 handleChangeSelectrol = event => {
   this.setState({
     rol : event.value
   });
 }

 handleChangeSelectub = event => {
   this.setState({
     ubicacion : event.value
   });
 }

 handleChangeSelectStatus = event => {
  this.setState({
    status : event.value
  })
 }

  render() {
    return (
      <div className="container">
        <br></br>
        <form onSubmit={this.handleSubmit} className="form-container">
        <div className="form-group">
            <label htmlFor="nombre"> Nombre</label>
            <input className="form-control" type="text" name="nombre" id="nombre" value={this.state.nombre} onChange={this.handleChange}/>
      </div>

      <div className="form-group">
            <label htmlFor="apellido"> Apellido</label>
            <input className="form-control" type="text" name="apellido" id="apellido" value={this.state.apellido} onChange={this.handleChange}/>
      </div>

      <div className="form-group">
        <label htmlFor="email"> Email</label>
            <input className="form-control" type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange}/>
      </div>

      <div className="form-group">
            <label htmlFor="rol"> Rol</label>
            <Select
              onChange={this.handleChangeSelectrol}
              options={this.state.rolList.map(rol =>(
              {label: rol.ROL, value : rol.ID}
            ))}
            />
      </div>

      <div className="form-group">
        <label htmlFor="ubicacion"> Ubicación</label>
        <Select
        onChange={this.handleChangeSelectub}
        options={this.state.ubicacionList.map(ub =>(
          {label: ub.Ubicacion, value : ub.ID}
        ))}
        />
      </div>

      <div className="form-group">
            <label htmlFor="status"> Status</label>
            <Select
              onChange={this.handleChangeSelectStatus}
              options={this.state.statusList}
            />
      </div>

        <br></br>

        <button className="btn btn-primary">Enviar</button>
        </form>
      </div>
    );
  }


}

export default UpdateUser;

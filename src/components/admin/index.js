import React, { Component} from 'react';
import { getAllRolesList, getAllUbicationsList } from '../connect_api/user/userAPI';
import Select from 'react-select';

class admin extends Component {

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
      statusList:[],
      status: ""
    }

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

 handleChange = event => {
   this.setState({
     [event.target.id]: event.target.value
   });
   console.log(this.state)
 }
 handleChangeSelectrol = event => {
   this.setState({
     rol : event.value
   });
   console.log(this.state)
 }

 handleChangeSelectub = event => {
   this.setState({
     ubicacion : event.value
   });
   console.log(event.value)
   console.log(this.state)
 }

  render() {
    return (
      <div className="container">
        <br></br>

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
      </div>

        <br></br>

        <button className="btn btn-primary" onClick={this.enviar.bind(this)}>Enviar</button>

      </div>
    );
  }

enviar(){
  alert('Enviado');
}

}

export default admin;

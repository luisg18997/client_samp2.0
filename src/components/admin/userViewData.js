import React, { Component, Fragment} from 'react';
import { Container, Row } from 'mdbreact';
import {
  getUser,
 } from '../../connect_api/user/userAPI';
 import Authorization from '../redirectPrincipal';

 class UpdateViewData extends Component {
   constructor(props){
     super(props);
     this.auth = new Authorization();
     this.state = {
       user: {},
       nombre: "",
       apellido: "",
       email: "",
       rol : "",
       ubicacion: "",
       status: "",
       escuela: "",
       instituto: "",
       coordinacion : "",
       isLoaded: false,
       auth: false
     }
   }

  async componentWillMount() {
    if (await this.auth.loggedIn()) {
       if (this.props.location.state === undefined) {
          this.props.history.replace('/Admin')
       } else {
        const resultUser = await this.auth.ObtainData();
        const user = resultUser.data;
        const result = await getUser(this.props.location.state.user_id);
        let status;
        if (result.is_active === '1' && result.is_deleted === '0') {
            status = 'Activo';
        } else if(result.is_deleted === '0') {
          status = 'Bloqueado'
        } else {
          status = 'Eliminado'
        }
        this.setState({
          user,
          isLoaded: true,
          nombre: result.name,
          apellido: result.surname,
          rol: result.rol,
          status,
          email: result.email,
          ubicacion : result.ubication,
          escuela: result.school_id,
          instituto: result.institute_id,
          coordinacion: result.coordination_id,
          ubicacionUser: result.ubication_user,
          auth: true,
        })
      }
    }
  }

  render(){
    const {
      nombre,
      apellido,
      email,
      rol,
      ubicacion,
      status,
      escuela,
      instituto,
      coordinacion,
      ubicacionUser,
    } = this.state;
    if (!this.state.isLoaded) {
			return (<div className="loader"></div>);
		} else {
        return (
        <div className="contentd">
          <Container   className="mt-4">
            <Row className="mt-2">
              <form>
                <p className="h2 text-center mb-6">Datos de Usuario</p>
                <br />
                <div className="form-group">
                <label><strong>Nombre</strong></label>
                <br />
                <label>{nombre}</label>
                </div>
                <div className="form-group">
                <label><strong>Apellido</strong></label>
                <br />
                <label>{apellido}</label>
                </div>
                <div className="form-group">
                <label><strong>Email</strong></label>
                <br />
                <label>{email}</label>
                </div>
                <div className="form-group">
                <label><strong>Rol</strong></label>
                <br />
                <label>{rol.description}</label>
                </div>
                <div className="form-group">
                <label><strong>Ubicacion</strong></label>
                <br />
                <label>{ubicacion.description}</label>
                </div>
                <div className="form-group">
                {ubicacion.id === 2 && escuela !==0?
                  <Fragment>
                  <label><strong>Escuela</strong></label>
                  <br />
                  <label>{ubicacionUser}</label>
                  </Fragment>
                :ubicacion.id === 3 && instituto !== 0?
                <Fragment>
                <label><strong>Instituto</strong></label>
                <br />
                <label>{ubicacionUser}</label>
                </Fragment>
                :ubicacion.id === 4 && coordinacion !== 0?
                <Fragment>
                <label><strong>Coordinación</strong></label>
                <br />
                <label>{ubicacionUser}</label>
                </Fragment>:
                <span></span>
              }
              </div>
              <div className="form-group">
              <label><strong>Status</strong></label>
              <br />
              <label>{status}</label>
              </div>
            </form>
            </Row>
          </Container>
        </div>
      );
    }
  }
}


export default UpdateViewData;

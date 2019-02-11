import React, { Component, Fragment } from 'react';
import {
	getAllSecurityQuestionsList,
  updateUserAnswer,
  updateUserPassword,
} from '../../connect_api/user/userAPI';
  import { Container, Row, Col, MDBBtn } from 'mdbreact';
  import {Label, LabelRequired, select} from '../util/forms';
  import Authorization from '../redirectPrincipal';
class PreguntaSegList extends Component {
  constructor(){
    super();
    this.auth = new Authorization();
    this.state = {
      questionList: [],
      preguntaSeg: "",
      respuesta: "",
      oldPassword : "",
      newPassword: "",
      newPasswordConfirm: "",
      user : "",
			isLoaded : false
    }
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
  }

  async componentWillMount() {
		console.log(this.auth.loggedIn());
		if (this.auth.loggedIn()) {
			console.log('this.props: ', this.props);
	    if (this.props.location.state === undefined) {
	      this.props.history.replace('/')
	    } else {
	      const oldPassword = this.props.location.state.password;
	      const user = this.props.location.state.result.data;
	      const questionList = await getAllSecurityQuestionsList();
	      this.setState({
	        questionList,
	        oldPassword,
	        user,
					isLoaded : true
	      })
	    }
		} else {
			this.auth.logout(this.props)
		}
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const result = await updateUserAnswer(this.state.user.answer.id, this.state.user.id, this.state.preguntaSeg, this.state.respuesta);
    if (this.state.oldPassword === '123456') {
      await updateUserPassword(this.state.user.id, this.state.newPassword);
    }
		console.log('result: ', result);
		if(result === 1) {
			alert('Datos de Seguridad Actualizado Correctamente');
				this.auth.redirect(this.state.user.ubication.id, this.props);
		} else {
			alert('Datos de Seguridad NO Actualizado Correctamente');
		}
  }

  render() {
    const {
      preguntaSeg,
      respuesta,
      oldPassword,
      newPassword,
      newPasswordConfirm,
    } = this.state
		if (!this.state.isLoaded) {
			return (<div className="loader"></div>);
		} else {
    return (
      <Container  className="mt-1">
				<Row className="mt-2">
					<Col>
						<p className="h2 text-center mb-6">Datos de seguridad Usuario</p>
						<form onSubmit={this.handleSubmit}>
							<div className="grey-text">
                {select(LabelRequired('Pregunta de Seguridad'), 'preguntaSeg', preguntaSeg, this.handleChange, this.state.questionList, true)}

                {Label(LabelRequired('Respuesta'),'password', 'respuesta', respuesta,this.handleChange, true)}
                {oldPassword === '123456'?
                  <Fragment>
                    <p className="h2 text-center mb-6">Cambio de Clave</p>
                    {Label(LabelRequired('Nueva Clave'),'password', 'newPassword', newPassword, this.handleChange, true)}

                    {Label(LabelRequired('Confirmar Clave'),'password', 'newPasswordConfirm', newPasswordConfirm, this.handleChange, true)}
                  </Fragment>
                  :<span></span>
                }
              </div>
              <br></br>
              <div  className="form-group col-md-12">
                <div className="row justify-content-center">
                  <MDBBtn color="light-blue" type="submit" className="col-md-3" style={{marginRight:'100px'}} >Enviar</MDBBtn>
                  <MDBBtn color="light-blue" type="reset" className="col-md-3" > Restablecer  </MDBBtn>
              </div>
            </div>
          </form>
          </Col>
        </Row>
    </Container>
    );
	}
  }
}

export default PreguntaSegList;

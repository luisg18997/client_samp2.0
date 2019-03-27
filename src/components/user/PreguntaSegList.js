import React, { Component, Fragment } from 'react';
import {
	getAllSecurityQuestionsList,
  updateUserAnswer,
  updateUserPassword,
} from '../../connect_api/user/userAPI';
  import { Container, Row, Col, MDBBtn } from 'mdbreact';
  import {Label, LabelRequired, select} from '../util/forms';
  import Authorization from '../redirectPrincipal';
	import {validateEmpty,validatePassword, validatePasswordConfirm} from '../util/validations';

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
			isLoaded : false,
			//focus
			respuestaFocus: false,
			newPasswordFocus: false,
      newPasswordConfirmFocus: false,
			//validate
			respuestaValidate: false,
			newPasswordValidate: false,
      newPasswordConfirmValidate: false,
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

	async handleValidateEmpty(data, name, focus, nameFocus, validateName) {
    const result = await validateEmpty(data, name, focus);
    console.log(result);
    await this.setState({
      [nameFocus]: result,
      [validateName]: !result
    });
    console.log('this.state: ', this.state);
    return !result;
  }

	async handleValidatePassword(data, name, focus, nameFocus, validateName) {
    const result = await validatePassword(data, name, focus);
    console.log(result);
    await this.setState({
      [nameFocus]: result,
      [validateName]: !result
    });
    console.log('this.state: ', this.state);
    return !result;
  }

	async handleValidatePasswordConfirm(data,password, name, focus, nameFocus, validateName) {
    const result = await validatePasswordConfirm(data,password, name, focus);
    console.log(result);
    await this.setState({
      [nameFocus]: result,
      [validateName]: !result
    });
    console.log('this.state: ', this.state);
    return !result;
  }

  validateForm() {
    return this.state.respuestaValidate || (this.state.newPasswordValidate && this.state.newPasswordConfirmValidate);
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

                {Label(LabelRequired('Respuesta'),'password', 'respuesta', respuesta,this.handleChange, true, (e) => this.handleValidateEmpty(e.target,'Respuesta',this.state.respuestaFocus,'respuestaFocus','respuestaValidate'),this.state.respuestaFocus.toString())}
                {oldPassword === '123456'?
                  <Fragment>
                    <p className="h2 text-center mb-6">Cambio de Clave</p>
                    {Label(LabelRequired('Contraseña'),'password', 'newPassword', newPassword, this.handleChange, true, (e) => this.handleValidatePassword(e.target, 'Contraseña',this.state.newPasswordFocus,'newPasswordFocus','newPasswordValidate'),this.state.newPasswordFocus.toString())}

                    {Label(LabelRequired('Confirmar Contraseña'),'password', 'newPasswordConfirm', newPasswordConfirm, this.handleChange, true, (e) => this.handleValidatePasswordConfirm(e.target,newPassword,'Confirmar Contraseña',this.state.newPasswordConfirmFocus,'newPasswordConfirmFocus','newPasswordConfirmValidate'),this.state.newPasswordConfirmFocus.toString())}
                  </Fragment>
                  :<span></span>
                }
              </div>
              <br></br>
              <div  className="form-group col-md-12">
                <div className="row justify-content-center">
                  <MDBBtn color="info" type="submit" disabled={!this.validateForm()} className=" col-md-3" style={{marginRight:'100px'}}>Enviar</MDBBtn>
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

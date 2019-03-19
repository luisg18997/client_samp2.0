import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import {Link} from 'react-router-dom';
import {Label} from '../util/forms';
import Authorization from '../redirectPrincipal';
import {validateEmpty, validateEmail} from '../util/validations';

export default class Login extends Component {
  constructor() {
    super();
		this.auth = new Authorization();
    this.state = {
      email: "",
      password: "",
      isLoaded : false,
      emailFocus: false,
      passwordFocus: false,
      emailValidate: false,
      passwordValidate: false
    };
  }

  async componentWillMount() {
    console.log(await this.auth.loggedIn());
    if (await this.auth.loggedIn()) {
    const result = await this.auth.ObtainData();
    console.log(result);
    this.auth.redirect(result.data.ubication.id, this.props);
    } else {
      this.auth.logout(this.props);
       this.setState({
         isLoaded : true
       })
    }
  }

  async handleValidateEmail(data, name, focus, nameFocus, validate, validateName) {
    const result = validateEmail(data, name, focus);
    console.log(result);
    await this.setState({
      [nameFocus]: result,
      [validateName]: !result
    });
    console.log('this.state: ', this.state);
    return !result;
  }

  async handleValidateEmpty(data, name, focus, nameFocus, validate, validateName) {
    const result = await validateEmpty(data, name, focus);
    console.log(result);
    await this.setState({
      [nameFocus]: result,
      [validateName]: !result
    });
    console.log('this.state: ', this.state);
    return !result;
  }

  validateForm() {
    return this.state.emailValidate && this.state.passwordValidate;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    console.log(event.target)
  }

  handleSubmit = async(event) => {
    event.preventDefault();
    await this.auth.AuthLogin(this.state.email, this.state.password, this.props);
  }

  render() {
    if (!this.state.isLoaded) {
      return (<div className="loader"></div>);
    } else {
    return (
      <div >

        <MDBContainer className="Login">
          <MDBRow>
        <MDBCol>
        <form onSubmit={this.handleSubmit}>
          <p className="h4 text-center mb-5">Iniciar sesión</p>
          <div className="grey-text">
						{Label('Email','email','email',this.state.email,this.handleChange,true, (e) => this.handleValidateEmail(e.target, 'Email', this.state.emailFocus, 'emailFocus', this.state.emailValidate, 'emailValidate'), this.state.emailFocus.toString())}
						{Label('Contraseña','password','password',this.state.password,this.handleChange,true, (e) => this.handleValidateEmpty(e.target, 'Contraseña', this.state.passwordFocus, 'passwordFocus', this.state.passwordValidate, 'passwordValidate'), this.state.passwordFocus.toString())}
          </div>
          <MDBBtn color="info"
            disabled={!this.validateForm()}
            type="submit"
          >
            Iniciar sesión
          </MDBBtn>
        </form>
      </MDBCol>
    </MDBRow>
    <br />
    <ul style={{
'listStyle': 'none'}}>
      <li>
        <Link to='/Registro'>Registro</Link>
      </li>
      <li>
        <Link to='/OlvidoClave'>Recuperar su clave</Link>
      </li>
    </ul>
 </MDBContainer>
      </div>
    );
  }
}
}

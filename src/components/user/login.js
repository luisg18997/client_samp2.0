import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import {Link} from 'react-router-dom';
import {Label} from '../util/forms';
import Authorization from '../redirectPrincipal';

export default class Login extends Component {
  constructor() {
    super();
		this.auth = new Authorization();
    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    console.log(event.target.value)
  }

  handleSubmit = async(event) => {
    event.preventDefault();
    await this.auth.AuthLogin(this.state.email, this.state.password, this.props);
  }

  render() {
    return (
      <div >

        <MDBContainer className="Login">

          <MDBRow>
        <MDBCol>
        <form onSubmit={this.handleSubmit}>
          <p className="h4 text-center mb-5">Iniciar sesión</p>
          <div className="grey-text">
						{Label('Email','email','email',this.state.email,this.handleChange,true)}
						{Label('Clave','password','password',this.state.password,this.handleChange,true)}
          </div>
          <MDBBtn color="light-blue"
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
        <Link to='/Registro'>Registrate</Link>
      </li>
      <li>
        <Link to='/OlvidoClave'>Olvido Su clave?</Link>
      </li>
    </ul>
 </MDBContainer>
      </div>
    );
  }
}

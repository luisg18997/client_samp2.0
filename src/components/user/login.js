import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import {Link} from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);

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

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div >
        <MDBContainer className="Login">
          <MDBRow>
        <MDBCol>
        <form onSubmit={this.handleSubmit}>
          <p className="h4 text-center mb-5">Ingresa</p>
          <div className="grey-text">
            <MDBInput
              icon="envelope"
              label="email"
              type="email"
              id="email"
              onChange={this.handleChange}
              validate
              />
            <MDBInput
                label="Contraseña"
                icon="lock"
                type="password"
                id="password"
                onChange={this.handleChange}
                validate
              />
          </div>
          <MDBBtn
            disabled={!this.validateForm()}
            type="submit"
          >
            Ingresar
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

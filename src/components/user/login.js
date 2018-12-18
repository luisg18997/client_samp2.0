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
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <MDBContainer>
        <form onSubmit={this.handleSubmit}>
          <p className="h5 text-center mb-4">Ingresa</p>
          <div className="grey-text">
            <MDBInput
              label="Correo"
              icon="envelope"
              group
              type="email"
              validate
              error="wrong"
              success="let"
              />
            <MDBInput
                label="Contraseña"
                icon="lock"
                type="password"
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

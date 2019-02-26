import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';
import {Label, LabelRequired} from '../util/forms';
import { MDBBtn } from 'mdbreact';
import {
	updateUserPassword,
	getUserSecurityAnswerCompare
} from '../../connect_api/user/userAPI';

class OlvidoClave extends Component {
	constructor(){
		super();
		this.state = {
			newPassword : "",
			newPasswordConfirm: "",
			user: [],
			answer: "",
			answerValidate : false,
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	async componentWillMount() {
		 console.log('this.props: ', this.props);
	    if (this.props.location.state === undefined) {
	      this.props.history.replace('/')
	    } else {
	    	const user = this.props.location.state.data;
	    	this.setState({
	    		user
	    	})
	    }
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
		console.log(this.state);
	}

	async handleValidateAnswer(value) {
		if(value=== true) {
			if(this.state.answer === '') {
				alert('ingrese la respuesta')
			} else {
				const result = await getUserSecurityAnswerCompare(this.state.user.id, this.state.answer);
				if (result.answer === true) {
					this.setState({
						answerValidate : true
					})
				} else {
					alert('respuesta incorrecta intente nuevamente');
				}
			}
		} else {
			if(window.confirm('¿Desea cancelar el proceso de Cambio de clave?')){
				this.props.history.replace('/');
			}
		}
	}

	async handleSubmit(event){
		event.preventDefault();
		const result = await updateUserPassword(this.state.user.id, this.state.newPassword);
		if(result === 1) {
			alert('Cambio de Clave fue de manera exitosa');
			 this.props.history.replace('/');
		} else {
			alert('Cambio de Clave NO fue de manera exitosa');
		}
	}

  render() {
  	const {
  		newPassword,
	newPasswordConfirm,
	answer,
answerValidate
  	} = this.state;
    return (
      <div>
        <form>
					{answerValidate===false?
					<Fragment>
						<h2>Seguridad de usuario</h2>
						<hr></hr>
						{Label('Pregunta Secreta','text', 'pregunta', this.state.user.question.description)}

						{Label(LabelRequired('Respuesta'),'password', 'answer', answer, this.handleChange, true)}
						<br></br>
			            <div  className="form-group col-md-12">
			                <div className="row justify-content-center">
			                  <MDBBtn color="light-blue" type="button" className="col-md-3" onClick={()=>this.handleValidateAnswer(true)} style={{marginRight:'100px'}} >Enviar</MDBBtn>
			                  <MDBBtn color="light-blue" type="button" className="col-md-3" onClick={()=>this.handleValidateAnswer(false)}> Cancelar</MDBBtn>
			              </div>
			            </div>
					</Fragment>:
					<Fragment>
						<h2> Cambio de Clave:</h2>
						<hr></hr>
	        	{Label(LabelRequired('Nueva Clave'),'password', 'newPassword', newPassword, this.handleChange, true)}

	        	{Label(LabelRequired('Nueva Clave'),'password', 'newPasswordConfirm', newPasswordConfirm, this.handleChange, true)}
						<div  className="form-group col-md-12">
								<div className="row justify-content-center">
									<MDBBtn color="info" type="button" className="col-md-3" onClick={this.handleSubmit} style={{marginRight:'100px'}} >Enviar</MDBBtn>
									<MDBBtn color="info" type="reset" className="col-md-3"> Restablecer</MDBBtn>
							</div>
						</div>
					</Fragment>}
        </form>
        <Link to="/"> Volver </Link>
      </div>
    );
  }
}

export default OlvidoClave;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Label, LabelRequired} from '../util/forms';
import {
	updateUserAnswer
} from '../../connect_api/user/userAPI';

class OlvidoClave extends Component {
	constructor(){
		super();
		this.state = {
			newPassword : "",
			newPasswordConfirm: "",
			user: [],
		}
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
	
  render() {
  	const {
  		newPassword,
	newPasswordConfirm
  	} = this.state;
    return (
      <div>
        <h2> Cambio de Clave:</h2>
        <hr></hr>
        <form>
        	{Label(LabelRequired('Nueva Clave'),'password', 'newPassword', newPassword, this.handleChange, true)}

        	{Label(LabelRequired('Nueva Clave'),'password', 'newPasswordConfirm', newPasswordConfirm, this.handleChange, true)}
        </form>
        <Link to="/"> Volver </Link>
      </div>
    );
  }
}

export default OlvidoClave;

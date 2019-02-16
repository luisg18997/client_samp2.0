import React, { Component } from 'react';
import MenuAdmin from './menuAdmin';
import Authorization from '../redirectPrincipal';

class Admin extends Component {
  constructor(props){
    super(props);
    this.auth = new Authorization();
    this.state = {
      user : {},
      isLoaded : false
    }
  }

async componentWillMount(){
  	if (await this.auth.loggedIn()) {
      const result = await this.auth.ObtainData();
      const user = result.data;
      if(user.ubication.id === 1){
        this.setState({
          user,
          isLoaded: true
        })
      } else {
        alert('usuario no tiene permiso')
        this.auth.redirect(user.ubication.id, this.props)
      }
    } else {
      alert('Session expirada vuelva a ingresar al sistema SAMP');
      this.auth.logout(this.props)
    }
}

  render() {
    if (!this.state.isLoaded) {
			return (<div className="loader"></div>);
		} else {
    return (
       <div style={{'display': 'flex'}}>
        <MenuAdmin />
      </div>

    );
  }
  }
}

export default Admin;

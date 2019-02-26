import React, { Component } from 'react';
import MenuRRHH from './MenuRRHH';
import Authorization from '../redirectPrincipal';
import {Logout} from  '../util/logout.js';

class human_Resources extends Component {
  constructor(){
    super();
    this.auth = new Authorization();
    this.state = {
      user : "",
      isLoaded : false
    }
  }

  async componentWillMount(){
    	if (await this.auth.loggedIn()) {
        const user = await this.auth.ObtainData();
        if(user.data.ubication.id === 5){
          this.setState({
            user
          })
        } else {
          alert('usuario no tiene permiso')
          this.auth.redirect(user.data.ubication.id, this.props)
        }
      } else {
        alert('Session expirada vuelva a ingresar al sistema SAMP');
        this.auth.logout(this.props)
      }
  }

  render() {
    return (
          <div style={{'display': 'flex'}}>
        <MenuRRHH />
         {Logout(this.props)}
      </div>
    );
  }
}

export default human_Resources;

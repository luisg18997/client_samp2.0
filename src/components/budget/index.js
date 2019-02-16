import React, { Component } from 'react';
import MenuBudget from './menuBudget';
import Authorization from '../redirectPrincipal';

class budget extends Component {
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
        if(user.data.ubication.id === 6){
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
        <MenuBudget />
      </div>

    );
  }
}

export default budget;

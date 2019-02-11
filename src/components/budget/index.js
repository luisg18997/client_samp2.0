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
  	if (!this.auth.loggedIn()) {
      this.auth.logout(this.props)
    } else {
      const user = await this.auth.ObtainData();
      this.setState({
        user,
        isLoaded: true
      })
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

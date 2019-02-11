import React, { Component } from 'react';
import MenuSchool from './menuSchool';
import Authorization from '../redirectPrincipal';

class school extends Component {
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
        <MenuSchool />
      </div>
    );
  }
}

export default school;

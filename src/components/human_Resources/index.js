import React, { Component } from 'react';
import MenuRRHH from './MenuRRHH';
import Authorization from '../redirectPrincipal';


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
        <MenuRRHH />
      </div>
    );
  }
}

export default human_Resources;

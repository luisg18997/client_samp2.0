import React, { Component } from 'react';
import MenuAdmin from './menuAdmin';
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

export default budget;

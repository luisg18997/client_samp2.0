import React, { Component} from 'react';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login';

class user extends Component  {
  render() {
    return (
      <div>
      	<Router>
      		<div>
      			<Route exact path="/" component={Login} />
      		</div>
      	</Router>
      </div>
    )
  }
}
export default user;

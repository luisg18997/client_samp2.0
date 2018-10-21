import React, { Component} from 'react';
import Routes from './redirectPrincipal';
import data from './router';

class ContetPrincipal extends Component {
  render() {
    return (
      <div>
      	<Routes />
      	<data />
      </div>
    )
  }

}

export default ContetPrincipal;

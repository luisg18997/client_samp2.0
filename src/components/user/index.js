import react { Component} from 'react';
import  { BrowserRouter as Router, Route } from 'react-router-dom';

import login from './login';
import school from '../school/';
import budget from '../budget/';
import humanResources from '../human_Resources/';

class routerPrincipal extends Component {
  render () {
    return (
      <div>
        <Router>
            <div>
                <Route exact path="/" Component={} />
                <Route path="/" Component={} />
                <Route path="/" Component={} />
                <Route path="/" Component={} />
                <Route path="/" Component={} />
            </div>
        </Router>
      </div>
    )
  }
}

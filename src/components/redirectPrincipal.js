import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class redirect extends Component {
	render() {
		const { t } = this.props;
		return(
			<div>
              <ul className="navbar-nav mr-auto">
              <li className="nav-link" role="button" aria-haspopup="true" aria-expanded="false">
          
              </li>
              <li>
                <Link>
            </Link>
              </li>
              <li>
                <Link>
            </Link>
              </li>
              <li>
                <Link>
            </Link>
              </li>
              </ul>
      </div>
		)
	}
}

export default redirect;
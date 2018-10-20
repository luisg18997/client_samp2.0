import React, { Component } from 'react'


class redirect extends Component {
	render() {
		return(
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
			      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
			        <ul className="navbar-nav mr-auto">
			        <li className="nav-link" role="button" aria-haspopup="true" aria-expanded="false">
			        <Link to="/">
			          {t('Home')}
			        </Link>
			        </li>
			        <li>
			        </li>
			        <li>
			        </li>
			        <li>
			        </li>
			        </ul>
			      </div>
			    </nav>
			</div>
		)
	}
}
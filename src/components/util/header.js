import React, { Component} from 'react';
import { UCV, FHE } from '../../images/components/logos';


class Header extends Component {
  render () {
    return (
      <div className="header" style = {{margin: 10, border: 50}}>
        <header>
              <div>
                <UCV />
              </div>
              <div className= "text-center" style={{ margin: 1, padding: 10}}>
                <h1>Sistema Automatizado del Movimiento de Personal <b>(SAMP)</b></h1>
              </div>
              <div>
                <FHE />
              </div>
        </header>
      </div>
    )
  }
}

export default Header;

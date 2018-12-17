import React, { Component} from 'react';
import { UCV, FHE } from '../../images/components/logos';


class Header extends Component {
  render () {
    return (

      <div className="header">


    <nav className="navbar header-top fixed-top navbar-expand-lg  navbar-dark" style={{backgroundImage: 'linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5)',
'backgroundRepeat': 'no-repeat'}}>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav animate side-nav">


                 <UCV /><div style={{ position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)','fontSize': 'x-large', 'width':'100%'}} > Sistema Automatizado del Movimiento de Personal <b>(SAMP) </b></div>    <FHE /> 





        </ul>



      </div>
    </nav>
  </div>

    )
  }
}

export default Header;

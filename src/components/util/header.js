import React, { Component} from 'react';
import { UCV, FHE } from '../../images/components/logos';


class Header extends Component {
  render () {
    return (
      <div className="header">
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <nav class="navbar header-top fixed-top navbar-expand-lg  navbar-dark" style={{'background-color': 'rgb(110, 166, 243)'}}>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav animate side-nav">
                     <UCV /><h3 style={{ position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)'}} > Sistema Automatizado del Movimiento de Personal <b>(SAMP) </b></h3>    <FHE />
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;

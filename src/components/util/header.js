import React, { Component} from 'react';
import { UCV, FHE } from '../../images/components/logos';


class Header extends Component {
  render () {
    return (

      <div className="header">

<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <nav class="navbar header-top fixed-top navbar-expand-lg  navbar-dark" style={{'background-image': 'linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5)',
'background-repeat': 'no-repeat'}}>
    
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav animate side-nav">
         
      
                 <UCV /><div style={{ position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)','font-size': 'x-large'}} > Sistema Automatizado del Movimiento de Personal <b>(SAMP) </b></div>    <FHE /> 

         


        
        </ul>


     
      </div>
    </nav>
  </div>

    )
  }
}

export default Header;
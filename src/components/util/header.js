import React, { Component} from 'react';
import { fhe } from '../images/faculta_humanidades_educacion.png';
import { ucv } from '../images/ucv.png';
import './style_util.css';


class Header extends Component {
  render () {
    return (
      <div className ='container'>
        <header className="Header">
              <div>
                <img src={ucv} style= {{width : 60, height : 80}} alt='ucv'/>
              </div >
              <div>
                <h1>Sistema Automatizado del Movimiento de Personal <b>(SAMP)</b></h1>
              </div>
              <div>
                <img src={fhe} style= {{width : 60, height : 60, padding :0}} alt='FHE' className="text-right" />
              </div>
        </header>
      </div>
    )
  }
}

export default Header;

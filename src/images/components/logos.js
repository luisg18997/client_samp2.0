import React, {Component} from 'react';
import logo from '../ucv_logo.jpg';
import logo2 from '../faculta_humanidades_educacion.png';

export class UCV extends Component {
  render() {
    return (
      <div style={{ marginLeft: '1%'}}>
        <img src={logo} className="logo_ucv" alt= "ucv" />
      </div>
    )
  }
}

export class FHE extends Component {
  render() {
    return (
      <div style={{ marginLeft: '92%', position: 'absolute' }}>
        <img src={logo2} className="logo_fhe" alt = "fhe"/>
      </div>
    )
  }
}

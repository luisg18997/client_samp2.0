import React, {Component} from 'react';
import logo from '../ucv_logo.jpg';
import logo2 from '../faculta_humanidades_educacion.png';

export class UCV extends Component {
  render() {
    return (
      <div style={{ marginLeft: '-10%'}}>
        <img src={logo} style = {{width : '35%', height : '', padding : 0}}  alt= "ucv" />
      </div>
    )
  }
}

export class FHE extends Component {
  render() {
    return (
      <div style={{ marginLeft: '79%', position: 'absolute' }}>
        <img src={logo2} style = {{width : '90px', height : '100%', padding : 0}}  alt = "fhe"/>
      </div>
    )
  }
}

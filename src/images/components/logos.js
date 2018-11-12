import React, {Component} from 'react';
import logo from '../ucv_logo.jpg';
import logo2 from '../faculta_humanidades_educacion.png';

export class UCV extends Component {
  render() {
    return (
      <div className="text-left" style={{ marginLeft: 10 }}>
        <img src={logo} style = {{width: "30%", height: "40%"}} alt= "ucv" />
      </div>
    )
  }
}

export class FHE extends Component {
  render() {
    return (
      <div className = "text-right" style={{ marginRight: 10 }}>
        <img src={logo2} style= {{width: "60", height: '60', padding : '0'}} alt = "fhe"/>
      </div>
    )
  }
}

import React, {Component} from 'react';
import logo from '../ucv.png';
import logo3 from '../ucv_planilla.png';
import logo2 from '../faculta_humanidades_educacion.png';



export class UCV extends Component {
  render() {
    return (


    <div  style={{ marginLeft: 10 }}>
        <img src={logo} style= {{width: "90px", height: '90px', padding : '0'}} alt= "ucv" />
      </div>
    )
  }
}

export class FHE extends Component {
  render() {
    return (
      <div className = "text-right" style={{ marginLeft: '90%', position: 'absolute' }}>
        <img src={logo2} style= {{width: "90px", height: '90px', padding : '0'}} alt = "fhe"/>
      </div>
    )
  }
}


export class UCV2 extends Component {
  render() {
    return (
      <div  >
        <img src={logo3} style= {{width: "70px", height: '70px', padding : '0'}} alt = "fhe"/>
      </div>
    )
  }
}

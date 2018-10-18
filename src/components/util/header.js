import React, { Component} from 'react';
import { fhe } from '../images/faculta_humanidades_educacion.png';
import { ucv } from '../images/ucv.png';
import './style_util.css';


class Header extends Component {
  render () {
    return (
      <div>
        <header className="Header">
          <table align="center">
          <tbody>
            <tr align="center">
              <td height="25%" width="20%"><img src={ucv} width= '60%' height = '80%' /></td>
              <td><h1>Sistema Automatizado del Movimiento de Personal <b>(SAMP)</b></h1></td>
              <td height="25%" width="20%"><img src={fhe} width= '60%' height = '60%' padding = '0%' /></td>
            </tr>
            </tbody>
          </table>
        </header>
      </div>
    )
  }
}

export default Header

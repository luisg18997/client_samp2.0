import React, { Component } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';



import 'bootstrap/dist/css/bootstrap.min.css';
import './estilo.css';
import { UCV2 } from '../../images/components/logos';
import ReactDOM from 'react-dom';

class PlanillaMovPer extends Component {
    resume;



    exportPDF = () => {
        this.resume.save();
    }



    render() {
        return (
            <div style={{ height: '100%', width: '100%', paddingTop: 40 }}>
                <div style={{ textAlign: 'center', marginBottom: 10 }}><button onClick={this.exportPDF} style={{ margin: 'auto' }}>download</button></div>
                <PDFExport paperSize={'Letter'}
                    fileName="_____.pdf"
                    title=""
                    subject=""
                    keywords=""
                    ref={(r) => this.resume = r}>
                    <div style={{
                        height: 700,
                        width: 612,
                        padding: 'none',
                        backgroundColor: 'white',
                        boxShadow: '5px 5px 5px black',
                        margin: 'auto',
                        overflowX: 'hidden',
                        overflowY: 'hidden',
                        'font-size': '10px'
                    }}>


<table WIDTH="520" height="170"  align="center" cellspacing="1"   >

<tr  >
<td width="100" height="106" style={{'background-color': '#FFFFFF',  'border-width':0}}>

<UCV2 />

</td>

<td height="106" align="center" valign="middle" style={{'background-color': '#FFFFFF',  'border-width':0 }}><p>UNIVERSIDAD CENTRAL DE VENEZUELA
  
  
  
</p>
  <p>Facultad de Humanidades y Educació n</p></td>
<td height="106" style={{'background-color': '#FFFFFF',  'border-width':0 }}>Solicitud de movimiento de personal Nro:  <input type="text" size="6" tyle={{'background-color': '#FFFFFF',  'border-width':0, height:'14px'}}/>



</td>
</tr>

</table>
<table WIDTH="520" height="530" border="1" align="center" cellspacing="1"   id="tab_planilla_mov">

    <tr>
 <td height="22" colspan="3" align="left" valign="top"> Fecha:
        <input type="text" size="15" style={{'background-color': '#FFFFFF',  'border-width':0, height:'14px'}}/></td>
    </tr>
    <tr align="center">
      <td height="53" colspan="2" align="left" valign="top"><p> Departamento:
        <input type="text" size="15" style={{'background-color': '#FFFFFF',  'border-width':0, height:'14px'}}/>
      </p>        <p> Nombres y apellidos:
        <input type="text" style={{'background-color': '#FFFFFF',  'border-width':0, height:'20px'}}/>
      </p></td>
      <td width="182" align="left" valign="top"> <p>Catedra:
  <input type="text" size="15" style={{'background-color': '#FFFFFF',  'border-width':0, height:'14px'}}/>
        </p>
        <p>Cedula:
  <input type="text" size="15" style={{'background-color': '#FFFFFF',  'border-width':0, height:'14px'}}/>
      </p></td>
    </tr>
    <tr align="center">
      <td height="51" colspan="1" align="left" valign="top" nowrap><p>Tipo de movimiento:</p>
        <p>
  <input type="text" size="15" style={{'background-color': '#FFFFFF',  'border-width':0, height:'14px'}}/>
      </p></td>
      <td colspan="1" align="left" valign="top"><p>Dedicació n Actual:
        </p>
        <p>
          <input type="text" size="15" style={{'background-color': '#FFFFFF',  'border-width':0, height:'14px'}}/>
      </p></td><td colspan="1" align="left" valign="top"><p>Dedicación Propuesta:
        </p>
        <p>
  <input type="text" size="15" style={{'background-color': '#FFFFFF',  'border-width':0, height:'14px'}}/>
        </p></td>
    </tr>
    <tr align="center">
      <td width="125" height="51" align="left" valign="top"><p>Sueldo:</p>
        <p>
  <input type="text" size="15" style={{'background-color': '#FFFFFF',  'border-width':0, height:'14px'}}/>
      </p></td>
      <td width="151" align="left" valign="top"><p>Unidad Ejecutora:
        </p>
        <p>
          <input type="text" size="15" style={{'background-color': '#FFFFFF',  'border-width':0, height:'14px'}}/>
      </p></td>
      <td colspan="1" align="left" valign="top"><p><a style={{ 'margin-right' :'20px'}}>Lapso:  </a> <a>categoria:  </a>                    
        
      </p>
        <p>
  <input type="text" size="6" style={{'margin-right': '15px', 'background-color': '#FFFFFF',  'border-width':0, height:'14px'}}/>
          <input type="text" size="6" style={{'background-color': '#FFFFFF',  'border-width':0, height:'14px'}} />
        </p>
  </td>
    </tr>
    
    <tr align="left" >
      <td height="70" colspan="3" valign="top"><p>.Justificación u observaciones:</p>
        <p> Dirección:
  <input type="text" size="40" style={{'background-color': '#FFFFFF',  'border-width':0, height:'14px'}}/>
        </p>
        <p>
          Teléfono:
          <input type="text" size="20" style={{'background-color': '#FFFFFF',  'border-width':0, height:'14px'}}/>
          IDAC:
          <input type="text" size="15" style={{'background-color': '#FFFFFF',  'border-width':0, height:'14px'}}/>
        </p>
        <p>Ingreso:
  <input type="text" value="" size="10" style={{'background-color': '#FFFFFF',  'border-width':0, height:'14px'}}/>
          Tipo de ingreso:
          <input type="text" size="10" style={{'background-color': '#FFFFFF',  'border-width':0, height:'14px'}}/>
        
          Fecha de ingreso:
          <input type="text" size="10" style={{'background-color': '#FFFFFF',  'border-width':0, height:'14px'}}/>
      </p></td>
    </tr>
    <tr align="left">
      <td height="18" colspan="3">Anexos: </td>
    </tr>
 
    <tr align="Left">
      <td height="25" colspan="2" align="left" valign="top" nowrap>Firma del Director (a) o Coordinador(a)</td>
      <td align="left" colspan="1"  valign="top" nowrap>Decano o Coordinador</td>
    </tr>
       <tr align="center">
   <td height="100" colspan="2" align="left" valign="top"><p>Unidad ejecutora:  
     <input type="text" size="15" style={{'background-color': '#FFFFFF',  'border-width':0, height:'14px'}}/>
   </p>
     <p>Código del Programa:
       <input type="text" size="15" style={{'background-color': '#FFFFFF',  'border-width':0, height:'14px'}}/> 
     </p>
     <p>Sueldo:
       <input type="text" size="15" style={{'background-color': '#FFFFFF',  'border-width':0, height:'14px'}}/>
     </p>
     <p>Fecha efectiva:
       <input type="text" size="10" style={{'background-color': '#FFFFFF',  'border-width':0, height:'14px'}}/>
   </p>
     <p>     Firma del jefe de Presupuesto:</p></td>
      <td align="left" height="120" colspan="1"  valign="top" nowrap><p>Observación Departamento</p>
        <p> de presupuesto</p></td>
  </tr>

</table>



                        



                    </div>

                </PDFExport>
            </div>
        );
    }
}

export default PlanillaMovPer;
ReactDOM.render(<PlanillaMovPer />, document.getElementById('root'));
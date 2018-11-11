import React, { Component } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import canvg from 'canvg';
import ReactDOMServer from 'react-dom/server';



class App extends Component {
    resume;

    constructor() {
        super();
        this.iconsToConvert = [
            {
                icon: faGithub,
                alt: 'github icon'
            },
            {
                icon: faMedium,
                alt: 'medium icon'
            }
        ]
        this.canvLoaded = false;
    }

    exportPDF = () => {
        this.resume.save();
    }

    convertSvgToImage = (arr) => {
        let canv = this.refs.canvas;
        if (!this.canvLoaded) {
            this.canvLoaded = true;
            canv.getContext("2d");
            arr.forEach((d, i) => {
                let htmlString = ReactDOMServer.renderToStaticMarkup(
                    <FontAwesomeIcon icon={d.icon} size={"3x"} style={{ color: '#005696', height: '500px', width: '500px' }} />
                );
                canvg(canv, htmlString);
                d.icon = canv.toDataURL("image/png");
            });
            this.setState({});
        }
    }

    componentDidMount() {
        this.convertSvgToImage(this.iconsToConvert);
    }

    render() {
        return (
            <div >
                {!this.canvLoaded && <canvas ref="canvas" style={{ display: 'none' }}>
                </canvas>}
                <div style={{ textAlign: 'center', marginBottom: 10 }}><button onClick={this.exportPDF} style={{ margin: 'auto' }}>Imprimir planilla</button></div>
                <PDFExport paperSize={'Letter'}
                    fileName="_____.pdf"
                    title=""
                    subject=""
                    keywords=""
                    ref={(r) => this.resume = r}>
                    <div style={{
                        height: 792,
                        width: 612,
                        padding: '20px',
                        backgroundColor: 'white',
                        boxShadow: '5px 5px 5px black',
                        margin: 'auto',
                        overflowX: 'hidden',
                        overflowY: 'hidden'
                    }}>

           

                    {this.canvLoaded && this.iconsToConvert.map((iconObject, index) => {
                            return <img src={iconObject.icon} key={'img-' + index} alt={iconObject.alt} style={{ height: 25, width: 25 }} 




                            />
                        })}

                         <table  align="center" id="tab_planilla" border="1" class="table table-striped" >
                <thead>
                <tr align="center">
                    <td>Primer Nombre</td>
                    <td>Primer Apellido</td>
                    <td>Segundo Nombre</td>
                    <td>Segundo Apellido</td>
                </tr>
                </thead>
                <tbody>
                <tr align="center">
                    <td >Nacionalidad</td>
                    <td>Cedula</td>
                    <td>Email</td>
                    <td>Teléfono local</td>
                </tr>
                <tr align="center">
                    <td>Teléfono celular primario</td>
                    <td>Teléfono celular secundario</td>
                    <td>Estado</td>
                    <td>Municipio</td>
                </tr>
                <tr align="center">                    
                    <td>Parroquia</td>
                    <td>Apartamento</td>
                    <td>Facultad</td>
                    <td>Escuela</td>
                </tr>
                <tr align="center">                    
                    <td>Instituto</td>
                    <td>Coordinación</td>
                    <td>Ingreso</td>
                    <td>Tipo de ingreso</td>
                </tr>
                <tr align="center">                    
                    <td>Fecha de ingreso</td>
                    <td>Tipo de movimiento</td>
                    <td>Departamento</td>
                    <td>Catedra</td>                   
                </tr>
                <tr align="center">
                    <td>Unidad Ejecutora</td>
                    <td>IDAC</td>
                    <td>Dedicación Actual</td>
                    <td>Dedicación Propuesta</td>
                </tr>
                <tr align="center">
                    <td>Categoria</td>
                    <td>Sueldo</td>
                    <td>Anexos</td>
                    <td>Motivos</td>
                </tr>
            </tbody>
        </table>

                    </div>
                </PDFExport>
            </div>
        );
    }
}

export default App;

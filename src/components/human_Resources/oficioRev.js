import React, { Component } from 'react';

class OficioRev extends Component {
  constructor(props) {
    super();
    this.state = {

    };
  }

componentWillMount() {
    console.log('this.props: ', this.props);
  }

  render() {
    return (
      <div className="content">
        <h2 align="center"><strong>Planilla Oficio</strong></h2>
        <hr />
        <form className="row justify-content" onSubmit={this.handleSubmit}>
          <div className="form-group col-md-3">
            <label>Primer Nombre</label>
            <label />
          </div>
          <div className="form-group col-md-3">
            <label>Segundo Nombre</label>
            <label />
          </div>
          <div className="form-group col-md-3">
            <label>Primer Apellido</label>
            <label />
          </div>
          <div className="form-group col-md-3">
            <label>Segundo Apellido</label>
            <label />
          </div>
          <div className="form-group col-md-3">
            <label>Cedula</label>
            <label />
          </div>
          <div className="form-group col-md-3">
            <label>IDAC</label>
            <label />
          </div>
          <div className="form-group col-md-3">
            <label>Codigo de Planilla</label>
            <label />
          </div>
          <div className="form-group col-md-3">
            <label>Fecha de Registro</label>
            <label />
          </div>
          <div className="form-group col-md-3">
            <label>Escuela</label>
            <label />
          </div>
          <div className="form-group col-md-3">
            <label>Departamento</label>
            <label />
          </div>
          <div className="form-group col-md-3">
            <label>Catedra</label>
            <label />
          </div>
          <div className="form-group col-md-3">
            <label>Unidad Ejecutora</label>
            <label />
          </div>
          <div className="form-group col-md-3">
            <label>Tipo de Movimiento</label>
            <label />
          </div>
          <div className="form-group col-md-3">
            <label>Dedicacion</label>
            <label />
          </div>
          <div className="form-group col-md-3">
            <label>Fecha de Inicio</label>
            <label />
          </div>
          <div className="form-group col-md-3">
            <label>Fecha de Fin</label>
            <label />
          </div>
        </form>
      </div>
    );
  }
}

export default OficioRev;

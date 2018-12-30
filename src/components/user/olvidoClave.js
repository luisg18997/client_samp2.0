import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OlvidoClave extends Component {
  render() {
    return (
      <div>
        <p> olvido de clave</p>
        <Link to="/"> Volver </Link>
      </div>
    );
  }
}

export default OlvidoClave;

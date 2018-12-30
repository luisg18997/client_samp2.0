import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          backgroundImage: 'linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5)',
          backgroundRepeat: 'no-repeat',
        }}
        className="page-footer "
      >

        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: 'smaller',
        }}
        >
    © Luis González, Denis Osuna, Daniel Dávila, Leonardo Monascal (UNEXCA 2018-2019)
        </div>

      </footer>
    );
  }
}

export default Footer;

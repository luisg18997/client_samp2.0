import React, { Component } from 'react';
import Header from './components/util/header';
import Footer from './components/util/footer';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;

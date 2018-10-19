import React, { Component } from 'react';
import Header from './components/util/header';
import Footer from './components/util/footer';
import './App.css';

class App extends Component {
  render() {
    return (
     <div>
      <div className = 'App-header'>
        <Header />
      </div>
      <div>
      <Footer />
      </div>
      </div>
    );
  }
}

export default App;

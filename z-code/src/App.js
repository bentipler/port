import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ben Tipler: <span>Lead User Experience Designer</span></h1>
        </header>
        <p className="App-intro">
          <span>Hi</span>re me.
        </p>
      </div>
    );
  }
}

export default App;

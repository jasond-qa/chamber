import React, { Component } from 'react';
import './App.css';
import Routing from './module/Routing';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="bg-image" />
          <Routing />
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import Canvas from './components/Canvas';

// APP
class App extends Component {
  render() {
    return (
      <div className="App">
        <Canvas />
      </div>
    );
  }
}

export default App;
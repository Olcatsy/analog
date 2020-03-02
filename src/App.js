import React, { Component } from 'react';
import './App.css';

import Draw from './components/draw/Draw';
import Gallery from './components/gallery/Gallery';



// APP
class App extends Component {
  render() {
    return (
      <div className="App">
        <Draw />
        <Gallery />
      </div>
    );
  }
}

export default App;
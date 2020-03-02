import React, { Component } from 'react';

import Canvas from './Canvas'



class Draw extends Component {
  constructor() {
    super();

    this.state = {
      userDrawing: {},
    }
  }


  render() {
      return (
        <div className="draw">
          <Canvas />
        </div>
      );
  }
}

export default Draw;
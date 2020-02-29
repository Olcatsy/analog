import React, { Component } from 'react';



class Canvas extends Component {
  constructor() {
    super();

    this.state = {
      // keeps track of whether the user is drawing or not
      isDrawing: false,
      // stores the coordinates of the last event
      x: 0,
      y: 0,
    }
  }

  componentDidMount() {
    const canvas = this.refs.canvas;
    // sets up canvas context
    const ctx = canvas.getContext('2d');

    // stroke style
    ctx.strokeStyle = 'black';
    // shape of the stroke essentially & making sure the line is continuous
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    // size of the stroke
    ctx.lineWidth = 5;
  }

  // start drawing
  startDrawing = (e) => {
    console.log('start drawing', e);
    this.setState ({
      isDrawing: true,
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    }, () => {
      console.log(this.state.lastX, this.state.lastY);
    })
  }

  // drawing 
  draw = (e) => {
    console.log('drawing');
    const canvas = this.refs.canvas;
    // sets up canvas context
    const ctx = canvas.getContext('2d');

    if (this.state.isDrawing) {
      // starts drawing a path 
      ctx.beginPath();

      // drawing a line requires two coordinates:
      // start drawing at this coordinate (endpoint of the last event)
      ctx.moveTo(this.state.x, this.state.y);
      // end drawing at this coordinate (current event's coordinate)
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);

      // draws a path
      ctx.stroke();

      // updates last event's coordinates with current coordinates
      this.setState ({
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
      })
    }
  }

  // end drawing
  endDrawing = () => {
    this.setState ({
      isDrawing: false,
    })
  }

  click = () => {
    console.log('click');
  }

  render() {
      return (
        <canvas 
          ref='canvas' 
          width='500' 
          height='500'
          onMouseDown={this.startDrawing} onMouseMove={this.draw} onMouseUp={this.endDrawing} onMouseLeave={this.endDrawing}></canvas>
      );
  }
}

export default Canvas;
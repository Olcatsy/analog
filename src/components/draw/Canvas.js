import React, { Component } from 'react';

import PostButton from './PostButton';



class Canvas extends Component {
  constructor() {
    super();

    this.state = {
      // keeps track of whether the user is drawing or not
      isDrawing: false,
      // stores the coordinates of the last event
      x: 0,
      y: 0,
      // stores the drawing as a blob object
      drawingBlob: {},
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
    this.setState ({
      isDrawing: true,
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    })
  }

  // drawing 
  draw = (e) => {
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

      this.captureDrawing();
    }
  }

  // end drawing
  endDrawing = () => {
    this.setState ({
      isDrawing: false,
    })
  }

  // as the user is drawing,   continuously convert the current drawing into a base64 string (plain text representation of an image) and save it in the component state
  captureDrawing = () => {
    const canvas = this.refs.canvas;

    // convert the path on the canvas into the base64 string
    const blobUrl = canvas.toDataURL();

    // the base64 string is pushed into the component's state
    this.setState({
      drawingBlob: blobUrl,
    })
  }

  render() {
      return (
        <div className="canvasContainer">

          <canvas className="canvas"
          ref='canvas' 
          width='500' 
          height='500'
          onMouseDown={this.startDrawing} onMouseMove={this.draw} onMouseUp={this.endDrawing} onMouseLeave={this.endDrawing}></canvas>
          
          <PostButton userDrawing={this.state.drawingBlob} chosenPrompt={this.props.chosenPrompt}/>
        </div>
        
      );
  }
}

export default Canvas;
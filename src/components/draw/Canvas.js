import React, { Component } from 'react';

import PostButton from './PostButton';
import NewDrawingButton from './NewDrawingButton';
import ClearButton from './ClearButton';



class Canvas extends Component {
  constructor() {
    super();

    this.state = {
      // keeps track of whether the user is drawing or not
      isDrawing: false,
      // stores the coordinates of the last event
      x: 0,
      y: 0,
      // stores the drawing as a base64 string
      drawingStr: "",
    }
  }

  componentDidMount() {
    const canvas = this.refs.canvas;
    // sets up canvas context
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = 500;
    ctx.canvas.height = 500;
    if (window.innerWidth < 500) {
      ctx.canvas.width = window.innerWidth -10;
      ctx.canvas.height = window.innerWidth -10;
    }


    // stroke style
    ctx.strokeStyle = 'black';
    // shape of the stroke essentially & making sure the line is continuous
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    // size of the stroke
    ctx.lineWidth = 10;
  }

  // start drawing
  startDrawing = (e) => {
    e.preventDefault();
    const canvas = this.refs.canvas;
    const r = canvas.getBoundingClientRect(); // gets canvas size and position relative to the viewport
    let x;
    let y;

    // check event type
    if (e.type === "touchstart") {
      
      // gets event coordinates relative to the canvas. clientX is event coordinate relative to the viewport. r.left is canvas' offset relative to the viewport
      x = e.nativeEvent.touches[0].clientX - r.left; 
      y = e.nativeEvent.touches[0].clientY - r.top;
    } else {
      x = e.nativeEvent.offsetX;
      y = e.nativeEvent.offsetY;
    }

    this.setState ({
      isDrawing: true,
      x: x,
      y: y,
    })
  }

  // drawing 
  draw = (e) => {
    e.preventDefault();
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const r = canvas.getBoundingClientRect();
    let x;
    let y;

    if (this.state.isDrawing) {

      // check event type
      if (e.type === "touchmove") {
        x = e.nativeEvent.touches[0].clientX - r.left;
        y = e.nativeEvent.touches[0].clientY - r.top;
      } else {
        x = e.nativeEvent.offsetX;
        y = e.nativeEvent.offsetY;
      }

      // starts drawing a path 
      ctx.beginPath();

      // drawing a line requires two coordinates:
      // start drawing at this coordinate (endpoint of the last event)
      ctx.moveTo(this.state.x, this.state.y);
      // end drawing at this coordinate (current event's coordinate)
      ctx.lineTo(x, y);

      // draws a path
      ctx.stroke();

      // updates last event's coordinates with current coordinates
      this.setState ({
        x: x,
        y: y,
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
    const drawingUrl = canvas.toDataURL();

    // the base64 string is pushed into the component's state
    this.setState({
      drawingStr: drawingUrl,
    })
  }


  // clears the canvas and resets drawing string in the component state
  clear = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.setState ({
      drawingStr: "",
    })
  }

  // clear the canvas and start a new drawing
  newDrawing = () => {
    this.props.randomizePrompts();
    this.clear(); 
  }

  render() {
    return (
      <div className="canvasInnerContainer">

        <canvas className="canvas"
        ref='canvas' 
        onMouseDown={this.startDrawing} onMouseMove={this.draw} onMouseUp={this.endDrawing} onMouseLeave={this.endDrawing} onTouchStart={this.startDrawing} onTouchMove={this.draw} onTouchEnd={this.endDrawing}>
          Your browser does not support canvas element
        </canvas>
        
        <div className="canvasButtons">

          <ClearButton className="canvasButton" clear={this.clear}/>

          <NewDrawingButton className="canvasButton" newDrawing={this.newDrawing}/>
          
          <PostButton className="canvasButton" userDrawing={this.state.drawingStr} chosenPrompt={this.props.chosenPrompt}/>
        </div>
      </div>
    );
  }
}

export default Canvas;
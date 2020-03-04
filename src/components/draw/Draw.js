import React, { Component } from 'react';

import Canvas from './Canvas';



class Draw extends Component {
  constructor() {
    super();

    this.state = {
      userDrawing: {},
      wordPrompts: ["Anger", "Anxiety", 
        "Tranquility", "Depression", "Soft", "Chaos", "Order", "Joy", "Sickness", "Energy", "Death", "Love", "Dream", "Fragility", "Growth", "Loneliness", "Movement", "Shock", "Fatigue", ],
      chosenPrompt: "",
    }
  }

  randomizePrompts = () => {
    // get a random index from the wordPrompts array
    const randomIndex = Math.floor(Math.random() * (this.state.wordPrompts.length));
    
    this.setState({
      chosenPrompt: this.state.wordPrompts[randomIndex],
    })
  }

  componentDidMount() {
    this.randomizePrompts();
  }

  render() {
    return (
      <div className="draw">

        <div className="canvasOuterContainer">
          <p className="prompt">Your prompt is <span>{this.state.chosenPrompt}</span>.</p>
          <Canvas chosenPrompt={this.state.chosenPrompt}/>
        </div>

        <ul className="drawCopy">
          <li>
            <p>Consider your prompt. Try to imagine what the concept feels like to you. If it’s an emotion, try to remember the last time you felt it. What kind of marks and shapes would you use to render it? Straight lines? Squiggles? Tiny dots? How much space would your drawing occupy?</p>
          </li>
          <li>
            <p>Avoid drawing recognizable objects or symbols! We are going for pure abstraction :)</p>
          </li>
          <li>
            <p>Don’t overthink your drawing or try to visualize it beforehand, let your feelings pass through your hands and render themselves on the drawing pad.</p>
          </li>
          <li>
            <p>Take as much time as you need. There’s no right or wrong way to do this, your drawing is unique to you</p>
          </li>
          <li>
            <p>Try not to look at other people’s drawings before you draw, it’s more fun that way!</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Draw;
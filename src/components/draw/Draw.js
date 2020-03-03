import React, { Component } from 'react';

import Canvas from './Canvas';



class Draw extends Component {
  constructor() {
    super();

    this.state = {
      userDrawing: {},
      wordPrompts: ["Anger", "Anxiety", 
        "Tranquility", "Depression", "Soft", "Chaos", "Order", "Joy", "Sickness", "Energy", "Death", "Love", "Dream", "Fragility", "Growth", "Loneliness", "Movement", "Shock", "Fatigue"],
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
          {/* <button onClick={this.props.randomizePrompts}>Get a prompt</button> */}
          <p className="prompt">Your prompt is <span>{this.state.chosenPrompt}</span>.</p>
          <Canvas chosenPrompt={this.props.chosenPrompt}/>
        </div>
      );
  }
}

export default Draw;
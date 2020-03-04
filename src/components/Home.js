import React, { Component } from 'react';



class Home extends Component {
  render() {
    return (
      <div className="homeScreen">
        <div className="homeContainer">
          <p>Many people are put off by visual arts because they think they are bad at it. When we are young, those of us that can draw realistically are considered “gifted”, but the rest internalize the idea that you need “talent” to be able to draw. However, I believe that <span>drawing is just another communication skill</span>, like reading and writing, that anyone can learn, and can be useful no matter what you do in life. </p>

          <p><span>Let’s do a creative exercise!</span>  Forget about drawing realistically, you don’t need that to be able to express yourself and have fun. Instead, you will create <span>analog drawings</span>. You will get a one-word prompt of an abstract idea (e.g. anger, depression, joy) that you have to sketch out without drawing any recognizable objects, only through shapes and lines. You can also see how other people interpreted these concepts in the Gallery! Hope you enjoy the process and find it useful for developing your visual communication skill.</p>

          <p class="smallCopy">(I’ve adapted this exercise from a great book by <a href="https://www.drawright.com/">Betty Edwards</a> called <span>Drawing on the Artist Within</span>  (specifically Chapter 7). I highly recommend it if you want to improve your creative process, or if you want to learn drawing but don’t know where to start)</p>

          <button className="startButton yellowButton" value="draw" onClick={this.props.startDrawing}>Let's draw</button>

      </div>
      </div>
    );
  }
}

export default Home;
import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Draw from './components/draw/Draw';
import Gallery from './components/Gallery';
import Footer from './components/Footer';




// APP
class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: "home",
    }
  }

  // tells the component which page to render (draw or gallery) when nav buttons are clicked
  changePage = (e) => {
    this.setState ({
      currentPage: e.target.value,
    })
  }

  // selects a random prompt for the user to draw
  randomizePrompts = () => {
    // get a random index from the wordPrompts array
    const randomIndex = Math.floor(Math.random() * (this.state.wordPrompts.length));

    this.setState({
      chosenPrompt: this.state.wordPrompts[randomIndex],
    })
  }

  

  render() {
    let pageToDisplay;

    // nav functionality
    if (this.state.currentPage === "home") {
      pageToDisplay = <Home />;
    } else if (this.state.currentPage === "draw") {
      pageToDisplay = <Draw />;
    } else if (this.state.currentPage === "gallery") {
      pageToDisplay = <Gallery />;
    } 


    return (
      <div className="App">

        {/* HEADER */}
        <Header changePage={this.changePage}/>
        {/* END OF HEADER */}


        {/* MAIN */}
        <main>
          <div className="wrapper">
            {pageToDisplay}
          </div>
        </main>
        {/* END OF MAIN */}


        {/* FOOTER */}
        <Footer />
        {/* END OF FOOTER */}
      </div>
    );
  }
}

export default App;
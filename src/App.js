import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import Draw from './components/draw/Draw';
import Gallery from './components/Gallery';
import Footer from './components/Footer';




// APP
class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: 'home',
    }
  }

  // tells the component which page to render (draw or gallery) when nav buttons are clicked
  navChangePage = (e) => {
    this.setState ({
      currentPage: e.target.value,
    })
  }


  render() {
    let pageToDisplay;

    // nav functionality
    if (this.state.currentPage === "home") {
      pageToDisplay = <Home />
    } else if (this.state.currentPage === "draw") {
      pageToDisplay = <Draw />;
    } else if (this.state.currentPage === "gallery") {
      pageToDisplay = <Gallery />;
    } 


    return (
      <div className="App">

        {/* HEADER */}
        <header>
          <div className="wrapper flexParent">

            {/* TITLE */}
            <h1>Metaphor</h1>

            {/* NAV */}
            <nav aria-label="navigation">

              <ul>
                <li> <button className="navButton homeButton" value="home" onClick={this.navChangePage}>Home</button></li>
                <li> <button className="navButton drawButton" value="draw" onClick={this.navChangePage}>Draw</button></li>
                <li> <button className="navButton galleryButton" value="gallery" onClick={this.navChangePage}>Gallery</button></li>
              </ul>

            </nav>
          </div>
        </header>
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
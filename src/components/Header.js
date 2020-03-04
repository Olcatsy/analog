import React, { Component } from 'react';



class Header extends Component {
  render() {
    return (
      <header>
        <div className="wrapper flexParent">

          {/* TITLE */}
          <h1>Analog</h1>

          {/* NAV */}
          <nav aria-label="navigation">

            <ul>
              <li> <button className="navButton homeButton" value="home" onClick={this.props.changePage}>Home</button></li>
              <li> <button className="navButton drawButton" value="draw" onClick={this.props.changePage}>Draw</button></li>
              <li> <button className="navButton galleryButton" value="gallery" onClick={this.props.changePage}>Gallery</button></li>
            </ul>

          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
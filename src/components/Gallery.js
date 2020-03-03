import React, { Component } from 'react';
import firebase from '../firebase';

// retrieve image strings from the database and store it in an array
// loop through the array of image strings, and append an img element to the page, with the strings as their url's

class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      drawings: [],
    }        
  }

  
  componentDidMount() {
    const dbRef = firebase.database().ref();

    // retrieve saved drawings from the database and save them as an array in the component state
    dbRef.on('value', (response) => {
      // fetches data from the database as objects
      const dataFromDb = response.val();

      // stores base64 image strings from the database
      const imgArr = [];

      for (let key in dataFromDb) {
        imgArr.push(dataFromDb[key]);
      }

      this.setState ({
        drawings: imgArr,
      })
    })
  }

  render() {
    return (
      <div className="gallery">
        <div className="galleryGrid">

          {this.state.drawings.map( (item, i) => {
            return (
              <div className="userDrawing">
                <img src={item.imgString} alt={item.prompt} key={i}></img>
                <p>{item.prompt}</p>
              </div>
            )
          })}

        </div>
      </div>
    );
  }
}

export default Gallery;
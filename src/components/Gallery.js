import React, { Component } from 'react';
import firebase from '../firebase';

// retrieve image strings from the database and store it in an array
// loop through the array of image strings, and append an img element to the page, with the strings as their url's

class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      drawings: [],
      isLoading: true,
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
        imgArr.unshift(dataFromDb[key]);
      }

      this.setState ({
        drawings: imgArr,
        isLoading: false,
      })
    })
  }

  render() {
    return (
      <div className="gallery">
        <p>It’s really interesting to compare your analog drawings with the ones done by other people. Do their renditions of the same concept look like yours? You might see some similarities, yet every drawing has its own unique characteristics. Although we all experience roughly the same emotions, the intensity and quality of these emotions is different between individuals. <em>Your drawing makes your emotions visible.</em></p>

        {
          this.state.isLoading
          ? 
          <div className="galleryPreloader"></div>
          : 
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
        }
        
      </div>
    );
  }
}

export default Gallery;
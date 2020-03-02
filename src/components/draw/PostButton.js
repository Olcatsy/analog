import React, { Component } from 'react';
import firebase from '../../firebase';

// takes the drawing blob object from the parent component as a prop
// pushes the blob into the database
// shows a confirmation that the drawing was posted


// DO I NEED A CLASS BASED COMPONENT HERE?
class PostButton extends Component {

  pushToDb = (e) => {
    e.preventDefault();

    // database reference
    const dbRef = firebase.database().ref();

    // push the drawing into the database
    dbRef.push(this.props.userDrawing);

    // display a success message
  }

  render() {
      return (
          <button className="postButton" onClick={this.pushToDb}>Post</button>
      );
  }
}

export default PostButton;
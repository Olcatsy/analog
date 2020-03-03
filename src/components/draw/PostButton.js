import React, { Component } from 'react';
import firebase from '../../firebase';

// takes the drawing blob object from the parent component as a prop
// pushes the blob into the database
// shows a confirmation that the drawing was posted

class PostButton extends Component {

  pushToDb = (e) => {
    e.preventDefault();

    // database reference
    const dbRef = firebase.database().ref();

    // push the drawing into the database
    dbRef.push({
      prompt: this.props.chosenPrompt,
      imgString: this.props.userDrawing,
    });

    // display a success message
  }

  render() {
    console.log("chosen prompt was", this.props.chosenPrompt);
      return (
          <button className="postButton yellowButton" onClick={this.pushToDb}>Post</button>
      );
  }
}

export default PostButton;
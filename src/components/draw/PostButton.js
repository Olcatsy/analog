import React, { Component } from 'react';
import firebase from '../../firebase';

// takes the drawing blob object from the parent component as a prop
// pushes the blob into the database
// shows a confirmation that the drawing was posted

class PostButton extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      modalMessage: "",
    }
  }

  pushToDb = (e) => {
    e.preventDefault();

    // database reference
    const dbRef = firebase.database().ref();

    // if user drew anything, it will get pushed to the database and a success modal will be shown. If not, the modal will prompt the user to draw something
    if (this.props.userDrawing) {
      // push the drawing into the database
      dbRef.push({
        prompt: this.props.chosenPrompt,
        imgString: this.props.userDrawing,
      });

      // display a success message
      this.setState ({
        modalMessage: "Thank you for posting!",
      })
    } else {
      this.setState({
        modalMessage: "Please draw something!",
      })
    }

    // shows the modal
    this.setState({
      showModal: true,
    })

    // will hide the modal after 3s
    setTimeout(() => {
      this.setState({
        showModal: false,
      })
    }, 3000)
  }

  render() {
    return (
      <div className="post">
        <button className="yellowButton canvasButton" onClick={this.pushToDb}>Post</button>

        {
          this.state.showModal 
          ? <div className="postModal">{this.state.modalMessage}</div>
          : null
        }
      </div>
      
    )
  }
}

export default PostButton;
import React from 'react';



const NewDrawingButton = (props) => {
  // clears the canvas and offers a new prompt

  return (
    <button className="yellowButton canvasButton" onClick={props.newDrawing}>New Drawing</button>
  );
}

export default NewDrawingButton;
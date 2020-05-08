import React from 'react';



const ClearButton = (props) => {
  // clears the canvas

  return (
    <button className="yellowButton canvasButton" onClick={props.clear}>Clear</button>
  );
}

export default ClearButton;
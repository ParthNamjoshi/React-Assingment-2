import React from 'react'; 
import { useMousePosition } from './useMousePosition'; 
import './MouseTracker.css'; 

// MouseTracker component tracks and displays the mouse position
const MouseTracker = () => {
  // Using the custom hook to get the current mouse coordinates
  const { x, y } = useMousePosition();

  return (
    <div className="mouse-tracker-container"> 
      <div
        className="mouse-tracker-circle" // Circle element that follows the mouse cursor
        style={{ transform: `translate(${x}px, ${y}px)` }} // Dynamically positions the circle based on mouse coordinates
      ></div>
    </div>
  );
};

export default MouseTracker; 

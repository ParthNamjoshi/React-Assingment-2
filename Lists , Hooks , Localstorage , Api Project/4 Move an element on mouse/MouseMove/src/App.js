import React from "react";
import { useMousePosition } from "./useMousePosition"; 
import MouseTracker from './MouseTracker'; 

const App = () => {
  // Use custom hook to get current mouse position
  const position = useMousePosition();

  return (
    <div>
      {/* Display the current mouse position */}
      {position.x}:{position.y}
      
      {/* Render MouseTracker component */}
      <MouseTracker />
    </div>
  );
};

export default App;

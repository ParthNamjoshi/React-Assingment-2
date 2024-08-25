import { useEffect, useState } from "react"; 

// Custom hook to track the current mouse position
export const useMousePosition = () => {
  // State to store the current mouse position, initialized to { x: 0, y: 0 }
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Event handler to update the position state with the mouse's current coordinates
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    
    // Adding the mousemove event listener to the window object
    window.addEventListener("mousemove", setFromEvent);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Returning the current mouse position
  return position;
};

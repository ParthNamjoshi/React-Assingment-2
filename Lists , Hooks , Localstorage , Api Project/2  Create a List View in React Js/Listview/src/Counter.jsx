import React from 'react';

// Functional component to render each fruit item
function Fruits(props) {
    return <li>{props.name}</li>; // Renders a list item with the fruit name
}

// Main Counter component that displays a list of fruits
function Counter() {
    // Array of fruits to be rendered
    const fruits = ["Mango", "Banana", "Apple", "Orange"];

    return (
      <div className="container p-5 pt-5 align-content-center my-5"> {/* Container div with Bootstrap classes for styling */}
        <div>
          <h1 className="text-white display-1">React way to render a list.</h1> 
          <ul> 
            {/* Mapping over the fruits array to render each fruit */}
            {fruits.map((fruit, index) => (
              <Fruits key={index} name={fruit} /> // Using the Fruits component for each fruit, with a unique key for each item
            ))}
          </ul>
        </div>
      </div>
    );
}

export default Counter; 

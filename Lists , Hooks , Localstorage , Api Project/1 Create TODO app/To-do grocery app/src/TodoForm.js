import React, { useState } from 'react';

// Defines the TodoForm component
function TodoForm({ addTodo, clearTodos }) {
    // Initialize state for the input field with an empty string
    const [value, setValue] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior (page refresh)
        if (value) { // Only add the todo if the input field is not empty
            addTodo(value); // Call the addTodo function passed as a prop with the current input value
            setValue(""); // Clear the input field after adding the todo
        }
    };

    return (
        <div>
            {/* Form for adding a new todo */}
            <form onSubmit={handleSubmit} className="TodoForm">
                <input
                    type="text" // Input field for the new todo task
                    value={value} // Bind input field value to state
                    onChange={(e) => setValue(e.target.value)} // Update state with input value on change
                    className="todo-input" // CSS class for styling the input field
                    placeholder="Add Something To Your List" // Placeholder text when the input is empty
                />
                <button type="submit" className="todo-btn">Add</button> {/* Button to submit the form */}
            </form>
            {/* Button to clear all todos */}
            <button onClick={clearTodos} className="clearbtn">Delete List</button>
        </div>
    );
}


export default TodoForm;

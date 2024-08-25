import React, { useState } from 'react';


function EditTodoForm({ editTodo, task }) {
  // Initialize state with the current task value
  const [value, setValue] = useState(task.task);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    editTodo(value, task.id); // Call the editTodo function passed as a prop with the updated value and task ID
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm"> {/* Form element with submit handler */}
      <input
        type="text" // Input type text for editing the task
        value={value} // Bind the input value to the state variable
        onChange={(e) => setValue(e.target.value)} // Update state on input change
        className="todo-input" // Apply CSS class for styling
        placeholder="Update Task..." // Placeholder text in the input field
      />
      <button type="submit" className="todo-btn">Add Task</button> {/* Submit button to trigger form submission */}
    </form>
  );
}


export default EditTodoForm;

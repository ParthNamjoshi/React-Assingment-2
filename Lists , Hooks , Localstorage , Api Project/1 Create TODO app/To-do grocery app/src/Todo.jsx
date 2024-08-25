import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

// Defines the Todo component
function Todo({ task, deleteTodo, editTodo, toggleComplete }) {
  return (
    <div className='inputs'> {/* Container for the todo item and its icons */}
      <div className="Todo"> {/* Wrapper for the todo item */}
        <p
          className={`${task.completed ? "completed" : "incompleted"}`} // Apply class based on task completion status
          onClick={() => toggleComplete(task.id)} // Toggle task completion status when clicked
        >
          {task.task} {/* Display the task text */}
        </p>
      </div>

      <div className='icons'> {/* Container for action icons (edit and delete) */}
        {/* Delete icon */}
        <span>
          <FontAwesomeIcon
            className="delete-icon"
            icon={faTrashCan} // Set the icon to trash-can
            size="xl"
            onClick={() => deleteTodo(task.id)} // Call deleteTodo function when clicked
          />
        </span>
        &nbsp;&nbsp;&nbsp; {/* Spacing between icons */}

        {/* Edit icon */}
        <span>
          <FontAwesomeIcon
            className="edit-icon"
            icon={faPenToSquare} // Set the icon to pen-to-square
            size="xl"
            onClick={() => editTodo(task.id)} // Call editTodo function when clicked
          />
        </span>
      </div>
    </div>
  );
}


export default Todo;

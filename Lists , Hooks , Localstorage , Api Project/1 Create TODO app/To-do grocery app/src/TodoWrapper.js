import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from './EditTodoForm';
import Todo from './Todo';

// Define the TodoWrapper component
function TodoWrapper() {
    // State to hold the list of todos
    const [todos, setTodos] = useState([]);

    // Function to add a new todo item
    const addTodo = (todo) => {
        setTodos([
            ...todos, // Spread the current todos
            { id: uuidv4(), task: todo, completed: false, isEditing: false }, // Add new todo item with a unique ID
        ]);
    };

    // Function to delete a todo item by its ID
    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

    // Function to toggle the completion status of a todo item
    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo // Toggle the completed status
            )
        );
    };

    // Function to enable or disable editing mode for a todo item
    const editTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo // Toggle the isEditing status
            )
        );
    };

    // Function to update the task of a todo item and toggle editing mode
    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo // Update the task and toggle editing mode
            )
        );
    };

    // Function to clear all todo items
    const clearTodos = () => {
        setTodos([]); // Set todos to an empty array
    };

    // Render the TodoWrapper component
    return (
        <div className="TodoWrapper">
            <h1>Grocery Shopping</h1>

            {/* Render todo items or edit form based on the isEditing state */}
            {todos.map((todo) => todo.isEditing ? (
                <EditTodoForm
                    key={todo.id} // Unique key for each EditTodoForm
                    editTodo={editTask} // Function to update the task
                    task={todo} // Current todo item being edited
                />
            ) : (
                <Todo
                    key={todo.id} // Unique key for each Todo component
                    task={todo} // Current todo item
                    deleteTodo={deleteTodo} // Function to delete the todo item
                    editTodo={editTodo} // Function to enable editing mode
                    toggleComplete={toggleComplete} // Function to toggle completion status
                />
            ))}

            {/* Pass functions to TodoForm for adding todos and clearing the list */}
            <TodoForm
                addTodo={addTodo}
                clearTodos={clearTodos}
            />
        </div>
    );
}


export default TodoWrapper;

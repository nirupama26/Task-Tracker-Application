import React, { useState } from "react";
import { createTask } from "./services/taskService";

const AddTask = ({ onTaskAdded }) => {
  const [task, setTask] = useState({ title: "", description: "", completed: false });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask(task);
      setTask({ title: "", description: "", completed: false });
      onTaskAdded(); // Refresh task list
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Task Title" value={task.title} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Task Description" value={task.description} onChange={handleChange} required />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;


import React, { useEffect, useState } from "react";
import { getTasks, addTask, updateTask, deleteTask } from "./api";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState("Work");
  const [sortBy, setSortBy] = useState("default");
  const [dueDate, setDueDate] = useState(""); // Due Date State

  // Load tasks on startup and when sorting changes
  useEffect(() => {
    fetchTasks();
  }, [sortBy]);

  // Fetch tasks from backend and apply sorting
  const fetchTasks = async () => {
    try {
      const tasksFromAPI = await getTasks();

      let sortedTasks = [...tasksFromAPI];
      if (sortBy === "category") {
        sortedTasks.sort((a, b) => a.category.localeCompare(b.category));
      } else if (sortBy === "completed") {
        sortedTasks.sort((a, b) => a.completed - b.completed);
      } else if (sortBy === "dueDate") {
        sortedTasks.sort((a, b) => new Date(a.dueDate || "9999-12-31") - new Date(b.dueDate || "9999-12-31"));
      }

      setTasks(sortedTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Add new task
  const handleAddTask = async () => {
    if (!newTask.trim()) return; // Prevent empty tasks
    const task = {
      title: newTask,
      description: `(${category} Task)`,
      category: category,
      dueDate: dueDate || new Date().toISOString().split("T")[0], // Default to today's date
      completed: false,
    };
    await addTask(task);
    setNewTask("");
    setDueDate("");
    fetchTasks();
  };

  // Delete a task
  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  // Toggle task completion
  const handleToggleComplete = async (id, completed) => {
    await updateTask(id, { completed: !completed });
    fetchTasks();
  };

  // Calculate progress
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="app-container">
      <div className="task-card">
        <h1>Task Tracker</h1>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}>
            {progress}% Completed
          </div>
        </div>

        {/* Task Input Section */}
        <div className="task-input">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Urgent">Urgent</option>
          </select>
          <button onClick={handleAddTask} className="add-task-btn">Add Task</button>
        </div>

        {/* Sorting Section */}
        <div className="sort-section">
          <label>Sort By: </label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">Default</option>
            <option value="category">Category</option>
            <option value="completed">Completion Status</option>
            <option value="dueDate">Due Date</option>
          </select>
        </div>

        {/* Task List */}
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
              <span>{task.title} - {task.description} (Due: {task.dueDate || "N/A"})</span>
              <button className="complete-btn" onClick={() => handleToggleComplete(task.id, task.completed)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button className="delete-btn" onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

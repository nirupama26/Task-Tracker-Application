# Task Tracker Application

## Overview
The **Task Tracker Application** is an advanced and feature-rich project designed to help users organize and manage their tasks efficiently. This application allows users to:
- Add tasks.
- Prioritize them (High, Medium, Low).
- Set deadlines.
- Mark tasks as completed.
- Filter or search tasks for better task management.

This project showcases strong frontend development skills and serves as a valuable addition to any portfolio.

---

## Features
### Task Management:
- Add tasks with a name, priority, and due date.
- Mark tasks as completed or incomplete.
- Delete tasks.

### Sorting:
- Automatically sorts tasks by priority (High > Medium > Low) and due date (earliest first).

### Search & Filter:
- Search tasks by name.
- Filter tasks by status: All, Completed, or Incomplete.

### Visual Enhancements:
- **High Priority**: Displayed in red.
- **Medium Priority**: Displayed in orange.
- **Low Priority**: Displayed in green.

---

## Tech Stack
- **Frontend**: React.js
- **Backend** (future plans): Node.js with Express.js or Firebase for authentication and data persistence.
- **Database** (future plans): MongoDB or SQL-based databases like PostgreSQL.

---

## File Structure
```plaintext
frontend/
├── public/              # Static files
├── src/                 # React components
│   ├── components/      # All reusable components
│   │   ├── AddTask.js   # Component to add tasks
│   │   ├── Header.js    # Header of the application
│   │   └── TaskList.js  # Displays the list of tasks
│   └── App.js           # Main application logic
├── .gitignore           # Files and folders to ignore in git
├── package.json         # npm dependencies and scripts
├── README.md            # Documentation of the project

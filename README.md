Task Tracker Application

Overview
The Task Tracker Application is an advanced and feature-rich project designed to help users organize and manage their tasks efficiently. This application allows users to add tasks, prioritize them, set deadlines, mark tasks as completed, and filter or search tasks for better task management. The application is built using modern web development technologies and showcases strong frontend development skills, making it an excellent addition to any portfolio.

Features
Task Management:
Add tasks with a name, priority (High, Medium, Low), and a due date.
Mark tasks as completed or incomplete.
Delete tasks.
Sorting:
Tasks are automatically sorted by priority (High > Medium > Low) and due date (earliest first).
Search & Filter:
Search tasks by name.
Filter tasks by status: All, Completed, or Incomplete.
Visual Enhancements:
Color-coded priorities:
High: Red
Medium: Orange
Low: Green
Tech Stack
Frontend: React.js
Styling: CSS
Future Plans for Backend: Node.js with Express.js and MongoDB/Firebase for user authentication and data persistence.
Installation and Setup
To run the project locally on your machine, follow these steps:

Prerequisites
Install Node.js (includes npm).
Ensure you have git installed.
Steps to Run Locally
Clone the Repository:

bash
Copy code
git clone https://github.com/nirupama26/Task-Tracker-Application.git
cd Task-Tracker-Application/frontend
Install Dependencies:

bash
Copy code
npm install
Start the Application:

bash
Copy code
npm start
Open http://localhost:3000 in your browser to view the application.

How to Use
Add Tasks:

Enter a task name in the input field.
Select the priority (High, Medium, Low) from the dropdown.
Pick a due date using the date picker.
Click "Add Task" to add it to the list.
Manage Tasks:

Toggle Completion: Click the task name to mark it as completed or incomplete.
Delete Tasks: Click the red "Delete" button next to a task to remove it.
Search and Filter:

Use the search bar to find tasks by name.
Use the dropdown filter to show All tasks, Completed tasks, or Incomplete tasks.
Task Sorting:

Tasks are sorted by priority and due date automatically.
File Structure
Here’s a breakdown of the project directory:

php
Copy code
frontend/
├── public/               # Static files
├── src/                  # React components
│   ├── components/       # All reusable components
│   │   ├── AddTask.js    # Component to add tasks
│   │   ├── Header.js     # Header of the application
│   │   ├── TaskList.js   # Displays the list of tasks
│   └── App.js            # Main application logic
├── .gitignore            # Files and folders to ignore in git
├── package.json          # npm dependencies and scripts
└── README.md             # Documentation of the project
Available Scripts
In the project directory, you can run the following scripts:

Start the Development Server
bash
Copy code
npm start
Runs the app in the development mode at http://localhost:3000. The app reloads automatically when changes are saved.

Build the App for Production
bash
Copy code
npm run build
Builds the app for production, creating a build/ directory.

Future Enhancements
Here are some features planned for the next version:

Backend Integration:
Store tasks in a database using MongoDB or Firebase.
Add user authentication for secure access.
Notifications:
Add reminders for tasks nearing their deadlines.
Advanced Task Features:
Add categories or tags for tasks.
Calendar view for visualizing tasks by date.
Enhanced UI/UX:
Improve styling using frameworks like Material-UI or Tailwind CSS.
PWA Support:
Make the app a Progressive Web App for offline use.
License
This project is licensed under the MIT License - see the LICENSE file for details.

About the Developer
This project was created as part of a portfolio showcasing advanced web development skills. Developed by Nirupama Patra, a Master’s graduate in Advanced Computer Science from Cardiff University, with a passion for creating dynamic and efficient web applications.

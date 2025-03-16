# Task Tracker Application 🚀

This is a **Task Tracker Application** built using:
- **Frontend:** React.js
- **Backend:** Spring Boot (Java)
- **Database:** PostgreSQL
- **Deployment:** Render (or Future Plan: AWS/Heroku)

## 📌 Features
- Add, Edit, Delete Tasks
- Sort Tasks by **Category, Due Date, and Completion Status**
- Task Progress Bar to Track Completion
- Persistent Task Storage in Database

## 📂 Project Structure
```
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable Components
│   │   ├── App.js         # Main App Logic
│   │   ├── index.js       # React Entry Point
│   ├── package.json       # Dependencies & Scripts
│   ├── public/            # Static Files
│
├── backend/
│   ├── src/main/java/com/tasktracker/
│   │   ├── controller/    # REST API Controllers
│   │   ├── repository/    # Database Layer
│   │   ├── service/       # Business Logic
│   │   ├── TaskApplication.java  # Main Entry Point
│   ├── pom.xml            # Dependencies (Spring Boot)
│
├── README.md              # Documentation
├── .gitignore             # Ignored Files
├── LICENSE                # Open-source License
```

## 🚀 How to Run Locally
### **Frontend**
```sh
cd frontend
npm install
npm start
```
### **Backend**
```sh
cd backend
mvn spring-boot:run
```

## 🌍 Deployment Steps (Render)
1. Push your code to GitHub
2. Connect GitHub Repository to Render
3. Select **Web Service** → Choose `Dockerfile` or Manual Build
4. Deploy!

---

## 📤 Uploading to GitHub
Follow these steps:

### 1️⃣ **Navigate to Project Folder in Terminal**
```sh
cd path/to/your/project
```

### 2️⃣ **Initialize Git (If Not Initialized)**
```sh
git init
```

### 3️⃣ **Add Remote GitHub Repository**
```sh
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/Task-Tracker-Application.git
```

### 4️⃣ **Add and Commit Files**
```sh
git add .
git commit -m "Initial commit - Task Tracker Application"
```

### 5️⃣ **Push to GitHub**
```sh
git push -u origin main
```

Your project is now live on GitHub! 🎉🚀

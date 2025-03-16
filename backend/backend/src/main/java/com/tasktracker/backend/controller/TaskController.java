package com.tasktracker.backend.controller;

import com.tasktracker.backend.model.Task;
import com.tasktracker.backend.repository.TaskRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000") // Enable CORS for frontend
@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskRepository taskRepository;

    public TaskController(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    // ✅ Get all tasks
    @GetMapping
    public ResponseEntity<List<Task>> getAllTasks() {
        List<Task> tasks = taskRepository.findAll();
        return ResponseEntity.ok(tasks);
    }

    // ✅ Create a new task (Prevents duplicate titles)
    @PostMapping
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        Optional<Task> existingTask = taskRepository.findByTitle(task.getTitle());

        if (existingTask.isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null); // Prevent duplicate tasks
        }

        // ✅ Ensure task has a due date (if not provided, set to null)
        if (task.getDueDate() == null || task.getDueDate().isEmpty()) {
            task.setDueDate(null); // Prevents storing invalid due dates
        }

        Task savedTask = taskRepository.save(task);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTask);
    }

    // ✅ Update a task (Allows toggling completed status and due date)
    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task taskDetails) {
        Optional<Task> optionalTask = taskRepository.findById(id);

        if (optionalTask.isPresent()) {
            Task task = optionalTask.get();

            // ✅ Update only fields that are provided (avoid overwriting unnecessary fields)
            if (taskDetails.getCompleted() != null) {
                task.setCompleted(taskDetails.getCompleted());
            }

            if (taskDetails.getTitle() != null && !taskDetails.getTitle().isEmpty()) {
                task.setTitle(taskDetails.getTitle());
            }

            if (taskDetails.getDescription() != null && !taskDetails.getDescription().isEmpty()) {
                task.setDescription(taskDetails.getDescription());
            }

            if (taskDetails.getDueDate() != null && !taskDetails.getDueDate().isEmpty()) {
                task.setDueDate(taskDetails.getDueDate());
            }

            if (taskDetails.getCategory() != null && !taskDetails.getCategory().isEmpty()) {
                task.setCategory(taskDetails.getCategory());
            }

            Task updatedTask = taskRepository.save(task);
            return ResponseEntity.ok(updatedTask);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // ✅ Delete a task
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        if (taskRepository.existsById(id)) {
            taskRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

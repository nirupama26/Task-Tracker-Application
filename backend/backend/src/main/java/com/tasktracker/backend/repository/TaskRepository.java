package com.tasktracker.backend.repository;

import com.tasktracker.backend.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    Optional<Task> findByTitle(String title);

    // ✅ Find tasks by category (Optional for sorting/filtering)
    List<Task> findByCategory(String category);

    // ✅ Find tasks by completion status
    List<Task> findByCompleted(Boolean completed);
}

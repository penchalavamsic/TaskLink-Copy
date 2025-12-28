package com.tasklink.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.tasklink.backend.model.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    // additional query methods (if needed) go here
}
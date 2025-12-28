package com.tasklink.backend.service;

import com.tasklink.backend.model.Task;

import java.util.List;
import java.util.Optional;

public interface TaskService {
    List<Task> findAll();
    Optional<Task> findById(Long id);
    Task create(Task task);
    Task update(Long id, Task task);
    void deleteById(Long id);
}

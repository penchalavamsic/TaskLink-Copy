package com.tasklink.backend.service;

import com.tasklink.backend.model.Worker;

import java.util.List;
import java.util.Optional;

public interface WorkerService {
    List<Worker> findAll();
    Optional<Worker> findById(Long id);
    Worker create(Worker worker);
    Worker update(Long id, Worker worker);
    void deleteById(Long id);
}

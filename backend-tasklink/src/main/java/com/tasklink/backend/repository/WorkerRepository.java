package com.tasklink.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.tasklink.backend.model.Worker;

@Repository
public interface WorkerRepository extends JpaRepository<Worker, Long> {
    // additional query methods (if needed) go here
}
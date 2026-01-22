package com.tasklink.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.tasklink.backend.model.Task;
import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByClientId(Long clientId);

    long countByClientId(Long clientId);

    long countByClientIdAndStatus(Long clientId, String status);

    @Query("SELECT SUM(t.budget) FROM Task t WHERE t.clientId = :clientId AND t.status = 'COMPLETED'")
    Double sumSpentByClientId(@org.springframework.data.repository.query.Param("clientId") Long clientId);

    @Query(value = "SELECT id FROM categories WHERE name = :name", nativeQuery = true)
    Integer findCategoryIdByName(@org.springframework.data.repository.query.Param("name") String name);

    @org.springframework.data.jpa.repository.Modifying
    @Query(value = "INSERT INTO categories (name) VALUES (:name)", nativeQuery = true)
    void createCategory(@org.springframework.data.repository.query.Param("name") String name);

    long countByWorkerIdAndStatus(Long workerId, String status);

    @Query("SELECT SUM(t.budget) FROM Task t WHERE t.workerId = :workerId AND t.status = 'COMPLETED'")
    Double sumEarningsByWorkerId(@org.springframework.data.repository.query.Param("workerId") Long workerId);

    List<Task> findByWorkerId(Long workerId);

    @Query(value = "SELECT name FROM categories WHERE id = :id", nativeQuery = true)
    String findCategoryNameById(@org.springframework.data.repository.query.Param("id") Integer id);

    long countByStatus(String status);
}
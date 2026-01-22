package com.tasklink.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "bids")
@Data
public class Bid {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "task_id")
    private Long taskId;

    @Column(name = "worker_id")
    private Long workerId;

    private Double amount;

    @Column(columnDefinition = "TEXT")
    private String proposal;

    private String status; // PENDING, ACCEPTED, REJECTED

    @Column(name = "created_at")
    private java.time.LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = java.time.LocalDateTime.now();
        if (status == null) {
            status = "PENDING";
        }
    }
}
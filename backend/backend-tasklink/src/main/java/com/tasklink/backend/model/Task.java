package com.tasklink.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "tasks")
@Data
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "category_id")
    private Integer categoryId;

    @Transient
    @com.fasterxml.jackson.annotation.JsonProperty("category")
    private String categoryInput;

    @Transient
    private String clientName;

    @Transient
    private String workerName;

    @Transient
    private String clientAddress;

    @Transient
    private String clientPhone;

    private Double budget;
    private LocalDate deadline;

    @Column(name = "client_id")
    private Long clientId;

    @Column(name = "worker_id")
    private Long workerId;

    private String status;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        if (status == null) {
            status = "OPEN";
        }
    }
}
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

    // other fields skipped for build fix
}
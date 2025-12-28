package com.tasklink.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;
import java.math.BigDecimal;

@Entity
@Table(name = "worker_profiles")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Worker {

    @Id
    @Column(name = "user_id")
    private Long id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "profession_title")
    private String professionTitle;

    private String bio;

    @Column(name = "total_earnings")
    private BigDecimal totalEarnings;

    @Column(name = "average_rating")
    private BigDecimal averageRating;

    // enum for verification_status omitted for brevity, mapping as string if needed
    // or skipped
    // @Enumerated(EnumType.STRING)
    // private VerificationStatus verificationStatus;
}
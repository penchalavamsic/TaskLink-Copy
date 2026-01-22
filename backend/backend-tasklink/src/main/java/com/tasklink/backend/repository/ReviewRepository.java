package com.tasklink.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.tasklink.backend.model.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    // custom review queries can be added here
}

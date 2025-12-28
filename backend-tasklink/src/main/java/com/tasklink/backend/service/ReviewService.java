package com.tasklink.backend.service;

import com.tasklink.backend.model.Review;

import java.util.List;
import java.util.Optional;

public interface ReviewService {
    List<Review> findAll();
    Optional<Review> findById(Long id);
    Review create(Review review);
    Review update(Long id, Review review);
    void deleteById(Long id);
}

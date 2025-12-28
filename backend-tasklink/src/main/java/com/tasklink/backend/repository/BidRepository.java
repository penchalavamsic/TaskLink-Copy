package com.tasklink.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.tasklink.backend.model.Bid;

@Repository
public interface BidRepository extends JpaRepository<Bid, Long> {
    // custom bid queries can be added here
}

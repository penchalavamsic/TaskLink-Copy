package com.tasklink.backend.service;

import com.tasklink.backend.model.Bid;

import java.util.List;
import java.util.Optional;

public interface BidService {
    List<Bid> findAll();
    Optional<Bid> findById(Long id);
    Bid create(Bid bid);
    Bid update(Long id, Bid bid);
    void deleteById(Long id);
}

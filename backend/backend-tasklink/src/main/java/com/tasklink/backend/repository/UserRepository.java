package com.tasklink.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.tasklink.backend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    java.util.Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

    long countByRole(com.tasklink.backend.model.Role role);

    java.util.List<User> findTop5ByOrderByIdDesc();
}
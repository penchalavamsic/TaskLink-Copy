package com.tasklink.backend.service;

import com.tasklink.backend.model.User;
import com.tasklink.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User updateUser(Long id, User updatedUser) {
        return userRepository.findById(id).map(user -> {
            if (updatedUser.getFirstName() != null)
                user.setFirstName(updatedUser.getFirstName());
            if (updatedUser.getLastName() != null)
                user.setLastName(updatedUser.getLastName());
            if (updatedUser.getPhone() != null)
                user.setPhone(updatedUser.getPhone());
            if (updatedUser.getAddress() != null)
                user.setAddress(updatedUser.getAddress());
            if (updatedUser.getBio() != null)
                user.setBio(updatedUser.getBio());
            if (updatedUser.getProfilePictureUrl() != null)
                user.setProfilePictureUrl(updatedUser.getProfilePictureUrl());
            // Intentionally skipping email update for security/complexity reasons in this
            // step
            // user.setEmail(updatedUser.getEmail());
            return userRepository.save(user);
        }).orElseThrow(() -> new RuntimeException("User not found with id " + id));
    }
}

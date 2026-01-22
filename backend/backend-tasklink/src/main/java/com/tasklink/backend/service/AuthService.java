package com.tasklink.backend.service;

import com.tasklink.backend.dto.LoginRequest;
import com.tasklink.backend.dto.SignupRequest;
import com.tasklink.backend.dto.AuthResponse;
import com.tasklink.backend.model.Role;
import com.tasklink.backend.model.User;
import com.tasklink.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public void registerUser(SignupRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already in use");
        }

        User user = new User();
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword()); // Storing plain text as requested for now
        user.setAddress(request.getAddress());

        // Map role
        if ("Worker".equalsIgnoreCase(request.getRole())) {
            user.setRole(Role.WORKER);
        } else {
            user.setRole(Role.CLIENT); // Default to CLIENT (User)
        }

        userRepository.save(user);
    }

    public AuthResponse login(LoginRequest request) {
        // Default Admin Login
        if ("admin@gmail.com".equals(request.getEmail()) && "Admin@123".equals(request.getPassword())) {
            return AuthResponse.builder()
                    .userId(0L) // identifying admin with 0
                    .email("admin@gmail.com")
                    .firstName("Super")
                    .lastName("Admin")
                    .role("Admin")
                    .build();
        }

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        // Map role back to frontend string
        String roleStr = "User";
        if (user.getRole() == Role.WORKER) {
            roleStr = "Worker";
        } else if (user.getRole() == Role.ADMIN) {
            roleStr = "Admin";
        }

        return AuthResponse.builder()
                .userId(user.getId())
                .email(user.getEmail())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .role(roleStr)
                .build();
    }
}

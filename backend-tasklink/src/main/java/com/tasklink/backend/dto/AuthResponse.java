package com.tasklink.backend.dto;

import lombok.Data;
import lombok.Builder;

@Data
@Builder
public class AuthResponse {
    private Long id;
    private String email;
    private String role; // "User", "Worker", "Admin"
    private String firstName;
    private String lastName;
}

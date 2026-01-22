package com.tasklink.backend.controller.user;

import com.tasklink.backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private TaskService taskService;

    @Autowired
    private com.tasklink.backend.service.UserService userService;

    @GetMapping("/{userId}/dashboard")
    public ResponseEntity<Map<String, Object>> getDashboardStats(@PathVariable Long userId) {
        // Fetch stats from TaskService (total tasks, in-progress, etc.)
        Map<String, Object> stats = taskService.getDashboardStats(userId);
        return ResponseEntity.ok(stats);
    }

    @GetMapping("/{userId}/profile")
    public ResponseEntity<?> getUserProfile(@PathVariable Long userId) {
        return userService.getUserById(userId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/profile/by-email")
    public ResponseEntity<?> getUserProfileByEmail(@RequestParam String email) {
        return userService.getUserByEmail(email)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{userId}/profile")
    public ResponseEntity<?> updateUserProfile(@PathVariable Long userId,
            @RequestBody com.tasklink.backend.model.User user) {
        try {
            com.tasklink.backend.model.User updated = userService.updateUser(userId, user);
            return ResponseEntity.ok(updated);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}

package com.tasklink.backend.controller.worker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.tasklink.backend.service.WorkerService;

@RestController
@RequestMapping("/api/worker")
@org.springframework.web.bind.annotation.CrossOrigin(origins = "http://localhost:5173")
public class WorkerController {

    @Autowired
    private WorkerService workerService;

    @GetMapping("/{id}/dashboard-stats")
    public ResponseEntity<?> getDashboardStats(@PathVariable Long id) {
        return ResponseEntity.ok(workerService.getDashboardStats(id));
    }

    @GetMapping("/{id}/profile")
    public ResponseEntity<?> getProfile(@PathVariable Long id) {
        return ResponseEntity.ok(workerService.getProfile(id));
    }

    @org.springframework.web.bind.annotation.PutMapping("/{id}/profile")
    public ResponseEntity<?> updateProfile(@PathVariable Long id,
            @org.springframework.web.bind.annotation.RequestBody com.tasklink.backend.model.Worker worker) {
        try {
            return ResponseEntity.ok(workerService.update(id, worker));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error updating profile: " + e.getMessage());
        }
    }
}

package com.tasklink.backend.service;

import com.tasklink.backend.model.Worker;
import com.tasklink.backend.repository.BidRepository;
import com.tasklink.backend.repository.TaskRepository;
import com.tasklink.backend.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class WorkerService {

    @Autowired
    private WorkerRepository workerRepository;

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private BidRepository bidRepository;

    @Autowired
    private com.tasklink.backend.repository.UserRepository userRepository;

    public List<Worker> findAll() {
        return workerRepository.findAll();
    }

    public Optional<Worker> findById(Long id) {
        return workerRepository.findById(id);
    }

    public Worker create(Worker worker) {
        return workerRepository.save(worker);
    }

    @org.springframework.transaction.annotation.Transactional
    public Worker update(Long id, Worker workerInput) {
        // 1. Fetch existing User
        com.tasklink.backend.model.User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // 2. Update User Fields (Name, Phone, Address) if provided in input
        if (workerInput.getUser() != null) {
            com.tasklink.backend.model.User inputUser = workerInput.getUser();
            if (inputUser.getFirstName() != null)
                user.setFirstName(inputUser.getFirstName());
            if (inputUser.getLastName() != null)
                user.setLastName(inputUser.getLastName());
            if (inputUser.getPhone() != null)
                user.setPhone(inputUser.getPhone());
            if (inputUser.getAddress() != null)
                user.setAddress(inputUser.getAddress());
            // ALSO update User bio if provided in the nested user object, to satisfy user
            // expectation
            // effectively syncing them if edited here.
            if (inputUser.getBio() != null)
                user.setBio(inputUser.getBio());

            // Note: Email is intentionally skipped for security.
            userRepository.save(user); // Save User updates
        }

        System.out.println("DEBUG: Updating Worker Profile. ID=" + id);
        System.out.println("DEBUG: Input Bio=" + workerInput.getBio());
        System.out.println("DEBUG: Input Profession=" + workerInput.getProfessionTitle());

        // 3. Fetch existing Worker or Create New
        Worker workerToSave = workerRepository.findById(id).orElseGet(() -> {
            Worker newWorker = new Worker();
            newWorker.setUser(user);
            return newWorker;
        });

        // 3. Update Worker Fields
        workerToSave.setProfessionTitle(workerInput.getProfessionTitle());
        workerToSave.setBio(workerInput.getBio());

        // Ensure relationship is set (critical for @MapsId)
        workerToSave.setUser(user);

        return workerRepository.save(workerToSave);
    }

    public void deleteById(Long id) {
        workerRepository.deleteById(id);
    }

    public Map<String, Object> getDashboardStats(Long workerId) {
        Map<String, Object> stats = new HashMap<>();

        // 1. Total Earnings
        Double earnings = taskRepository.sumEarningsByWorkerId(workerId);
        stats.put("totalEarnings", earnings != null ? earnings : 0.0);

        // 2. Jobs Completed
        long completedJobs = taskRepository.countByWorkerIdAndStatus(workerId, "COMPLETED");
        stats.put("jobsCompleted", completedJobs);

        // 3. Active Bids (Mapped to Active Jobs / In Progress Tasks)
        long activeBids = taskRepository.countByWorkerIdAndStatus(workerId, "IN_PROGRESS");
        stats.put("activeBids", activeBids);

        // 4. Rating
        Optional<Worker> workerOpt = workerRepository.findById(workerId);
        if (workerOpt.isPresent() && workerOpt.get().getAverageRating() != null) {
            stats.put("rating", workerOpt.get().getAverageRating());
        } else {
            stats.put("rating", 0.0);
        }

        // 5. Recent Jobs
        List<com.tasklink.backend.model.Task> recentJobs = taskRepository.findByWorkerId(workerId);
        recentJobs.forEach(job -> {
            if (job.getClientId() != null) {
                userRepository.findById(job.getClientId()).ifPresent(user -> {
                    job.setClientName(user.getFirstName() + " " + user.getLastName());
                });
            }
        });
        stats.put("recentJobs", recentJobs);

        return stats;
    }

    public Worker getProfile(Long id) {
        return workerRepository.findById(id).orElseGet(() -> {
            com.tasklink.backend.model.User user = userRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("User not found"));
            return Worker.builder()
                    .id(id)
                    .user(user)
                    .professionTitle("Professional Worker")
                    .bio(user.getBio() != null ? user.getBio() : "No bio available")
                    .totalEarnings(java.math.BigDecimal.ZERO)
                    .averageRating(java.math.BigDecimal.ZERO)
                    .build();
        });
    }
}

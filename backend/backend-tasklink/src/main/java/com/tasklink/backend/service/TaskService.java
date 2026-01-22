package com.tasklink.backend.service;

import com.tasklink.backend.model.Task;
import com.tasklink.backend.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private com.tasklink.backend.repository.UserRepository userRepository;

    @org.springframework.transaction.annotation.Transactional
    public Task createTask(Task task) {
        String catName = task.getCategoryInput();
        if (catName != null) {
            Integer catId = taskRepository.findCategoryIdByName(catName);
            if (catId == null) {
                taskRepository.createCategory(catName);
                catId = taskRepository.findCategoryIdByName(catName);
            }
            task.setCategoryId(catId);
        }
        return taskRepository.save(task);
    }

    public List<Task> getTasksByClientId(Long clientId) {
        List<Task> tasks = taskRepository.findByClientId(clientId);
        tasks.forEach(task -> {
            if (task.getWorkerId() != null) {
                userRepository.findById(task.getWorkerId()).ifPresent(worker -> {
                    task.setWorkerName(worker.getFirstName() + " " + worker.getLastName());
                });
            }
        });
        return tasks;
    }

    public List<Task> getTasksByWorkerId(Long workerId) {
        List<Task> tasks = taskRepository.findByWorkerId(workerId);
        tasks.forEach(task -> {
            if (task.getClientId() != null) {
                userRepository.findById(task.getClientId()).ifPresent(user -> {
                    task.setClientName(user.getFirstName() + " " + user.getLastName());
                    task.setClientAddress(user.getAddress());
                    task.setClientPhone(user.getPhone());
                });
            }
            if (task.getCategoryId() != null) {
                String catName = taskRepository.findCategoryNameById(task.getCategoryId());
                task.setCategoryInput(catName);
            }
        });
        return tasks;
    }

    public List<Task> getAllTasks() {
        List<Task> tasks = taskRepository.findAll();
        tasks.forEach(task -> {
            if (task.getCategoryId() != null) {
                String catName = taskRepository.findCategoryNameById(task.getCategoryId());
                task.setCategoryInput(catName);
            }
            if (task.getClientId() != null) {
                userRepository.findById(task.getClientId()).ifPresent(user -> {
                    task.setClientName(user.getFirstName() + " " + user.getLastName());
                    task.setClientAddress(user.getAddress());
                    task.setClientPhone(user.getPhone());
                });
            }
        });
        return tasks;
    }

    public Task acceptTask(Long taskId, Long workerId) {
        Task task = taskRepository.findById(taskId).orElseThrow(() -> new RuntimeException("Task not found"));
        if (!"OPEN".equals(task.getStatus())) {
            throw new RuntimeException("Task is not open for acceptance");
        }
        task.setWorkerId(workerId);
        task.setStatus("IN_PROGRESS");
        return taskRepository.save(task);
    }

    public Task completeTask(Long taskId) {
        Task task = taskRepository.findById(taskId).orElseThrow(() -> new RuntimeException("Task not found"));
        if ("COMPLETED".equals(task.getStatus())) {
            throw new RuntimeException("Task is already completed");
        }
        task.setStatus("COMPLETED");
        return taskRepository.save(task);
    }

    public void deleteTask(Long taskId) {
        if (!taskRepository.existsById(taskId)) {
            throw new RuntimeException("Task not found");
        }
        taskRepository.deleteById(taskId);
    }

    public Map<String, Object> getDashboardStats(Long userId) {
        long totalTasks = taskRepository.countByClientId(userId);
        long inProgress = taskRepository.countByClientIdAndStatus(userId, "IN_PROGRESS");
        long completed = taskRepository.countByClientIdAndStatus(userId, "COMPLETED");
        Double spent = taskRepository.sumSpentByClientId(userId);

        Map<String, Object> stats = new HashMap<>();
        stats.put("totalTasks", totalTasks);
        stats.put("inProgress", inProgress);
        stats.put("completed", completed);
        stats.put("spent", spent != null ? spent : 0.0);

        return stats;
    }
}

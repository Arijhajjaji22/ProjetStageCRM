package net.javaguides.springboot.web;

import net.javaguides.springboot.model.Task;
import net.javaguides.springboot.model.UserCrm;
import net.javaguides.springboot.repository.TaskRepository;
import net.javaguides.springboot.service.TaskService;
import net.javaguides.springboot.service.UserCrmService;
import net.javaguides.springboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    private final TaskService taskService;
    @Autowired
    private UserService userService;
    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }
    @Autowired
    private TaskRepository taskRepository;

    @GetMapping
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskRepository.save(task);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task updatedTask) {
        Task existingTask = taskService.getTaskById(id);

        if (existingTask != null) {
            // Mettez à jour les champs de la tâche existante avec les nouvelles valeurs
            existingTask.setTaskName(updatedTask.getTaskName());
            existingTask.setDeveloper(updatedTask.getDeveloper());
            existingTask.setTaskDescription(updatedTask.getTaskDescription());
            existingTask.setStatus(updatedTask.getStatus());
            existingTask.setCategory(updatedTask.getCategory());
            existingTask.setEstimatedHours(updatedTask.getEstimatedHours());
            existingTask.setStartDate(updatedTask.getStartDate());
            existingTask.setEndDate(updatedTask.getEndDate());
            // Mettez à jour d'autres champs de la même manière...

            // Sauvegardez la tâche mise à jour
            Task savedTask = taskService.saveTask(existingTask);

            return ResponseEntity.ok(savedTask);
        } else {
            return ResponseEntity.notFound().build();
        }
    }



}

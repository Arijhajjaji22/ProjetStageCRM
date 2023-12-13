package net.javaguides.springboot.service;

import net.javaguides.springboot.model.Task;
import net.javaguides.springboot.model.UserCrm;
import net.javaguides.springboot.repository.TaskRepository;
import net.javaguides.springboot.repository.UserCrmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {


    private final TaskRepository taskRepository;
    private final UserCrmRepository userCrmRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository,
                       UserCrmRepository userCrmRepository) {
        this.taskRepository = taskRepository;
        this.userCrmRepository = userCrmRepository;
    }

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }
    public Task addTask(Task task) {
        // Ajoutez la logique nécessaire pour créer une nouvelle tâche ici, par exemple :
        // task.setStatus("À faire");
        // task.setPriority("Normale");
        // task.setStartDate(LocalDate.now());
        // task.setEndDate(LocalDate.now().plusDays(1));
        return taskRepository.save(task);
    }
    public Task getTaskById(Long id) {
        return taskRepository.findById(id).orElse(null);
    }

    public void deleteTask(Long taskId) {
        taskRepository.deleteById(taskId);
    }
    public Task updateTask(Long id, Task task) {
        Task existingTask = taskRepository.findById(id).orElse(null);

        if (existingTask != null) {
            // Mettez à jour les champs de la tâche existante avec les nouvelles valeurs
            existingTask.setTaskName(task.getTaskName());
            existingTask.setTaskDescription(task.getTaskDescription());
            existingTask.setStatus(task.getStatus());
            existingTask.setCategory(task.getCategory());
            existingTask.setEstimatedHours(task.getEstimatedHours());
            existingTask.setStartDate(task.getStartDate());
            existingTask.setEndDate(task.getEndDate());
            // Ajoutez d'autres champs à mettre à jour ici si nécessaire

            return taskRepository.save(existingTask);
        }

        return null;
    }

    public Task saveTask(Task task) {
        return taskRepository.save(task);
    }
    // Ajoutez ici d'autres méthodes pour les opérations de mise à jour, de suppression, etc.


}

package net.javaguides.springboot.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Optional;

@Entity
//@IdClass(TaskId.class)
public class Task {
//    @Id
//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User assignedUser;


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    @Transient
    private String deleteUrl;




    @Transient
    private String updateUrl;

    private String taskName;
    private String developer;
    private String category;
    private String taskDescription;
    private String estimatedHours;
    private LocalDate startDate;
    private LocalDate endDate;
    private String status;
    private String priority;

    public Task() {

    }

    public Task(Long id, String taskName, String developer, String category, String taskDescription, String estimatedHours, LocalDate startDate, LocalDate endDate, String status, String priority) {
        this.id = id;
        this.taskName = taskName;
        this.developer = developer;
        this.category = category;
        this.taskDescription = taskDescription;
        this.estimatedHours = estimatedHours;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.priority = priority;
    }
  

   

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public String getDeveloper() {
        return developer;
    }

    public void setDeveloper(String developer) {
        this.developer = developer;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getTaskDescription() {
        return taskDescription;
    }

    public void setTaskDescription(String taskDescription) {
        this.taskDescription = taskDescription;
    }

    public String getEstimatedHours() {
        return estimatedHours;
    }

    public void setEstimatedHours(String estimatedHours) {
        this.estimatedHours = estimatedHours;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }


    // Autres attributs et getters/setters
}

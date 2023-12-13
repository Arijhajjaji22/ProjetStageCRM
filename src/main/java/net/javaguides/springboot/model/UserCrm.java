package net.javaguides.springboot.model;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "usercrm")
public class UserCrm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;




    private String nom;
    private String prenom;
    private String email;
    private String tel;
    private String photo;
    private String adresse;
    private String cv;
    private Date dateNaissance;
    private String genre;
    private String position;

    private String availability;
    private String experienceLevel;

    private Date hireDate;
    private String portfolio;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String telephone) {
        this.tel = telephone;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getCv() {
        return cv;
    }

    public void setCv(String cv) {
        this.cv = cv;
    }

    public Date getDateNaissance() {
        return dateNaissance;
    }

    public void setDateNaissance(Date dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }



    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }

    public String getExperienceLevel() {
        return experienceLevel;
    }

    public void setExperienceLevel(String experienceLevel) {
        this.experienceLevel = experienceLevel;
    }



    public Date getHireDate() {
        return hireDate;
    }

    public void setHireDate(Date hireDate) {
        this.hireDate = hireDate;
    }

    public String getPortfolio() {
        return portfolio;
    }

    public void setPortfolio(String portfolio) {
        this.portfolio = portfolio;
    }

    public UserCrm() {
    }

    public UserCrm(Long id, String nom, String prenom, String email, String tel, String photo, String adresse, String cv, Date dateNaissance, String genre, String position, String availability, String experienceLevel, String username, Date hireDate, String portfolio) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.tel = tel;
        this.photo = photo;
        this.adresse = adresse;
        this.cv = cv;
        this.dateNaissance = dateNaissance;
        this.genre = genre;
        this.position = position;

        this.availability = availability;
        this.experienceLevel = experienceLevel;

        this.hireDate = hireDate;
        this.portfolio = portfolio;

    }
}
